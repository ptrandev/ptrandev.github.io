---
title: "Four Lessons on Making LLM Calls Fast, Cheap, and Accurate"
date: "2026-09-03"
description: "Production notes from hyzl, our AI voice agent platform: reach for a bigger model at low reasoning, use GPT-5.6 Luna for classification, benchmark against an oracle, and cache your prompt prefix."
tags: ['LLMs', 'Model Selection', 'Evaluation', 'Prompt Caching', 'Product Engineering']
featured: true
---

At [Atllas](https://atllas.com), we're building [hyzl](https://hyzl.ai), an AI voice agent platform that runs phone and text conversations for businesses. We handle everything from inbound receptionists to outbound calling campaigns.

A lot of it is powered by large language models, so I've spent a good deal of time picking and tuning models to be fast, cheap, and accurate enough for production. While some of these findings are specific to [OpenAI models](https://developers.openai.com/api/docs/models), you can generalize this advice to other models as well.

## 1. Reach for a larger model at lower reasoning before a smaller model at higher reasoning

There are many problems that smaller models just aren't good at solving. When you turn up the [reasoning effort](https://developers.openai.com/api/docs/guides/reasoning) to compensate, they often waste time writing tokens and still get the answer wrong. A larger model at lower effort tends to do much better. It saves you a meaningful amount of response latency, and sometimes cost as well.

I first noticed this when we switched one of our heavier analysis routines from [GPT-5 mini](https://developers.openai.com/api/docs/models/gpt-5-mini) at high reasoning to [GPT-5.4](https://developers.openai.com/api/docs/models/gpt-5.4) at low reasoning. We went from a slow, unreliable result to three or four seconds for an excellent response. This pattern shows up most on complicated, multi-part queries that ask the model to run several different analyses at once. If you're thinking you need a smaller model at higher reasoning, consider a larger model at lower reasoning instead. You'll usually get a better output with less latency.

I ran into the same thing while playing with some automated routines for finding credit card and bank account bonuses as a side project. The routine had to take in a lot of information, check whether I was eligible, and account for my personal goals. [Sonnet 5](https://platform.claude.com/docs/en/models/sonnet-5/overview) at high reasoning took a long time to work through it. [Opus 5](https://platform.claude.com/docs/en/models/opus-5/overview) at low reasoning actually did a better job, and it avoided many of Sonnet's pitfalls: hallucinating, taking a long time, and burning a lot of tokens.

One thing to watch is cost, which depends on the specific situation. In pure API cost, the Sonnet-to-Opus switch was slightly more expensive by less than a dollar. However, the GPT-5 mini high to GPT-5.4 low switch was noticeably cheaper, simply because we spent so many fewer reasoning tokens.

As a rule of thumb, I don't run the smallest mini- and nano-tier models at high reasoning at all. I typically reserve those for medium reasoning or below. Once a task needs more than medium reasoning, that's when you should step up to the next higher tier and use low reasoning on that larger model. For example, if I think I need to reach for Sonnet at high reasoning, I'll use Opus at low reasoning instead. Or if I think I need [5.6 Luna](https://developers.openai.com/api/docs/models/gpt-5.6-luna) at high reasoning, that's when I'll actually go for [5.6 Terra](https://developers.openai.com/api/docs/models/gpt-5.6-terra) at low reasoning.

## 2. 5.6 Luna is excellent for classification and extraction

The new 5.6 Luna model is very good at a variety of classification and extraction tasks. When we benchmarked it against the smaller models we'd been running, mostly [GPT-5.4 nano](https://developers.openai.com/api/docs/models/gpt-5.4-nano) and [GPT-5.4 mini](https://developers.openai.com/api/docs/models/gpt-5.4-mini), plus [GPT-4.1](https://developers.openai.com/api/docs/models/gpt-4.1) on some heavier generation tasks, on real production data with a full-size model adjudicating every disagreement, Luna came out ahead on most of them.

It matched or beat those incumbents on accuracy, often at the same reasoning level or even lower, and on our highest-volume site it picked up about two points of accuracy over the model it replaced. On the sites where it won, it cut per-request cost anywhere from a third to around 80%. For regular binary classification, Luna is amazing, and the cost savings are good too. If you're doing binary classification, 5.6 Luna is the first model I'd reach for and test.

## 3. Benchmark against an oracle to decide which model fits

How do you know which model is right for a task? The method I've settled on lets you answer that without spending much time. You build a benchmark with an oracle, a full-size model, typically [5.6 Sol](https://developers.openai.com/api/docs/models/gpt-5.6-sol), as the judge of whether a response is good. Whatever the oracle produces is treated as the best, correct answer. Then you benchmark a range of models at a range of reasoning levels against it. I typically select the model that most closely matches the oracle's output, while also considering cost and latency. This gives you a good idea of which model is best for your specific task.

I recommend this because it gets you good-enough results with little effort. The gold standard would be to look at the outputs directly and employ human labelers and judges to really interrogate which model is best. But if you're in a time pinch, or you need to evaluate a whole bunch of models at once, this benchmark method is the best approach I've found.

For the data, I'd use as much real production data as possible. If you truly need to, you can supplement with synthetic data generated by the judge itself. I'd treat that as a worst-case option, for when you don't have real data that fits the specific thing you're evaluating. In that circumstance, it's good to supplement your real data with synthetic data.

## 4. Prompt caching optimizes cost and latency at volume

Prompt caching is definitely worth setting up and the gains are better if you have higher volume. There are two things you'll have to keep in mind when it comes to properly using prompt caching for OpenAI models.

First, make sure that your prompt is optimized for caching in the first place. Make sure that the shared content comes first in the prompt because the cache only reuses this part. One of our high-volume analysis routes had a per-call value sitting up front and was caching nothing. Moving it to the end made the prompt cacheable. For OpenAI models in particular, only a prefix above the [minimum cacheable length](https://developers.openai.com/api/docs/guides/prompt-caching) can cache at all: 1,024 input tokens on GPT-5.6 and later, 2,048 on older models.

Second, set a [prompt cache key](https://developers.openai.com/api/docs/guides/prompt-caching), which keeps related requests on the same cache shard. This scales better with volume. A cache key improves the odds that a repeat request finds a warm shard, but it can't reuse a prefix that has already expired. With the reorder alone and low traffic, that route cached only around 20% of its input, and on our sparsest days it still caches almost nothing. But once the cache key was in place and traffic picked up, its cached share jumped to around 64%, roughly triple, which roughly halved its input cost. Our voice calls moved the same way: the share of outbound calls getting a cache hit rose from about 42% to about 63%.

Prompt caching is especially important for reducing latency on voice calls. On our voice receptionist I compared the same model with a cold cache against a warm one: warming the cache roughly halved the first-turn model latency and cut the whole-call model average by about a third. However, the model latency is only one part of the round trip in a voice call. Speech detection and voice synthesis also contribute to latency, so optimizing model latency is only one part of the puzzle.