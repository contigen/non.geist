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
  // Split the filename by '-'
  const parts = fontWeightName.split('-');
  // Get the last part which should contain the weight (e.g., 'Bold', 'BoldItalic')
  let fontWeightPart = parts[parts.length - 1].toLowerCase();
  
  // Check if it ends with 'italic' and remove it to get the base weight
  if (fontWeightPart.endsWith('italic')) {
    fontWeightPart = fontWeightPart.slice(0, -6); // Remove 'italic' from the end
  }
  
  for (const [key, value] of Object.entries(fontWeights)) {
    if (key === fontWeightPart) return value;
  }
  return 700;
}

export function isFontItalic(fontName: string) {
  const parts = fontName.split('-');
  const lastPart = parts[parts.length - 1].toLowerCase();
  return lastPart.endsWith('italic');
}
