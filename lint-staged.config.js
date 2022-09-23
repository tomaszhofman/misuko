module.exports = {
  '*.{jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yaml,yml,scss,css}': ['prettier --write'],
  '*.js': 'eslint --cache --fix',
};
