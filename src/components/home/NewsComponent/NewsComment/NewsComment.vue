<template>
    <div class="comment-container">
        <h3>新闻评论{{newsId}}</h3>
        <hr>
        <textarea rows="3" placeholder="请输入评论内容(最多不要超过150字)" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click.native="publish">发表评论</mt-button>
        <div v-for="(item,i) in commentList" :key="item.id">
            <p class="comment-title">第{{i+1}}楼&nbsp;用户:{{item.username}}&nbsp;发表时间:{{item.addTime}}</p>
            <p class="comment-body">{{item.body}}</p>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script type="text/javascript">
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            newsId: this.id,
            commentList: [{
                id: 1,
                username: '匿名用户',
                addTime: Date.now(),
                body: '明日复明日,明日何其多'
            }, {
                id: 2,
                username: '匿名用户',
                addTime: Date.now(),
                body: '明日复明日,明日何其多'
            }, {
                id: 3,
                username: '匿名用户',
                addTime: Date.now(),
                body: '明日复明日,明日何其多'
            }],
            msg: ''
        }
    },
    methods: {
        publish() {
            if (this.msg.trim().length === 0) {
                return Toast('评论内容不能为空!!');
            }
            var comment = {
                id: this.commentList.length + 1,
                username: '匿名用户',
                addTime: Date.now(),
                body: this.msg
            };
            this.commentList.unshift(comment);
            this.msg = '';
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