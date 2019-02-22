//获取DOM节点
var colorPen = document.querySelectorAll('.tool>.pen>.color>li');
var earserSize = document.querySelectorAll('.tool>.earser>.earserSize>li');
var download = getEle('download');
var clear = getEle('clear');
var line = document.querySelectorAll('.tool>.line>.lineSize>li');
var EARSER = getEle('earser');
var PEN = getEle('pen');
var CANVAS = getEle('canvas');
//获取or渲染画板上下文
var ctx = CANVAS.getContext('2d');

//画笔，橡皮控制开关
var usingPen = false,usingEarser = true;usingEarser3 = false;

//橡皮初始大小,线粗
var aaa={w:10,h:10};
ctx.lineWidth = 2;

//执行监听事件，开始画画
initCanvasSize();
listenToMouse(CANVAS);

//监听窗口事件,画板大小随之而变
window.onresize = function (){
    initCanvasSize();
}

//监听单击事件，切换橡皮和笔以及清屏与下载
EARSER.onclick = function (){
    usingEarser = false;
}
PEN.onclick = function (){
    usingEarser = true;
}
clear.onclick = function (){
    ctx.clearRect(0,0,CANVAS.width,CANVAS.height);
}
download.onclick = function (){
    var url = CANVAS.toDataURL('image/png');
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = '我的画';
    a.target = '_blank';
    a.click();
}

//切换画笔颜色
changecol(0,'black');
changecol(1,'red');
changecol(2,'yellow');
changecol(3,'blue');
//切换橡皮大小
changeEarserSize(0,10,10);
changeEarserSize(1,15,15);
changeEarserSize(2,20,20);
changeEarserSize(3,30,30);
//切换线粗细
changeline(0,2);
changeline(1,4);
changeline(2,6);
changeline(3,8);

/****************************************封装函数********************************************************/
//核心代码
function listenToMouse(CANVAS){

    //画线起始坐标对象
    var lastXzy = {x:undefined,y:undefined};

    //手机端监听事件
    if (document.body.ontouchstart === null){
        CANVAS.ontouchstart = function (even){
            if (usingEarser){
                usingPen = true;
                var x = even.touches[0].clientX;
                var y = even.touches[0].clientY;
                drawCircle(x,y);
                lastXzy.x = x;
                lastXzy.y = y;
            }else if(usingEarser==false){
                ctx.clearRect(x-5,y-5,aaa.w,aaa.h);
                usingEarser3=true;
            }
        }

        CANVAS.ontouchmove = function (even){
            var x1 = even.touches[0].clientX;
            var y1 = even.touches[0].clientY;
            if (usingPen==true){
                drawLine(lastXzy.x,lastXzy.y,x1,y1);
            }else if(usingEarser3==true){
                ctx.clearRect(x1-5,y1-5,aaa.w,aaa.h);
            }
            lastXzy.x = x1;
            lastXzy.y = y1;  
        } 
        CANVAS.ontouchend = function (even){
            usingPen = false;
            usingEarser3 = false;
        }

    }
    //pc端监听事件
    else{
            //监听鼠标事件按下
        CANVAS.onmousedown = function (even){
            if (usingEarser){
                usingPen = true;
                var x = even.clientX;
                var y = even.clientY;
                drawCircle(x,y);
                lastXzy.x = x;
                lastXzy.y = y;
            }else if(usingEarser==false){
                ctx.clearRect(x-5,y-5,aaa.w,aaa.h);
                usingEarser3=true;
            }
        }

        //监听鼠标事件行动
        CANVAS.onmousemove = function (even){
            var x1 = even.clientX;
            var y1 = even.clientY;
            if (usingPen==true){
                drawLine(lastXzy.x,lastXzy.y,x1,y1);
            }else if(usingEarser3==true){
                ctx.clearRect(x1-5,y1-5,aaa.w,aaa.h);
            }
            lastXzy.x = x1;
            lastXzy.y = y1;
        }

        //监听鼠标事件抬起
        CANVAS.onmouseup = function(){
            usingPen = false;
            usingEarser3 = false;
        }

    }
    
}
//获取dom
function getEle(name){
    return document.getElementById(name)
}

//封装画板大小函数
function initCanvasSize(){
    CANVAS.width = document.documentElement.clientWidth;
    CANVAS.height = document.documentElement.clientHeight;
}

//画圆
function drawCircle(x,y){
    ctx.beginPath();
    if (ctx.lineWidth>5){
    ctx.arc(x,y,ctx.lineWidth-4,0,Math.PI*2);
    ctx.fill();
    } 
}

//划线
function drawLine(x,y,x1,y1){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.stroke();
}

//封装:切换橡皮和笔以及线的种类
function changecol (index,col){
    colorPen[index].onclick = function (){
        ctx.fillStyle = col;
        ctx.strokeStyle = col;
    }
}
function changeEarserSize (index,whide,height){
    earserSize[index].onclick = function (){
        aaa={
            w:whide,
            h:height
        }
    }
}
function changeline (index,size){
    line[index].onclick = function (){
        ctx.lineWidth=size
    }
}