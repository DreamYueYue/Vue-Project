<template>
    <div>
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imgList" :key="item.id">
                <img :src="item.src"/>
            </mt-swipe-item>
        </mt-swipe> -->
        <swpper :imgList="imgList" :isWidth="true"></swpper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/imgslist">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品列表</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">Phone</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-gear"></span>
                            <div class="mui-media-body">Setting</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-info"></span>
                            <div class="mui-media-body">about</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-more"></span>
                            <div class="mui-media-body">more</div></a></li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import swpper from '../common/Swpper.vue';
export default {
    data() {
        return {
            imgList: [{
                id: 1,
                src: './../../src/images/cat1.jpg'
            }, {
                id: 2,
                src: './../../src/images/cat2.jpg'
            }, {
                id: 3,
                src: './../../src/images/cat3.jpg'
            }]
        };
    },
    components: {
        swpper
    }
}
</script>
<style lang="less" scoped>
</style>