{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["airbnb", "prettier"],
  "rules": {
    "linebreak-style": ["error", "windows"],
    "import/no-unresolved": "off",
    "import/no-dynamic-require": "off",
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "args": "none"
      }
    ],
    "import/extensions": [
      {
        "ts": "never"
      }
    ]
  },
  "settings": {
    "import/parsers/extensions": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  "env": {
    "commonjs": true,
    "node": true,
    "jest": true
  }
}
