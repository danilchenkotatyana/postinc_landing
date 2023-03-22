# Gulp template (updated May 2022)

## Plugins
- [gulp](https://gulpjs.com/)
- [del](https://www.npmjs.com/package/del)
- [gulp-file-include](https://www.npmjs.com/package/gulp-file-include)
- [gulp-fonter-fix](https://www.npmjs.com/package/gulp-fonter-fix)
- [gulp-if](https://www.npmjs.com/package/gulp-if)
- [gulp-ttf2woff2](https://www.npmjs.com/package/gulp-ttf2woff2)
- [gulp-util](https://www.npmjs.com/package/gulp-util)
- [webpack](https://www.npmjs.com/package/webpack)
- [webpack-stream](https://www.npmjs.com/package/webpack-stream)
- [webp-converter](https://www.npmjs.com/package/webp-converter)
- [gulp-webp-html-nosvg](https://www.npmjs.com/package/gulp-webp-html-nosvg)
- [gulp-zip](https://www.npmjs.com/package/gulp-zip)
- [gulp-webpcss](https://www.npmjs.com/package/gulp-webpcss)
- [vinyl-ftp](https://www.npmjs.com/package/vinyl-ftp)
- [gulp-version-number](https://www.npmjs.com/package/gulp-version-number)
- [browser-sync](https://browsersync.io/)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
- [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [gulp-newer](https://www.npmjs.com/package/gulp-newer)
- [gulp-notify](https://www.npmjs.com/package/gulp-notify)
- [gulp-nunjucks](https://www.npmjs.com/package/gulp-nunjucks)
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
- [gulp-rename](https://www.npmjs.com/package/gulp-rename)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite)
- [gulp-webp](https://www.npmjs.com/package/gulp-webp)
- [husky](https://www.npmjs.com/package/husky)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [pre-commit](https://www.npmjs.com/package/pre-commit)
- [stylelint](https://www.npmjs.com/package/stylelint)
- [stylelint-config-sass-guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines)
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)

## Installation
Use the package manager [npm](https://www.npmjs.com/) to install dependencies.
```bash
npm i
```

## Dev & watch
You can use
```bash
npm run dev
```

or

```bash
gulp
```
commands for building project in development mode.

## Production 
You can use
```bash
npm run build
```

or

```bash
gulp build
```
commands for building project in production mode.

## Zip archive 
You can use
```bash
npm run zip
```

or

```bash
gulp deployZIP
```
commands for creating zip archive for production

## SVG sprites 
You can use
```bash
npm run svgSprive
```

or

```bash
gulp svgSpriteTask
```
commands for creating svg sprites