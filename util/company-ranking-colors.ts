type Theme = {
  bg: string;
  text: string;
  border: string;
  link: string;
};

const colorValues: { max: number; theme: Theme }[] = [
  {
    max: 3,
    theme: {
      bg: "bg-bg3",
      text: "text-foreground",
      link: "text-green",
      border: "border-bg2",
    },
  },
  {
    max: 10,
    theme: {
      bg: "bg-bg2",
      text: "text-foreground",
      link: "text-green",
      border: "border-secondary",
    },
  },
  {
    max: 20,
    theme: {
      bg: "bg-background",
      text: "text-foreground",
      link: "text-green",
      border: "border-secondary",
    },
  },
];

const defaultTheme: Theme = {
  bg: "bg-gruvbox-blue",
  text: "text-foreground",
  link: "text-green",
  border: "border-secondary",
};

export function getColorValue(idx: number): Theme {
  for (const { max, theme } of colorValues) {
    if (idx < max) return theme;
  }
  return defaultTheme;
}
