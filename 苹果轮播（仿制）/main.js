(function (){
    var $but = $('main>.menu>li')
    var n = 0;
    $but.eq(1).addClass('active')
    for (let index = 1;index<$but.length;index++){
        $but.eq(index).on('click',function(event){
            n = $(event.currentTarget).index()//从1开始
            $('main>.slideShow').eq(0).css({transform: 'translateX('+(n*(-920)+920)+'px)',transition:'0.6s'})
            $(event.currentTarget).addClass('active').siblings('.active').removeClass('active')
        })
    }
    var timer = setInterval(function(){
        if (n === $but.length-1){
            n=0
        }

        $but.eq(++n).trigger('click')
       
        
    },3000)
    document.addEventListener('visibilitychange',function(){
        console.log(document.hidden)
        if (document.hidden === true){
            clearInterval(timer)
        }else{
            timer = setInterval(function(){
                if (n === $but.length-1){
                    n=0
                }
        
                $but.eq(++n).trigger('click')
            },3000)
        }
    })
}())