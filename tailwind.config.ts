import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-pattern":"url('/image.png')"
      },
      colors: {
        'primary': "#17153B",
        "secondary": "#2E236C",
        "third":"#433D8B",
        "fourth":"#C8ACD6",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },animation:{
      meteor: "meteor 5s linear infinite",
      ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
    },
    keyframes:{
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "100" },
        "70%": { opacity: "100" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
      ripple: {
        "0%, 100%": {
          transform: "translate(-50%, -50%) scale(1)",
        },
        "50%": {
          transform: "translate(-50%, -50%) scale(0.9)",
        },
      }, marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
    }
  },
  plugins: [],
};
export default config;
