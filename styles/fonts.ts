import { createInterFont } from '@tamagui/font-inter';
// import { createFont } from 'tamagui';

// const interFont = createFont({
//   family: 'Inter, Helvetica, Arial, sans-serif',
//   size: {
//     1: 12,
//     2: 14,
//     3: 15,
//   },
//   lineHeight: {
//     // 1 will be 22
//     2: 22,
//   },
//   weight: {
//     1: '300',
//     // 2 will be 300
//     3: '600',
//   },
//   letterSpacing: {
//     1: 0,
//     2: -1,
//     // 3 will be -1
//   },
//   // (native only) swaps out fonts by face/style
//   face: {
//     300: { normal: 'InterLight', italic: 'InterItalic' },
//     600: { normal: 'InterBold' },
//   },
// })

const headingFont = createInterFont();
const bodyFont = createInterFont();

export { headingFont, bodyFont };