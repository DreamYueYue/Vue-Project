<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.imgSrc">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发布时间:{{item.publishTime}}</span>
                            <span>点击次数:{{item.clickTimes}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        <h1>我是新闻列表页面</h1>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            newsList: [{
                id: 1,
                imgSrc: '../../src/images/shuijiao.jpg',
                title: '幸福',
                publishTime: '2018-09-31',
                clickTimes: 6
            }, {
                id: 2,
                imgSrc: '../../src/images/muwu.jpg',
                title: '木屋',
                publishTime: '2018-10-01',
                clickTimes: 5
            }, {
                id: 3,
                imgSrc: '../../src/images/cbd.jpg',
                title: 'CBD',
                publishTime: '2018-10-02',
                clickTimes: 8
            }]
        }
    }
}
</script>
<style lang="less" scoped>
.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }

        .mui-ellipsis {
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>