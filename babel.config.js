const presets = [
  [
    '@babel/env',
    {
      targets: '>0.2%, not dead, not ie <= 11, not op_mini all'
    }
  ],
  ['minify']
];

module.exports = { presets, comments: false };
