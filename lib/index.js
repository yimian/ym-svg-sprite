import YiSvg from './YiSvg.vue';
import YiSvgLocal from './YiSvgLocal.vue';

const myPlugin = {
  install(Vue, option = {}) {
    Vue.component('YiSvg', YiSvg);
    if (option && option.useLocal) Vue.component('YiSvgLocal', YiSvgLocal);
  },
};

export default myPlugin;
