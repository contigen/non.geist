const fontWeights = {
  thin: 100,
  ultralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 800,
  ultrablack: 900,
}

export function findFontWeight(fontWeightName: string) {
  fontWeightName = fontWeightName.split(`-`)[1].toLowerCase()
  for (const [key, value] of Object.entries(fontWeights)) {
    if (key === fontWeightName) return value
  }
  return 700
}
