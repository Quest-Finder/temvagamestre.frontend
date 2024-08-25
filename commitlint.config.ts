const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'lower-case'],
  },
  defaultIgnores: true,
}

export default Configuration
