<template>
    <div class="newsinfo_container">
        <h3>新闻标题</h3>
        <p>
            <span>发布时间:2018-10-05 23:59:59</span>
            <span>点击次数:0次</span>
        </p>
        <hr>
        <div class="content">
            新闻内容!!!
        </div>
        <NewsComment :id="this.id"></NewsComment>
    </div>
</template>
<script type="text/javascript">
import NewsComment from './NewsComment/NewsComment.vue';
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsInfo: {}
        }
    },
    methods: {

    },
    components: {
        NewsComment
    }
}
</script>
<style lang="less" scoped>
.newsinfo_container {
    h3 {
        color: red;
        font-size: 15px;
        text-align: center;
        padding: 5px;
    }

    p {
        color: #226aff;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }

    .content {
        margin-bottom: 64px;
    }
}
</style>