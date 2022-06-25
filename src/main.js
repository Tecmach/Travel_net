import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import AppLayout from "./layouts/AppLayout";

import './assets/css/global-styles.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { apiMaps } from './config/Index'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: apiMaps,
    },
});
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('AppLayout', AppLayout);

Vue.config.productionTip = false
import './mixins';
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')