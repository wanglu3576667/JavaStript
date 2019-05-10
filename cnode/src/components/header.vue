<template>
    <div class="outer">
        <div class="center clearfix">
            <div class="left">
              <a href=""><img src="../assets/cnodejs_light.svg" alt="" width="120px"></a> 
              <form class="search">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <input type="text">
              </form>
            </div>
            <ul class="navbar .clearfix">
                <li><a href="" title="回首页">首页</a></li>
                <li><a href="#"  title="没做接口">新手入门</a></li>
                <li><a href="https://cnodejs.org/api"  title="关于API的超链接">API</a></li>
                <li><a href="#"  title="没做接口">关于</a></li>
                <li><a href="#"  title="没做接口">注册</a></li>
                <li><a href="#"  title="没做接口">登录</a></li>   
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style>
    .outer{background-color: #444444;padding:5px 0px;}
    .center{width:90%;;margin:0px auto}
    .left{float: left;height:40px}
    .left>a{margin-right: 15px;position:relative;top:3px;}
    .left>.search{display: inline-flex;justify-content: center;align-items: center; background-color: #888888;border-radius: 30px;}
    .left>.search{padding:3px 5px 3px 5px;transition:0.4s;}
    .left>.search>input{width:206px;height: 20px; background-color: inherit;border:none;outline: none;margin-left:3px;}
    .left>.search:hover{background-color: white;box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6)}
    .left>.search:hover>svg{fill:gray;}
    .navbar{float:right;margin-top:12px;}
    .navbar>li{float:left;color: #CBCBCB;font-size: 13px;}
    .navbar>li>a{padding:10px 15px;}
</style>
