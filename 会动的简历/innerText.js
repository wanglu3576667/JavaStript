var primeval='';
var content = `/* 
* 感谢您打开这张页面
* 这是一份会动的简历
* 希望您能喜欢这份作品
* loding..........
*  ....
*  ..
*  我先来准备一些CSS样式
*/
body{
    font-size:15px;
    background:#ff9c00;
}
#code{
    padding-top:2%;
    padding-left:10px;
    width:600px;
    height:85%;
    margin-top:3%;
    margin-left:40px;
    background:#382f2fab;
    overflow:hidden;
}
    /*给代码点颜色看看*/    
.token.selector{
    color: #af0;
    font-weight:bold;
    }
.token.comment{
    color:#bdc1c4;
    font-size:16px;
    font-weight: bold;
}
.token.property{
        color: #a9005e;
        font-weight:bold;
    }

.token.function{
        color: #f16758
        font-weight:bold;
    }
#code{
    /*给盒子加点阴影*/
    border:#10021ea6 solid 1px;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.5),
        0 4px 15px 0 rgba(0, 0, 0, 0.5);   
    /*来点3d效果*/
    transform: rotateZ(355deg);    
    /*加点边框阴影动画*/
    animation :breathe 1s linear  infinite alternate;
}
/*接下来我要用CSS画一只皮卡丘*/
/*准备中...
*3...
*2..
*1.
*/
.body{
    height:50vh;
    width:100vh;
    margin-right:20px;
}
/*先加上打底色*/
.outer2{
    border-radius:50%;
    background:#FEE433;
}
/*鼻子鼻子快出来*/
.nose{position:absolute;
    left:50%;
    margin-left:-10px;
    margin-top:28px;
    border-radius:50%;
    border:12px solid black;
    border-color:black transparent transparent;
}
/*我需要一双眼睛*/
.eyes{
    width:50px;
    height:50px;
    background:#2E2E2E;
    border:#000000 2px solid;
    border-radius:50%;
    position:absolute;left:50%;
    margin-left:-25px;
}
.eyes.left{
    margin-left:-140px;
}
.eyes.right{
    margin-left:90px;
}
.eyes.left::after{
    content:"";
    display:inline-block;
    width:20px;height:20px
    ;background:white;
    border:2px black solid;
    border-radius:50%;
    margin-left:6px;margin-top:0px
}  
.eyes.right::after{
    content:"";
    display:inline-block;
    width:20px;
    height:20px;
    background:white;
    border:2px black solid;
    border-radius:50%;
    margin-left:6px;
    margin-top:0px
}
/*抹点腮红*/
.face{
    width:64px;
    height:64px;
    background:#FC0D1C;
    border:2px #000 solid;
    border-radius:50%;
    position:absolute;
}
.face.left{
    left:50%;
    top:85px;
    margin-left:-184px;
}
.face.right{
    left:50%;
    top:85px;
    margin-left:116px;
}
/*胡子给我出来*/
.mustache{
    width:78px;
    height:23px;
    position:absolute;
    background:#FEE433;
}
.mustache.left{
    left:50%;
    top:50px;
    margin-left:-78px;
    transform:rotate(-20deg);
    border-bottom:3px black solid;
    border-left:3px black solid;
    border-bottom-left-radius:60px 40px;
}
.mustache.right{
    left:50%;
    top:50px;
    transform:rotate(20deg);
    border-top:none;
    border-right:3px black solid;
    border-bottom:3px black solid;
    border-bottom-right-radius:60px 40px;
}
.mouthOuter{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    bottom:-5px;
    z-index:-1;
    height:111px;
    width:100px;
    overflow:hidden;
}
/*给我来张嘴*/
.mouth{
    width:100px;
    height:200px;
    background:#990513;
    border-radius:90%;
    position:absolute;
    bottom:0;border:black 2px solid;
    overflow:hidden;
}
/*来个舌头*/
.tongue{
    width:100px;
    height:100px;
    background:#FC4A62;
    position:absolute;
    bottom:-12px;
    border-radius:50%
}
/*画好了就当做背景图吧*/
.body{
    margin-top:0;
    margin-right:0;
    height:100vh;
    width:100%;
    background:#FEE433;
}
`
var content1 = `
/*接下来写一点个人简介*/
#code1{
    float:right;
    margin-top:3%;
    margin-right:40px;
    height:85%;
    width:600px;
    min-width:415px;
    padding-top:2%;
    padding-left:10px;
    /*我需要一张写字板*/
    background-color:#dde6e97a;
    /*给写字板加点阴影*/
    border:black solid 1px;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.5),
        0 4px 15px 0 rgba(0, 0, 0, 0.5);
    /*转一圈*/
    transform : rotateZ(365deg);
    /*给写字板加点呼吸*/
    animation :breathe 1s linear  infinite alternate;
    overflow:hidden;
}

`
var content2 = `
### 自我介绍
  我是王禄
  1990年11月出生
  来自河北唐山
  自学前端半年
  希望应聘前端开发岗位
 ### 技能介绍
 熟悉 JavaScript CSS HTML VUE jQuery
 ### 项目介绍
  苹果轮播
  静态简历
  canvas画板
  导航器
`
var content3 = `
/*接下来我要用一个非常厉害的库
*把文档转换为markdown格式
*loading.....
*...3
*..2
*.1
*转换完成*/
`