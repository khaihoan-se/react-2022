import { IBreakpoints } from "types"
// Size Variables for the GlobalStyles
export const sizes = {
    sizeBase: '16px',
}
// Colors Variables for the GlobalStyles
export const colors = {
    colorMain: '#3b2fc9',
    colorText: '#090b2b',
    colorWhite: '#fff',
    colorBlack: '#000',
    colorDaemon: '#c4c9ff80',
}
// Fonts Variables for the GlobalStyles
export const fonts = {
    fontBase: 'Poppins, sans-serif',
    fontHeading: 'PT Serif Caption, serif',
    fontLogo: 'Prata, serif'
}
// height and width of the Variables
export const paddings = {
    paddingHeader: '1rem 0px',
}
// GRID - media queries breakpoints
const mediaBreakpoints: IBreakpoints = {
    xxsMin: 576,
    xsMin: 768,
    smMin: 992,
    mdMin: 1200,
    lgMin: 1440,
}
// Media Queries Variables for the GlobalStyles
export const mediaQueries = {
    mediaQueryXS: `@media (max-width: ${mediaBreakpoints.xsMin - 1}px)`,
    mediaQuerySM: `@media (max-width: ${mediaBreakpoints.smMin - 1}px)`,
    mediaQueryMD: `@media (max-width: ${mediaBreakpoints.mdMin - 1}px)`,
    mediaQueryLG: `@media (max-width: ${mediaBreakpoints.lgMin - 1}px)`,
}