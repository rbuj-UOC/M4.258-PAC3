#!/bin/bash
npm install --save @fortawesome/fontawesome-free
npm install --save normalize-scss

npm install --save-dev prettier@3.3.0 @awmottaz/prettier-plugin-void-html

npm init @eslint/config

npm install --save-dev \
  prettier-eslint \
  eslint-config-prettier \
  eslint-plugin-prettier \
  @html-eslint/parser \
  @html-eslint/eslint-plugin \
  eslint-plugin-html

npm i -D tailwindcss postcss
npm i -D husky lint-staged
