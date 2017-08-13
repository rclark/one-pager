'use strict';

module.exports = (org, name) => JSON.stringify({
  name: name,
  version: '1.0.0',
  repository: `git@github.com:${org}/${name}`,
  author: `${org[0].toUpperCase()}${org.slice(1)}`,
  license: 'BSD-2-Clause',
  dependencies: {
    'prop-types': '^15.5.10',
    react: '^15.6.1',
    'react-codemirror': '^1.0.0',
    'react-dom': '^15.6.1'
  },
  devDependencies: {
    'babel-preset-es2015': '^6.24.1',
    'babel-preset-react': '^6.24.1',
    babelify: '^7.3.0',
    browserify: '^14.4.0',
    budo: '^10.0.4',
    envify: '^4.1.0',
    eslint: '^4.3.0',
    'eslint-plugin-react': '^7.1.0',
    'uglify-js': '^3.0.26'
  },
  scripts: {
    build: 'browserify src/index.js -t envify -t [ babelify --global ] | uglifyjs > bundle.js',
    start: 'budo src/index.js:bundle.js --live -- -t envify -t [ babelify --global ] '
  },
  babel: {
    presets: [
      'es2015',
      'react'
    ]
  }
}, null, 2);
