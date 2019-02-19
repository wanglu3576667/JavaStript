//初始化变量
var keys=init().keys,host=init().host;

//写入html生成键盘，以及遍历所有按键添加监听事件；
makeKbd(keys,host);

//添加监听事件
listenToUser(host);


/*************自用封装函数*****************/
function init(){
    var keys = [
        [1,2,3,4,5,6,7,8,9,0],
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
      ];
    var host = {q:'www.qq.com',b:'www.baidu.com',j:'www.jianshu.com',z:'www.zhihu.com'};
    var hostInLocalStorage = JSON.parse(localStorage.getItem('newHost'));
    if (hostInLocalStorage){
        host=hostInLocalStorage;
    }
    return {
        keys:keys,
        host:host
    }
}
//................................................................
function create(ele){
    var bianliang=document.createElement(ele);
    return bianliang;
}
//...................................................................
function listenToUser(host){
    window.onkeypress=function (even){
    if (host[even.key]){
        window.open('http://'+host[even.key],'_blank');
    }else{
        alert('这个按键位置还没存下网址哦！')
        }
    }
}
//....................................................................
function makeKbd(keys,host){
    for (var index=0;index<keys.length;index++){
        var DIV = create('div')
        KEYS.appendChild(DIV);
    
        var keyName=keys[index];
        for (var index2=0;index2<keyName.length;index2++){
    
            var KBD = create('kbd');
            var BUTTON = create('button');
            var IMG = create('img');
            
            KBD.textContent=keyName[index2];
            BUTTON.textContent='编辑';
            BUTTON.id=keyName[index2];
            IMG.id=keyName[index2];
    
            if (host[keyName[index2]]){ 
                IMG.src='http://'+host[keyName[index2]] + '/favicon.ico';
            }
    
            KBD.appendChild(IMG);
            DIV.appendChild(KBD);
            KBD.appendChild(BUTTON);
           
            BUTTON.onclick=function (even){
                var b=prompt('写下你想存入的网址吧！')
                var index3=even.target.id;
                var IMG1=this.previousSibling;
                host[index3]=b;console.log(IMG1);
                IMG1.src='http://'+ b+ '/favicon.ico';
                localStorage.setItem('newHost',JSON.stringify(host));
                IMG1.onerror=function(){
                    alert('抱歉，我已经很努力了，但还是找不到这个网站的小logo！')
                    IMG1.className='onerror';
                }
            }
        }
    } 
}