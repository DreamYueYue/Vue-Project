import VueRouter from 'vue-router';
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import NewsList from './components/home/NewsComponent/NewsList.vue';
import NewsInfo from './components/home/NewsComponent/NewsInfo.vue';
import ImgsList from './components/home/PhotoComponent/ImgsList.vue';
import GoodsList from './components/home/GoodsComponent/GoodsList.vue';
import GoodsInfo from './components/home/GoodsComponent/GoodsInfo.vue';

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/imgslist', component: ImgsList },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo }
    ],
    linkActiveClass: 'mui-active'
});

export default router;