import { defineConfig, Preset } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix() as Preset],
    theme: {
      extend: {
        colors: {
          background: "#282828", // gruvbox dark background
          foreground: "#ebdbb2", // gruvbox dark light text
          primary: "#98971a",
          green: "#98971a",
          secondary: "#928374", // grayish color
          red: "#cc241d",
          bg1: "#3c3836",
          bg2: "#504945",
          bg3: "#7c6f64",
        },
        fontFamily: {
          sans: ['"Fira Code"', "monospace"],
        },
      },
    },
  }),
  selfURL: import.meta.url,
};
