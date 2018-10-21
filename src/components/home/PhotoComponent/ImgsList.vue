<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                            推荐
                        </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                            热点
                        </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                            北京
                        </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                            社会
                        </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                            娱乐
                        </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                            体育
                        </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                            生活
                        </a>
                </div>
            </div>
        </div>
        <ul>
            <li v-for="item in imgList" :key="item.id">
                <img v-lazy="item.url">
                <div class="img_content">
                    <h1>{{item.title}}</h1>
                    <div class="body">{{item.body}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import mui from './../../../lib/mui/dist/js/mui.js';

export default {
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    data() {
        return {
            imgList: [{
                id: 1,
                url: '../../src/images/magazine-unlock-01-2.3.506-bigpicture_01_82.jpg',
                title: '西班牙--萨拉戈萨',
                body: '这里被欧洲人称作西班牙的翡冷翠,从历史建筑到美食,萨拉戈萨都值得一游'
            }, {
                id: 2,
                url: '../../src/images/magazine-unlock-01-2.3.529-bigpicture_01_30.jpg',
                title: '西班牙--瓦伦西亚',
                body: '东濒大海,背靠广阔的平原,气候宜人,被誉为"地中海西岸的一颗明珠"'
            }, {
                id: 3,
                url: '../../src/images/magazine-unlock-01-2.3.529-bigpicture_01_31.jpg',
                title: '西班牙--巴塞罗那',
                body: '加泰罗尼亚的港口城市,是享誉世界的地中海风光旅游目的地和历史文化名城'
            }, {
                id: 4,
                url: '../../src/images/magazine-unlock-01-2.3.529-bigpicture_01_32.jpg',
                title: '百内国家公园',
                body: '智利百内国家公园,是自然爱好者的乐园,也是自然风光摄影师梦寐以求的伊甸园'
            }, {
                id: 5,
                url: '../../src/images/magazine-unlock-01-2.3.535-bigpicture_01_20.jpg',
                title: '遗失的天堂',
                body: '意大利托斯卡纳是一片与世无争的净土,这里的一切是那么古老与永恒'
            }, {
                id: 6,
                url: '../../src/images/magazine-unlock-01-2.3.535-bigpicture_01_21.jpg',
                title: '职场穿搭技巧',
                body: '职场服饰不要太过于严肃,要做好气场与亲和力的平衡'
            }, {
                id: 7,
                url: '../../src/images/magazine-unlock-01-2.3.546-bigpicture_01_60.jpg',
                title: '治愈人心的小盆栽',
                body: '小小的盆栽,既能装点生活,亦能收获乐趣'
            }, {
                id: 8,
                url: '../../src/images/magazine-unlock-01-2.3.546-bigpicture_01_61.jpg',
                title: '现代简约风吊灯',
                body: '简约的东西给人更多的想象空间,并且百看不厌'
            }, {
                id: 9,
                url: '../../src/images/magazine-unlock-01-2.3.546-bigpicture_01_62.jpg',
                title: '西班牙--塞维利亚',
                body: '处处均洋溢着热情和繁荣的景象,显示着其悠久的历史'
            }, {
                id: 10,
                url: '../../src/images/magazine-unlock-05-2.3.801-_4766b6273dec48febb83ac82593c89ea.jpg',
                title: '西班牙--龙达',
                body: '龙达老城屹立于悬崖之上,给人一种惊心动魄的壮美之感'
            }]
        }
    }
}
</script>
<style lang="less" scoped>
* {
    touch-action: pan-y;
}



ul {
    margin: 0;
    padding: 10px;
    padding-bottom: 0;

    li {
        list-style: none;
        background-color: #ccc;
        margin-bottom: 10px;
        text-align: center;
        position: relative;

        img {
            width: 100%;
            height: auto;
            vertical-align: middle;
            box-shadow: 0 0 9px #999;
        }

        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }

        .img_content {
            text-align: left;
            color: white;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);

            h1 {
                font-size: 14px;
            }

            .body {
                font-size: 13px;
            }
        }
    }
}
</style>