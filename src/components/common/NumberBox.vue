<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="sendCount" ref="count" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script type="text/javascript">
import mui from '../../lib/mui/dist/js/mui.min.js';
export default {
    data() {
        return {};
    },
    mounted() {
        mui('.mui-numbox').numbox();
    },
    methods: {
        sendCount() {
            // console.log(this.$refs.count.value);
            this.$emit('getCount', parseInt(this.$refs.count.value));
        }
    },
    watch: {
        'max': function(newValue, oldValue) {
            console.log(newValue);
        }
    },
    props: ['max']
}
</script>
<style lang="less" scoped>
</style>