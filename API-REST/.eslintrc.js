module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb-base"],
  global: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "camelcase": "off"
  },
};