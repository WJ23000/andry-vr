module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-this-alias": ["off"]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    },
    {
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/camelcase": 0,
        "no-use-before-define": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/no-use-before-define": 0
        // "@typescript-eslint/no-this-alias": 0,
      }
    },
    {
      files: ["*.vue"],
      rules: {
        "@typescript-eslint/camelcase": 0,
        "no-use-before-define": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/no-use-before-define": 0
        // "@typescript-eslint/no-this-alias": 0,
      }
    }
  ]
};
