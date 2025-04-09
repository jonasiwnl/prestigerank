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
      bg: "bg-bg3 hover:bg-bg2",
      text: "text-foreground",
      link: "text-green",
      border: "border-foreground",
    },
  },
  {
    max: 10,
    theme: {
      bg: "bg-bg2 hover:bg-bg1",
      text: "text-foreground",
      link: "text-green",
      border: "border-secondary",
    },
  },
  {
    max: 20,
    theme: {
      bg: "bg-bg1 hover:bg-background",
      text: "text-foreground",
      link: "text-green",
      border: "border-bg3",
    },
  },
];

const defaultTheme: Theme = {
  bg: "bg-bg1 hover:bg-background",
  text: "text-foreground",
  link: "text-green",
  border: "border-bg3",
};

export function getColorValue(idx: number): Theme {
  for (const { max, theme } of colorValues) {
    if (idx < max) return theme;
  }
  return defaultTheme;
}
