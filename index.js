module.exports = {
  plugins: ['simple-import-sort'],
  
  rules: {
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
  },
};

