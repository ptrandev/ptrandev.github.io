/**
 * The Kirkham theme set a 1.5rem baseline. Its generated CSS now lives in
 * src/styles/typography.css, so this only has to reproduce the spacing helper
 * that every styled component calls.
 */
const BASELINE_REM = 1.5

export const rhythm = value => `${value * BASELINE_REM}rem`
