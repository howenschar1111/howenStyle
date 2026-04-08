const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    'postcss-import': {},
    'autoprefixer': {},
    ...(production ? { cssnano: {} } : {})
  }
};
