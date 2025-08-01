module.exports = {
 // ... other settings
 rules: {
  '@typescript-eslint/no-unused-vars': [
   'error', // 또는 'warn'
   {
    'argsIgnorePattern': '^_',
    'varsIgnorePattern': '^_',
    'caughtErrorsIgnorePattern': '^_'
   }
  ]
 }
};