import { createFont, createTokens } from 'tamagui'

// Create a font:

// To work with the tamagui UI kit styled components (which is optional)
// you'd want the keys used for `size`, `lineHeight`, `weight` and
// `letterSpacing` to be consistent. The `createFont` function
// will fill-in any missing values if `lineHeight`, `weight` or
// `letterSpacing` are subsets of `size`.



// Set up our tokens

// The keys can be whatever you want, but we do recommend keeping them
// consistent across the different token categories and intended for
// usage together to make nice designs - eg for a Button to use.

const size = {
  0: 0,
  1: 5,
  2: 10,
  // ....
}

export const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#000',
  },
})