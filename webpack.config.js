const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    auth: './src/admin/auth.js',
    adminTable: './src/admin/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development'
};
