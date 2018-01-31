import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueRouter from 'vueRouter';
import router from './router';
import store from './store/store';
import axios from './http'

Vue.config.debug = true;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.axios = axios;     // 这样项目中使用axios就可以直接用 this.axios.

new Vue({
    el: '#app',
    router,
    store
});