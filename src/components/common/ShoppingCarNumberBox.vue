<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="number" @change="updateNumber" ref="count" readonly />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script type="text/javascript">
import mui from '../../lib/mui/dist/js/mui.js';
export default {
    data() {
        return {};
    },
    mounted() {
        mui('.mui-numbox').numbox();
    },
    methods: {
        updateNumber() {
            // 数值发生的变化!
            // console.log(this.$refs.count.value);
            // this.$emit('getCount', parseInt(this.$refs.count.value));
            var goodsInfo = {
                id: this.id,
                number: parseInt(this.$refs.count.value)
            }
            this.$store.commit('updateCar', goodsInfo);
        }
    },
    watch: {
        'max': function(newValue, oldValue) {
            console.log(newValue);
        }
    },
    props: ['number', 'id']
}
</script>
<style lang="less" scoped>
</style>