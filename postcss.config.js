module.exports = {
  plugins: [
    // process.env.NODE_ENV === 'production'
    //   ? [
    //     '@fullhuman/postcss-purgecss',
    //     {
    //       content: [
    //         './pages/**/*.{js,jsx,ts,tsx}',
    //         './components/**/*.{js,jsx,ts,tsx}',
    //       ],
    //       defaultExtractor: content =>
    //         content.match(/[A-Za-z0-9-_:/]+/g) || [],
    //     },
    //   ]
    //   : undefined,
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}