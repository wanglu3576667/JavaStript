<template>
    <div class="postlist_component">
        <div v-if='post.length === 0' class="cricle">loading......</div>
        <ul class="user" v-else>
            <li class="list_navbar">
                <a v-for="value in select" :href="value.href" :key="value.str">{{value.str}}</a>
            </li>
            <li class="list" v-for="item in post" :key="item.id">
                <div>
                    <div>
                        <router-link :to="{name:'user',params:{username:item.author.loginname}}"><img :src="item.author.avatar_url" alt="" width="30px"></router-link>
                        <span class="reply">{{item.reply_count}}/<span>{{item.visit_count}}</span></span>
                        <span :class="['tab',{active:(item.good||item.top)}]">{{item|filterTab}}</span>
                       
                        <!--类似于a链接，记住下面的语法，name对应路由名称，params对应父组件传递的数据-->
                        <router-link :to="{name:'content',params:{id:item.id,username:item.author.loginname}}"><span class="title">{{item.title}}</span></router-link> 
                    </div>
                    <div class="time">
                        <a href="#">
                            <span><img :src="item.author.avatar_url" alt="" width="18px"></span>
                            <span>{{item.last_reply_at | filterTime}}</span>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            post:[],
            select:[
                {href:'#',str:'全部'},
                 {href:'#',str:'精华'},
                 {href:'#',str:'分享'},
                {href:'#',str:'问答'},
                 {href:'#',str:'招聘'},
                {href:'#',str:'客户端测试'},
            ]
        }
    },
    beforeMount(){
        this.$http.get('https://cnodejs.org/api/v1/topics',{limit:20,page:1})
        .then(response=>{this.post = response.data.data;console.log(this.post)}).catch(error=>{console.log(error)})
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
.postlist_component{background-color: white}
.user>.list_navbar{padding: 10px;background-color: #f6f6f6;}
.user>.list_navbar>a{padding: 3px 4px;margin: 0 10px;color:#80bd01;font-size: 14px;}
.user>.list{border-top: #f0f0f0 1px solid;background-color: white}
.user>.list>div{display: flex;justify-content: space-between;padding: 10px;}
.user>.list>div>div{display: flex;justify-content: center;align-items: center;}
.user>.list>div>.time>a{color: #778087;font-size: 12px;width:82px;display: flex;justify-content: space-between}
.title{font-size: 15px;color:#333;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 500px;display: inline-block}
.reply{font-size: 13px;color:#9e78c0;width: 70px;text-align: center;}
.reply>span{color:#b4b4b4;font-size:12px;}
.tab{background-color:#e5e5e5;border-radius:3px;padding: 2px 4px;font-size: 12px;color: #999;margin-right:5px;}
.tab.active{background-color: #80bd01;color:white;}
</style>
