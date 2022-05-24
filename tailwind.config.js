module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        900: "#161421",
        700: "#332B61",
        500: "#4B418A",
        300: "#877DC9",
        100: "#EBE9F5",
      },
      secondary: {
        900: "#433217",
        700: "#8B621F",
        500: "#FCAE30",
        300: "#FFD590",
        100: "#F1ECE4",
      },
      ternary: {
        900: "#172527",
        700: "#1B4147",
        500: "#256A75",
        300: "#6EB1BC",
        100: "#E6F2F3",
      },
      greyscale: {
        black: "#191919",
        800: "#31302F",
        700: "#504F4D",
        600: "#6D6C6A",
        500: "#8E8C88",
        400: "#B7B3AD",
        300: "#D9D6D2",
        200: "#F0EEEB",
        white: "#FAFAFA",
      },
      semantic: {
        positive: {
          700: "#0B5633",
          500: "#19C172",
          100: "#F3FFF0",
        },
        warning: {
          700: "#642C04",
          500: "#E28D50",
          100: "#F9E8CF",
        },
        negative: {
          700: "#580E09",
          500: "#CC3E2F",
          100: "#FFDEDA",
        },
        info: {
          700: "#0F3266",
          500: "#4AA8D8",
          100: "#E1F7FF",
        },
      },
      dark: {
        80: "rgba(25,25,25,.8)",
        60: "rgba(25,25,25,.6)",
        40: "rgba(25,25,25,.4)",
        20: "rgba(25,25,25,.2)",
      },
      light: {
        80: "rgba(250,250,250,.8)",
        60: "rgba(250,250,250,.6)",
        40: "rgba(250,250,250,.4)",
        20: "rgba(250,250,250,.2)",
      },
      background: {
        700: "#E4E2DD",
        500: "#F1F1EE",
        100: "#FBFBF9",
      },
    },
    fontFamily: {
      sato: ["sato-v", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
