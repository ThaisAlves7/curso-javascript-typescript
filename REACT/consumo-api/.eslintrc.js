module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'eslint:recommended',
    // 'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    Atomics: 'readonly',
  },
  overrides: [],
  parser: '@babel/eslint-parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOption: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },

  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 'off',
    'default-param-last': 0,
    'react/jsx-no-bind': 0,
  },
};
