<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imgList" :key="item.id">
                <img :src="item.src" :class="{'isWidth':isWidth}"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {

        };
    },
    props: ['imgList', 'isWidth']
}
</script>
<style lang="less" scoped>
.isWidth {
    width: 100%;
}

.mint-swipe {
    height: 200px;

    .mint-swipe-item {
    	text-align:center;
        img {
            height: 100%;
        }
    }
}
</style>