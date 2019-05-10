<template>
  <div id="app">
    <my-header></my-header>
   <div class='main'>
     <div class="postlist">
       <!--划重点，routerviwe标签为路由组件出口，name属性为对应路由下的组件名称，省略不写代表default-->
       <!--不同路径所显示的组件，均在这个标签呈现-->
      <router-view class="left" name="main"></router-view>
      <router-view class="right" name="sidebar"></router-view>
     </div>
   </div>
  </div>
</template>

<script>
import myHeader from './components/header'
import postList from './components/postlist.vue'
export default {
  components:{myHeader,postList}
}
</script>

<style>
.main{width: 90%;margin: 15px auto;display: flex;}
.postlist{width:100%;display: flex;justify-content: space-between}
.postlist>.left{width: 100%;}
.postlist>.right{width: 290px;margin-left:10px;}
</style>
