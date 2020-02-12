import Vue from 'vue';
import App from './App';
import router from './router';
import 'bulma/css/bulma.css';
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css';
import 'bulma-divider/dist/css/bulma-divider.min.css';
import './css/style.css';

Vue.config.productionTip = false;
// Vue.use(bulma);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
