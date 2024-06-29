module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'lower-case'], // Configura para sempre exigir letras minúsculas no subject
  },
}
