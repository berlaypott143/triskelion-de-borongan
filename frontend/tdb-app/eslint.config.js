import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import spellcheck from "eslint-plugin-spellcheck";

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
		settings: { react: { version: "18.3" } },
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			spellcheck,
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules,
			...reactHooks.configs.recommended.rules,
			"react/jsx-no-target-blank": "off",
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"spellcheck/spell-checker": [
				"warn",
				{
					comments: true,
					strings: true,
					identifiers: true,
					templates: true,
					lang: "en_US",
					skipWords: ["Topbar"],
					skipIfMatch: ["http://[^s]*", "^[-\\w]+/[-\\w\\.]+$"],
					minLength: 3,
				},
			],
		},
	},
];
