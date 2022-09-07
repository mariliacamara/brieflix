module.exports = {
  "**/*.t(s|sx)": [
    "npx eslint --config .eslintrc.js --ext .ts,.tsx . --fix"
  ],
  "**/*.js": [
    "npx eslint --config .eslintrc.js --ext .js --fix"
  ]
}