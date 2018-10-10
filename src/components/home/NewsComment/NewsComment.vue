<template>
    <div class="comment-container">
        <h3>新闻评论{{id}}</h3>
        <hr>
        <textarea rows="3" placeholder="请输入评论内容(最多不要超过150字)"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div>
            <p class="comment-title">第一楼&nbsp;用户:匿名用户&nbsp;发表时间:2018-10-01</p>
            <p class="comment-body">明日复明日,明日何其多</p>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            id: this.id
        }
    },
    props: ["id"]
}
</script>
<style lang="less" scoped>
.comment-container {
    h3 {
        font-size: 20px;
    }

    textarea {
        font-size: 15px;
        margin: 0;
        height: 85px;
    }

    .comment-body {
        padding-left: 15px;
    }
}
</style>