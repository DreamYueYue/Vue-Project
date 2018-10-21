<template>
    <div class="container">
        <transition @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
            <div class="ball" v-show="showBall" ref="ball"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swpper :imgList="imgList" :isWidth="false"></swpper>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品的名称标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        市场价:<span class="old_price">￥2399</span>
                        销售价:<span class="new_price">￥2199</span>
                    </p>
                    <p>
                        购买数量:<numberBox @getCount="getSelectCount" :max="66"></numberBox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:S2014060626</p>
                    <p>库存情况:88888件</p>
                    <p>上架时间:2018-8-8 18:08</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                <mt-button type="danger" size="large" plain>商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import swpper from '../../common/Swpper.vue';
import numberBox from '../../common/NumberBox.vue';
export default {
    data() {
        return {
            imgList: [{
                id: 1,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.810-_6091b088fcb74b00bde6ec93e69f1e9f.jpg'
            }, {
                id: 2,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.809-_9fb632a510db42709b26687f3b26db48.jpg'
            }, {
                id: 3,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.808-_ed7f0468f5f44784bbb611f8a01784e3.jpg'
            }],
            showBall: false,
            selectCount: 1
        };
    },
    methods: {
        addToShopCar() {
            this.showBall = !this.showBall;
        },
        beforeEnter(el) {
            el.style.transform = 'translate(0,0)';
        },
        enter(el, done) {
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const carPosition = document.getElementById('badge').getBoundingClientRect();
            const distX = carPosition.left - ballPosition.left;
            const distY = carPosition.top - ballPosition.top;
            el.offsetWidth;
            el.style.transform = `translate(${distX}px,${distY}px)`;
            el.style.transition = 'all 1s cubic-bezier(.4,-0.3,1,.68)';
            done();
        },
        afterEnter(el) {
            this.showBall = !this.showBall;
        },
        getSelectCount(count) {
            this.selectCount = count;
            console.log("拿到的数量为:" + this.selectCount);
        }
    },
    components: {
        swpper,
        numberBox
    }
}
</script>
<style lang="less" scoped>
.container {
    background-color: #ddd;
    overflow: hidden;

    .old_price {
        text-decoration: line-through;
    }

    .new_price {
        color: red;
        font-weight: bold;
    }

    .mui-card-footer {
        display: block;

        button {
            margin: 15px 0;
        }
    }

    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 390px;
        left: 140px;
    }
}
</style>