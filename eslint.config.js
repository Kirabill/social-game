const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const globals = require('globals');

module.exports = [
  {
    ignores: ['dist', 'coverage', 'node_modules', '.expo', 'android', 'ios'],
  },
  // Configuration pour les fichiers React Native (src/)
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'App.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        // Globals React Native
        __DEV__: 'readonly',
        FormData: 'readonly',
        XMLHttpRequest: 'readonly',
        fetch: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // React / React Native
      'react/react-in-jsx-scope': 'off', // React 17+ n'en a plus besoin
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error', // Détecte l'utilisation des variables dans JSX
      'react/prop-types': 'off', // On utilise TypeScript
      'react/display-name': 'off',
      // JS
      eqeqeq: ['error', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error', 'log', 'group', 'groupEnd', 'table'] }],
      'no-debugger': 'error',
      'prefer-const': 'warn',
      // Désactiver no-unused-vars de base pour TypeScript
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', // Détecte automatiquement la version de React
      },
    },
  },
  // Configuration pour les fichiers de config (racine)
  {
    files: ['*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        __DEV__: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: ['error', 'always'],
      'no-console': 'off', // Autoriser console dans les configs
      'no-debugger': 'error',
      'prefer-const': 'warn',
      'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    },
  },
];
