// prettier.config.js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  pluginSearchDirs: false,
  tailwindFunctions: ['clsx', 'tw'],
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  insertFinalNewline: true,
  bracketSpacing: true,
  tabWidth: 2,
  endOfLine: 'auto',
  jsxSingleQuote: true,
  singleAttributePerLine: true,
}
