<template>
    <div class="container">
        <div class="goods_list" v-for="(item,index) in car" :key="item.id">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="item.selected" @change="updateSelect(item.id,item.selected)"></mt-switch>
                        <img v-lazy="'../../../src/images/goods_img/iphone.jpg'">
                        <div class="info">
                            <h1>小米mix3 6G+128G</h1>
                            <div class="detail">
                                <span class="price">￥{{item.price}}</span>
                                <numberBox :number="item.number" :id="item.id"></numberBox>
                                <a href="#" @click.prevent="remove(index,item.id)">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner clear">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品 <span>{{$store.getters.getSelectInfo.count}}</span> 件,总价 ￥<span>{{$store.getters.getSelectInfo.account}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import numberBox from '../common/ShoppingCarNumberBox.vue';
export default {
    data() {
        return {
            car: []
        };
    },
    created() {
        this.initCar();
    },
    methods: {
        initCar() {
            this.car = JSON.parse(localStorage.getItem('car')) || [];
        },
        remove(index, id) {
            this.car.splice(index, 1);
            this.$store.commit('deleteCar', id);
        },
        updateSelect(id, selected) {
            var info = {
                id: id,
                selected: selected
            };
            this.$store.commit('updateSelect', info);
        }
    },
    components: {
        numberBox
    }
}
</script>
<style lang="less" scoped>
.container {
    background-color: #eee;
    overflow: hidden;

    .mui-card-content-inner {
        display: flex;
        align-items: center;

        img {
            width: 60px;
            height: auto;
        }

        .info {
            h1 {
                font-size: 14px;
            }

            .detail {
                .price {
                    color: red;
                    font-weight: bold;
                }
            }
        }
    }

    .clear {
        justify-content: space-between;

        span {
            color: red;
            font-weight: bold;
        }
    }
}
</style>