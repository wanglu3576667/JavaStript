<template>
    <div>
        <div v-if='post.length === 0' class="cricle">loading......</div>
        <div v-else>
            <div class="content_content">
                <div class="content_header">
                    <span :class="['content_tab',{active:post.good ||post.top}]">{{post|filterTab}}</span><span class="content_title">{{post.title}}</span>
                </div>
                <ul class="content_about clearfix">
                    <li>•&nbsp;发布于&nbsp;{{post.create_at|filterTime}}&nbsp;</li>
                    <li>•&nbsp;作者&nbsp;{{post.author.loginname}}&nbsp;</li>
                    <li>•&nbsp;{{post.visit_count}}&nbsp;次浏览&nbsp;</li>
                    <li>•&nbsp;来自&nbsp;{{post|filterTab}}&nbsp;</li>
                </ul>
                <section class="content_main" v-html="post.content"></section>
            </div>
            <div class="spacknumber">{{post.replies.length}}回复</div>
            <div class="massage">
                <ul>
                    <li v-for="(value,index) in post.replies" :key="value.id">
                        <router-link :to="{name:'user',params:{username:value.author.loginname}}"><img :src="value.author.avatar_url" alt="" width="30px"></router-link>
                        <span class="name">{{value.author.loginname}}</span>
                        <span class="index">{{index}}楼•{{value.create_at|filterTime}}</span>
                        <span class="writer" v-if="value.author.loginname === post.author.loginname">作者</span>
                        <span v-html="value.content"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            post:[],
           
        }
    },
    beforeMount(){
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)//父组件通过路由给子组件传递参数
        .then((response)=>{this.post=response.data.data}).catch((error)=>{console.log(error)})
        console.log(1)
    },
    filters:{
        filterTab(value){
            if(value.good === true){
                return '精华'
            }else if(value.top === true){
                return '置顶'
            }else if (value.tab === 'share'){
                return '分享'
            }else if(value.tab === 'ask'){
                return '问答'
            }else if(value.tab === 'job'){
                return '招聘'
            }
        },
        filterTime(value){
            let newtime = new Date()
            let oldtime = new Date(value)
            let leadtime = (newtime - oldtime)/1000
            if(leadtime<60){
                return '刚刚'
            }else if(leadtime<(60*60)){
                return parseInt(leadtime/60,10)+'分钟前'
            }else if(leadtime<(60*60*24)){
                return parseInt(leadtime/(60*60),10)+'小时前'
            }else if(leadtime<(60*60*24*30)){
                return parseInt(leadtime/(60*60*24),10)+'天前'
            }else if(leadtime<(60*60*24*30*12)){
                return parseInt(leadtime/(60*60*24*30),10)+'月前'
            }else if(leadtime>(60*60*24*30*12)){
                  return parseInt(leadtime/(60*60*24*30*12),10)+'年前'
            }
        },
     }
}
</script>
<style>
@import url('../../node_modules/github-markdown-css/github-markdown.css');
.content_content{background-color: white;overflow: auto;}
.content_header{font-size: 22px;font-weight: 700;margin-top: 18px;vertical-align: bottom;line-height: 130%;padding:0px 10px;}
.content_tab{background-color:#e5e5e5;border-radius:3px;padding: 1px 4px;font-size: 12px;color: #999;margin-right:5px;}
.content_tab.active{background-color: #80bd01;color:white;}
.content_about{font-size: 12px;color: #838383;padding: 10px 10px 12px 10px;border-bottom: #e5e5e5 1px solid;margin-bottom: 12px;}
.content_about>li{float: left;}
.content_main{padding:0px 20px;font-size: 14px;}
.spacknumber{padding: 10px;background-color: #f6f6f6;border-radius: 3px 3px 0 0 ; font-size: 14px;color: #444;}
.massage{background-color: white;font-size: 15px;}
.massage>ul>li{padding:10px;border-top: 1px #f0f0f0 solid;}
.massage .name{color: #666;font-size:12px;vertical-align: top;font-weight: 700;margin-left: 5px;}
.massage .index{color: #08c;font-size: 12px;vertical-align: top}
.massage .writer{color: #fff;background-color: #6ba44e;padding: 2px;font-size: 12px;vertical-align: top;}
</style>


