import module from '@eslint/js'

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  root: true,  
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions:{
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {    
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  },
}
