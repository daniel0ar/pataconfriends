const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['sans-serif'],
      },
      colors: {
        // General
        page: {
          from_bg: colors.black,
          to_bg: colors.black,
        },
        titles: colors.black,
        links: {
          txt: colors.black,
          hover_txt: colors.indigo[700],
        },
        loading_spinner: colors.yellow[400],
        popups: {
          bg: colors.white,
          txt: colors.slate[800],
          internal_border: colors.slate[200],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.transparent,
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: colors.black,
          bg: colors.yellow[400],
          border: colors.slate[200],
          hover_txt: colors.black,
          hover_bg: colors.yellow[200],
          hover_border: colors.yellow[400],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.black,
        txt_input: {
          txt: colors.black,
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.black,
          focus_bg: colors.slate[50],
          focus_border: colors.indigo[300],
          placeholder_txt: colors.black,
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.white,
          bg: colors.black,
        },

        // Mint widget
        token_preview: colors.transparent,
      },
    },
  },
  variants: {},
  plugins: [],
};
