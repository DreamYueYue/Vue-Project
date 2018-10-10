import Vue from 'vue';
import VueRouter from 'vue-router';
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(VueRouter);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import app from './App.vue';
import './lib/mui/dist/css/mui.min.css';
import './lib/mui/dist/css/icons-extra.css';
import router from './router.js';

const vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router
});