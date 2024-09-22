import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";


import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
