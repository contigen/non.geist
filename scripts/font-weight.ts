const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

export function findFontWeight(fontWeightName: string) {
  const parts = fontWeightName.split('-')
  let fontWeightPart = parts[parts.length - 1].toLowerCase()
  if (fontWeightPart.endsWith('italic')) {
    fontWeightPart = fontWeightPart.slice(0, -6)
  }

  for (const [key, value] of Object.entries(fontWeights)) {
    if (key === fontWeightPart) return value
  }
  return 700
}

export function isFontItalic(fontName: string) {
  const parts = fontName.split('-')
  const lastPart = parts[parts.length - 1].toLowerCase()
  return lastPart.endsWith('italic')
}
