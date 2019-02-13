## yi-svg-sprite

<a href="https://www.npmjs.com/package/yi-svg-sprite">
  <img src="https://img.shields.io/npm/v/yi-svg-sprite.svg" alt="NPM">
</a>
<a href="https://github.com/sishenhei7/yi-svg-sprite/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENSE">
</a>

`yi-svg-sprite` is used to build svg sprite in vue

## Getting Started

### install

To begin, you'll need to install svg-sprite-loader and yi-svg-sprite:

```
npm i svg-sprite-loader --save-dev
npm i yi-svg-sprite
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
      .test(/\.svg$/)
      .oneOf('normal')
      .exclude
        .add(resolve('src/assets/svg-sprite'))
        .end()
      .use('file-loader')
        .loader('file-loader')
        .end()
      .end()
      .oneOf('sprite')
      .include
        .add(resolve('src/assets/svg-sprite'))
        .end()
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'sprite-[name]'
        });
  }
};
```

#### tips
All your svg files should be placed under `src/assets/svg-sprite` folder.

### main.js

Finally, import yi-svg-sprite in your main.js:

```
import SvgSprite from 'yi-svg-sprite';

Vue.use(SvgSprite);
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./assets/svg-sprite', false, /\.svg$/);
requireAll(req);
```

#### tips
You can modify `src/assets/svg-sprite` in both vue.config.js and main.js to change the default sprite folder.


## examples

You can use YiSvg as a vue component anywhere like this:

```
<yi-svg svgId="haha" className="app-svg"/>
```

#### tips
`svgId` is required, it is the name of your svg file.

## ToDo

- implement `svgo` plugin.
- change it to vue-cli3 plugin.
