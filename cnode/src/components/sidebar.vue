
<template>
    <div class="sidebar">
         <p class="writer">作者</p>
        <div class="message">
            <img :src="post1.avatar_url" alt="" width="40px"><span class="name">{{post1.loginname}}</span>
            <p class="scroe">积分：{{post1.score}}</p>
        </div>
            <div class="header">最近创建的话题</div>
                <ul>
                    <li v-for="(value,index) in post1.recent_topics" :key="value.id" v-if="index<5">
                            <router-link class="title" :to="{name:'content',params:{id:value.id,username:post1.loginname}}">{{value.title}}</router-link>
                    </li>
                </ul>
    </div>    
</template>

<script>
export default {
  data(){
        return {
            post:[],
            post1:[]
        }
    },
    beforeMount(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.username}`)
            .then((response)=>{this.post1=response.data.data; console.log(this.post,2)}).catch((e)=>{console.log(e)})
       
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)//父组件通过路由给子组件传递参数
            .then((response)=>{this.post=response.data.data},console.log(this.post,1)).catch((error)=>{console.log(error)})
     
    },
    watch:{
        '$route'(to,from){
            window.location.reload() 
        }
    }
}
</script>

<style>
    .sidebar{background-color: white;}
    .sidebar .writer{color: #51585c;border-radius: 3px 3px 0 0;background-color: #f6f6f6;font-size:14px;padding:10px;}
    .sidebar>.message{padding: 10px;}
    .sidebar .name{vertical-align: top;margin-left: 10px;color: #778087;}
    .sidebar .scroe{font-size:13px; color: #333; margin:10px 0px;}
    .sidebar .header{padding:10px;color: #80bd01;font-size:14px;background-color: #f6f6f6;border-radius: 3px;
border-bottom: 1px solid #e5e5e5;width: 100%;margin-bottom: 10px;}
    .sidebar ul>li{padding: 2px 10px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .sidebar ul>li>.title{color: teal}
</style>
