$.fn.text_annimation = function (type){
    var character = this.text()
    var string = character.split('').map((word) => {
        return `<span  style="display:inline-block">${word}</span>`
    }).join('');
    this.html(string)

    var index = 0
    var $span = this.find('span')
    var timer = setInterval(()=>{
        $span.eq(index++).addClass(`animated ${type} delay-0s duration-0.1s`)
        if(index === $span.length){
            clearInterval(timer)
        }
    },150)
}