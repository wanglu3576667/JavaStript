{
    let Buttons = document.querySelectorAll('main>.mask-layer>.contact li')
    let email = document.querySelector('.qq-email')
    let timer = null
    for (let index=0;index<Buttons.length;index++){
        Buttons[index].addEventListener('touchstart',(event)=>{
            event.currentTarget.classList.add('animated','jello')
        })
        Buttons[index].addEventListener('mouseenter',(event)=>{
            event.currentTarget.classList.add('animated','jello')
        })
        Buttons[index].addEventListener('mouseleave',(event)=>{
            event.currentTarget.classList.remove('animated','jello')
        })
        Buttons[index].addEventListener('touchend',(event)=>{
            event.currentTarget.classList.remove('animated','jello')
        })
    }
    Buttons[0].addEventListener('click',()=>{
       email.classList.add('active','animated','rubberBand')
        if (timer){
            clearTimeout(timer)
            console.log(1)
        }
        timer = setTimeout(()=>{
            email.classList.remove('active','animated','rubberBand')
        },8000)
    })
}