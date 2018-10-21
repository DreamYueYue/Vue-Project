<template>
    <div class="goods_list">
        <router-link :to="'/home/goodsinfo/'+item.id" tag="div" class="goods_item" v-for="item in goodsList" :key="item.id">
            <img :src="item.src">
            <div class="goods_info">
                <h1>精致的法拉利</h1>
                <div class="price">
                    <span class="new">￥899</span>
                    <span class="old">￥999</span>
                </div>
                <div class="goods_num">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            goodsList: [{
                id: 1,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.535-bigpicture_02_20.jpg'
            }, {
                id: 2,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.545-bigpicture_02_50.jpg'
            }, {
                id: 3,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.643-116409da4ddd481e8bd9890d1260e74e.jpg'
            }, {
                id: 4,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.653-_148a347ca97e47bba2476f7a2f58b56b.jpg'
            }, {
                id: 5,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.677-_38b6cfa2c89e4b82b6ceefdac9a3e715.jpg'
            }, {
                id: 6,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.779-_7081261ab259439e802a7212c5857a14.jpg'
            }, {
                id: 7,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.781-_0b600ad872d7428fbb72af8be63e373a.jpg'
            }, {
                id: 8,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.790-_1055fe88857949ac86ce23690aee1ac4.jpg'
            }, {
                id: 9,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.792-_a615822baacd4b4a97bc1197e7745fc9.jpg'
            }, {
                id: 10,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.796-_fd965eede80f430193f14aa0b77f1d32.jpg'
            }, {
                id: 11,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.798-_dbc59e4893b0421d8a197a7354262459.jpg'
            }, {
                id: 12,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.800-_466a3db95d584e04990d3d2aafbdbcd2.jpg'
            }, {
                id: 13,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.803-_3a8149757e164afd95af6fdfd99db849.jpg'
            }, {
                id: 14,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.806-_4dcbfa818b18404193ff8332663b8cdc.jpg'
            }, {
                id: 15,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.808-_ed7f0468f5f44784bbb611f8a01784e3.jpg'
            }, {
                id: 16,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.809-_9fb632a510db42709b26687f3b26db48.jpg'
            }, {
                id: 17,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.810-_6091b088fcb74b00bde6ec93e69f1e9f.jpg'
            }, {
                id: 18,
                src: '../../../../src/images/goods_img/magazine-unlock-02-2.3.817-_bd10f002ba3949d5b6945fb0310571c7.jpg'
            }]
        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.goods_list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-between;

    .goods_item {
        width: 49%;
        min-height: 380px;
        box-shadow: 0 0 8px #ccc;
        border: 1px solid #ccc;
        padding: 2px;
        margin: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
            width: 100%;
        }

        .goods_info {
            background-color: #ddd;
            margin: 0;
            padding: 2px;

            h1 {
                font-size: 16px;
            }

            .new {
                font-size: 15px;
                font-weight: bold;
                color: red;
            }

            .old {
                font-size: 13px;
                color: #999;
                margin-left: 5px;
                text-decoration: line-through;
            }

            .goods_num {
                font-size: 13px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>