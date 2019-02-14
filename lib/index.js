import YmSvg from './YmSvg.vue';

const myPlugin = {
  install(Vue) {
    Vue.component('YmSvg', YmSvg);
  },
};

export default myPlugin;
