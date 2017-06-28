import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueRouter from 'vueRouter';
import router from './router';
import store from './store/store.js';

Vue.config.debug = true;

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: router,
    store: store
});