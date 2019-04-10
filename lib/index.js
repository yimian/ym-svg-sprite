import YmSvg from './YmSvg.vue';

const myPlugin = {
  install: function install(Vue) {
    Vue.component('YmSvg', YmSvg);
  },
};

export default myPlugin;
