import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from "axios";
import VueAxios from "vue-axios";
import VModal from "vue-js-modal";
import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VModal, { dialog: true });
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
