var keys = [
    [1,2,3,4,5,6,7,8,9,0],
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
  ];
var host = {q:'www.qq.com',y:'www.wangyi.com',b:'www.baidu.com',j:'www.jianshu.com',z:'www.zhihu.com'};
var hostInLocalStorage = JSON.parse(localStorage.getItem('newHost'));
if (hostInLocalStorage){
    host=hostInLocalStorage;
}

for (var index=0;index<keys.length;index++){
    var DIV = document.createElement('div');
    KEYS.appendChild(DIV);
    var a=keys[index];
    for (var index2=0;index2<a.length;index2++){
        var KBD = document.createElement('kbd');
        var BUTTON = document.createElement('button');
        KBD.textContent=a[index2];
        BUTTON.textContent='编辑';
        DIV.appendChild(KBD);
        KBD.appendChild(BUTTON);
        BUTTON.id=a[index2];
        BUTTON.onclick=function (even){
            var b=prompt('写下你想存入的网址吧！')
            var index3=even.target.id;
            host[index3]=b;
            localStorage.setItem('newHost',JSON.stringify(host));
        }
    }
}
window.onkeypress=function (even){
    if (host[even.key]){
        window.open('http://'+host[even.key],'_blank');
    }else{
        alert('这个按键位置还没存下网址哦！')
    }
}
