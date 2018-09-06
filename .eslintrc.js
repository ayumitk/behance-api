module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'airbnb-base',
  'rules': {
    'no-multi-assign': 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'eol-last': 0,
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true
    }]
  }
};