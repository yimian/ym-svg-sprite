import YiSvg from './YiSvg.vue';

const myPlugin = {
  install(Vue) {
    Vue.component('YiSvg', YiSvg);
  },
};

export default myPlugin;
