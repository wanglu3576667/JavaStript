<template>
    <div class="user">
        <div  v-if='post.length === 0' class="cricle">loading......</div>
        <div v-else>
            <section class="user_me">
                <div class="header">主页&nbsp;/</div>
                <div class="ul">
                    <div class="headPhoto"><img :src="post.avatar_url" alt="" width="40px"><span>{{post.loginname}}</span></div>
                    <div class="score">{{post.score}}&nbsp;积分</div>
                    <div class="time">注册时间{{post.create_at | filterTime}}</div>
                </div>
            </section>
            <section class="user_newtopic">
                <div class="header">最近创建的话题</div>
                <ul>
                    <li v-for="(value,index) in post.recent_topics" :key="value.id" v-if="index<5">
                        <div>
                            <router-link :to="{name:'user',params:{username:value.author.loginname}}"><img :src="value.author.avatar_url" alt="" width="30px"></router-link>
                            <router-link class="title" :to="{name:'content',params:{id:value.id}}">{{value.title}}</router-link>
                        </div>
                        
                        <span>{{value.last_reply_at | filterTime}}</span>
                    </li>
                </ul>
                <div class="footer">查看更多>></div>
            </section>
            <section class="user_abouttopic">
                <div class="header">最近参与的话题</div>
                <ul>
                    <li v-for="(value,index) in post.recent_replies" :key="value.id" v-if="index<5">
                        <div>
                            <router-link :to="{name:'user',params:{username:value.author.loginname}}"><img :src="value.author.avatar_url" alt="" width="30px"></router-link>
                            <router-link class="title" :to="{name:'content',params:{id:value.id}}">{{value.title}}</router-link>
                        </div>
                        
                        <span>{{value.last_reply_at | filterTime}}</span>
                    </li>
                </ul>
                <div class="footer">查看更多>></div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            post:[]
        }
    },
    beforeMount(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.username}`)
        .then((response)=>{this.post=response.data.data; console.log(this.post)}).catch((e)=>{console.log(e)})
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
    },
    watch:{
        '$route'(to,from){
             this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.username}`)
        .then((response)=>{this.post=response.data.data; console.log(this.post)}).catch((e)=>{console.log(e)})
        }
    }    
}
</script>
<style>
.user section{margin-bottom: 13px;}
.user section>.ul{padding: 10px;background-color: white;}
.user_me .header,.user_newtopic>.header,.user_abouttopic>.header{padding:10px;color: #80bd01;font-size:14px;background-color: #f6f6f6;border-radius: 3px;
border-bottom: 1px solid #e5e5e5;}
.user_me .headPhoto>span{vertical-align: top; color: #778087; font-size: 14px;margin-left: 12px;}
.user_me .score{font-size: 14px;margin: 10px 0px;}
.user_me .time{font-size: 14px; color: #ababab;margin: 10px 0;}
.user_newtopic ul>li,.user_abouttopic ul>li{display: flex;justify-content: space-between; font-size: 12px;color: #778087;border-bottom: 1px solid #e5e5e5;padding:10px;background-color: white;}
.user_newtopic ul>li .title,.user_abouttopic ul>li .title{color:#08c;font-size: 15px;margin-left: 10px;}
.user .footer{padding:10px;color:#778087;font-size:14px;background-color: #f6f6f6;border-radius: 3px;
border-bottom: 1px solid #e5e5e5;}
</style>

