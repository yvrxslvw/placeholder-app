module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [1, { allowConstantExport: true }],
		'import/prefer-default-export': 0,
		'import/no-unresolved': 0,
		'import/no-extraneous-dependencies': 0,
		semi: 2,
		'no-console': 1,
		'no-multi-spaces': 2,
		'space-infix-ops': 2,
		'arrow-spacing': 2,
		'func-style': [2, 'expression'],
		indent: [2, 'tab'],
		'react-refresh/only-export-components': 0,
		'eol-last': 2,
		'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }],
		'react-hooks/exhaustive-deps': 0,
		'@typescript-eslint/no-unused-vars': 0,
	},
};
