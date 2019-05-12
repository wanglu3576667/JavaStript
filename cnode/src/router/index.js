import Vue from 'vue'
import Router from 'vue-router'
import postlist from '../components/postlist.vue'
import content from '../components/content.vue'
import user from '../components/user.vue'
import sidebar from '../components/sidebar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'main',
     path:'/',
     components:{main:postlist,} //划重点，加了s代表多个组件，是一个对象！拥有组件名称，不加s为单个组件，是一个键值对！组件名为default
    },
    {
      name:'main1',
     path:'/:tab',
     components:{main:postlist,}
    },
    {
      name:'content',
      path:'/content/:id&:username',//划重点，：后面接变量  即可拿到routerlink传递的数据,且可以传递给组件，原地刷新页面，组件也能通过path拿到数据
      components:{main:content,sidebar}
    },
    {
      name:'user',
      path:'/user/:username',
      components:{main:user}
    }
  ]
})
