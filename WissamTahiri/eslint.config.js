import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // 🛠️ Ajouts stricts :
      "no-console": "warn", // avertit si console.log dans le code
      "no-debugger": "error", // interdit le debugger
      eqeqeq: ["error", "always"], // impose === au lieu de ==
      curly: "error", // force les { } dans les blocs
      "no-implicit-coercion": "warn", // interdit les conversions implicites (ex: !!val)
      "no-magic-numbers": [
        "warn",
        { ignore: [0, 1, -1], ignoreArrayIndexes: true },
      ],
      "consistent-return": "warn", // force à toujours return ou jamais dans les fonctions
      "no-var": "error", // impose let/const
      "prefer-const": "error", // préfère const si pas de réassignation
      "prefer-arrow-callback": "error", // encourage les fonctions fléchées
    },
  },
];
