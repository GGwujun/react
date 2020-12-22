'use strict';

module.exports = {
  extends: [],

  // Stop ESLint from looking for a configuration file in parent folders
  root: true,

  plugins: [],

  parser: 'babel-eslint',
  parserOptions: {},

  rules: {},

  overrides: [],

  globals: {
    SharedArrayBuffer: true,

    spyOnDev: true,
    spyOnDevAndProd: true,
    spyOnProd: true,
    __EXPERIMENTAL__: true,
    __EXTENSION__: true,
    __PROFILE__: true,
    __TEST__: true,
    __UMD__: true,
    __VARIANT__: true,
    gate: true,
    trustedTypes: true,
  },
};
