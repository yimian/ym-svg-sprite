import Vue from 'vue';
import SvgSprite from '../../lib';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(SvgSprite);
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./assets/sprite', false, /\.svg$/);
requireAll(req);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
