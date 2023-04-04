module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  plugins: ['@typescript-eslint', "no-loops", "jsx-a11y", "prefer-arrow"],
  root: true,
  rules: {
    // ESLint rules
    "no-alert": 2,
    "no-debugger": 2,
    "no-loops/no-loops": 2,
    "no-return-assign": 0,
    "default-case": 0,
    "no-void": 0,
    "array-callback-return": 0,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "consistent-return": 0,
    "no-console": 0,
    "no-explicit-any": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    // TypeScript rules
    "@typescript-eslint/no-explicit-any": 0,
    // React rules
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    // Other rules
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "jest/no-disabled-tests": 0,
    "jest/expect-expect": 0,
    "jest/no-commented-out-tests": 0,
    "function-paren-newline": 0,
    "react/jsx-wrap-multilines": 0,
    "@typescript-eslint/indent": 0,
    // We re-export default in many places, remove when https://github.com/airbnb/javascript/issues/2500 gets resolved
    "no-restricted-exports": "off",
    "implicit-arrow-linebreak": "off"
  }
};