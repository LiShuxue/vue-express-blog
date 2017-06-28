import Vue from 'vue';
import VueRouter from 'vueRouter';
import App from './App';
import Home from './page/home';
import Blog from './page/blog';
import Category from './page/category';
import About from './page/about';

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect:'/home'},
    {path: '/home', name:'home', component: Home},
    {path: '/app', name:'app', component: App, redirect:'/app/blog',
        children: [
            {path: '/app/blog', name:'menu1', component: Blog},
            {path: '/app/category', name:'menu2', component: Category},
            {path: '/app/about', name:'menu4', component: About}
        ]
    }
];

const router = new VueRouter({
    routes: routes,
    history: true
});

export default router;