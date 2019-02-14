## ym-svg-sprite

<a href="https://www.npmjs.com/package/ym-svg-sprite">
  <img src="https://img.shields.io/npm/v/ym-svg-sprite.svg" alt="NPM">
</a>
<a href="https://github.com/sishenhei7/ym-svg-sprite/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENSE">
</a>

`ym-svg-sprite` is used to build svg sprite in vue

## How

This plugin uses 'file-loader' to load normal svg files, and uses 'svg-sprite-loader' to build svg sprite.

Also, it uses 'svgo' and 'svgo-loader' to compress svg sprite.(It deletes the titles and annotations in svg)

## Getting Started

### install

To begin, you'll need to install svg-sprite-loader and ym-svg-sprite:

```
npm i svg-sprite-loader --save-dev
npm i svgo svgo-loader --save-dev
npm i ym-svg-sprite
```

### vue.config.js

Then add these settings to your vue.config.js file(if it does not exist, create one):

```
const path = require("path");

module.exports = {
  chainWebpack: config => {
    const resolve = dir => path.join(__dirname, dir);
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    svgRule
      .test(/\.(svg)(\?.*)?$/)
      .oneOf('name')
        .include
          .add(resolve('src/assets/sprite.svg'))
          .end()
        .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'img/[name].[hash:8].[ext]'
          })
          .end()
        .end()
      .oneOf('normal')
        .exclude
          .add(resolve('src/assets/sprite'))
          .end()
        .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'img/[name].[hash:8].[ext]'
          })
          .end()
        .end()
      .oneOf('sprite')
        .include
          .add(resolve('src/assets/sprite'))
          .end()
        .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'sprite-[name]'
          })
          .end()
        .use('svgo-loader')
          .loader('svgo-loader')
          .options({
            plugins: [
              {removeTitle: true},
              {convertColors: {shorthex: false}},
              {convertPathData: false}
            ]
          });
  },
};
```

#### tips
All your svg files (to be built into svg sprite) should be placed under `src/assets/sprite` folder.

### main.js

Finally, import ym-svg-sprite in your main.js:

```
import SvgSprite from 'ym-svg-sprite';

Vue.use(SvgSprite);
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./assets/sprite', false, /\.svg$/);
requireAll(req);
```

#### tips
You can modify `src/assets/sprite` in both vue.config.js and main.js to change the default sprite folder.


## examples

You can use YiSvg as a vue component anywhere like this:

```
<ym-svg svgId="haha" className="app-svg"/>
```

#### tips
`svgId` is required, it is the name of your svg file.

## ToDo

- [x] implement `svgo` plugin.
- [ ] change it to vue-cli3 plugin.
