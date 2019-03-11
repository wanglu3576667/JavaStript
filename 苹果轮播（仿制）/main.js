(function (){
    var $but = $('main>.menu>li')
    for (let index = 0;index<$but.length;index++){
        $but.eq(index).on('click',function(event){
            var n = $(event.currentTarget).index()-1 //从1开始
            
            $('main>.slideShow').eq(0).css({transform: 'translateX('+n*(-920)+'px)',transition:'0.6s'})
            console.log(event.currentTarget)
            $(event.currentTarget).addClass('active').siblings('.active').removeClass('active')
        })
    }
    console.log(1)
}())