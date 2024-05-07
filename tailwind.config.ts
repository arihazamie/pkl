import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        Background: "#232946",
        Headline: "#fffffe",
        Paragraph: "#b8c1ec",
        Button: "#eebbc3",
        ButtonText: "#232946",
      },
    },
  },
} satisfies Config;

export default config;
