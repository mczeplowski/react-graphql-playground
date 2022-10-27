module.exports = {
  '(pages|modules|components)/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  '**/*.(ts|tsx|js)': filenames => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`
  ]
};
