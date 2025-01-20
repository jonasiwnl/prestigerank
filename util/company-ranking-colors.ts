type Theme = {
  bgValue: number;
  textValue: number;
  linkValue: number;
};

const colorValues = [
  { max: 3, theme: { bgValue: 600, textValue: 200, linkValue: 300 } },
  { max: 10, theme: { bgValue: 400, textValue: 900, linkValue: 800 } },
];

const defaultTheme = { bgValue: 300, textValue: 900, linkValue: 700 };

export function getColorValue(idx: number): Theme {
  for (const { max, theme } of colorValues) {
    if (idx < max) return theme;
  }

  return defaultTheme;
}
