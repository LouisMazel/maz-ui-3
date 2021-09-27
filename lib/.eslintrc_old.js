const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: ['prettier', 'unicorn'],
  rules: {
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    'space-before-function-paren': ['error', 'never'],
    'arrow-parens': 0,
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'func-style': 'error',
    'max-len': [
      'warn',
      {
        code: 200
      }
    ],
    'no-unused-vars': ['error'],
    'no-undef': ['error', { typeof: true }],
    'no-loop-func': 'warn',
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'template-curly-spacing': 'off',
    'no-console': IS_PROD ? 'warn' : 'off',
    'no-debugger': IS_PROD ? 'warn' : 'off',
    'no-useless-concat': ['error'],
    'prefer-template': ['error'],
    // // Unicorn rules
    // 'unicorn/prefer-module': 'off',
    // 'unicorn/no-fn-reference-in-iterator': 'off',
    // 'unicorn/consistent-function-scoping': 'warn',
    // 'unicorn/filename-case': [
    //   'error',
    //   {
    //     case: 'kebabCase',
    //     ignore: ['\\.spec\\.(j|t)s$', '\\.stories\\.(j|t)s$', '\\.vue$', '\\.csv$'],
    //   }
    // ],
    // 'unicorn/prevent-abbreviations': 'off',
    // 'unicorn/no-null': 'off',

    // VUE RULES
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 1,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false
    //     }
    //   }
    // ],
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'any'
    //     }
    //   }
    // ],
    // 'vue/html-indent': [
    //   'error',
    //   2,
    //   {
    //     baseIndent: 1
    //   }
    // ],
    // 'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    // 'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 'vue/attributes-order': 'error',
    // 'vue/no-confusing-v-for-v-if': 'error',
    // 'vue/no-v-html': 'error',
    // 'vue/order-in-components': 'error',
    // 'vue/this-in-template': 'error',
    // 'vue/script-indent': 'error',
    // '@typescript-eslint/member-delimiter-style': [
    //   'error',
    //   {
    //     multiline: {
    //       delimiter: 'none',
    //       requireLast: true
    //     },
    //     singleline: {
    //       delimiter: 'semi',
    //       requireLast: false
    //     }
    //   }
    // ]
  },
  overrides: [
    {
      files: ['*.vue', '*.ts', '*.js'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, { baseIndent: 1 }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase']
      }
    }
  ]
}
