!function (){

    init()

    timer(writePageCss)
    
    but1.addEventListener('click',function(){time=30})
    but2.addEventListener('click',function(){time=1;})
    
    

    function init(){
        window.time = 30;
        window.preTag = document.createElement('pre')
        window.styleTag = document.createElement('style')
        window.preTag1 = document.createElement('pre')
        document.head.appendChild(styleTag)
        main.appendChild(preTag)
        main.appendChild(preTag1)
        preTag.id = 'code'
        preTag1.id = 'code1'
    }

    function timer(callback){
        var n = 0
        setTimeout(function (){
        callback(n)
        },time)
    }

    function writePageCss(n){
            n++
            preTag.innerHTML = Prism.highlight(primeval+content.slice(0,n), Prism.languages.css, 'css');
            styleTag.innerHTML = primeval +content.slice(0,n)
            preTag.scrollTop = preTag.scrollHeight
            if (n === content.length){
                primeval = content
                timer(writePageSheet)
            }else{
                setTimeout(()=>{writePageCss(n)},time)
                console.log(n)
            }
        
    }

    function writePageSheet(n){
             n++
            preTag.innerHTML = Prism.highlight(primeval+content1.slice(0,n), Prism.languages.css, 'css');
            styleTag.innerHTML =  primeval+content1.slice(0,n)
            preTag.scrollTop = preTag.scrollHeight
            if (n === content1.length){
                primeval+= content1
                timer(writePageLetter)
            }else{
                setTimeout(writePageSheet,time)
            }
           
    }

    function writePageLetter(n){
        n++
        code1.innerHTML = content2.slice(0,n)
         if (n === content2.length){
            timer(writePageMarkDown)
         }else{
             setTimeout(writePageLetter,time)
         }
    }    
    
    function writePageMarkDown(n){
        n++
        preTag.innerHTML = Prism.highlight(primeval+content3.slice(0,n), Prism.languages.css, 'css');
        preTag.scrollTop = preTag.scrollHeight
        if (n === content3.length){
            primeval+= content3
            preTag1.innerHTML = marked(content2)
            preTag1.scrollTop = preTag1.scrollHeight
            var a = preTag1.innerHTML
            preTag1.innerHTML = a.replace('苹果轮播','<a href="https://wanglu3576667.github.io/My-Project/%E8%8B%B9%E6%9E%9C%E8%BD%AE%E6%92%AD%EF%BC%88%E4%BB%BF%E5%88%B6%EF%BC%89/apple.html" target="_blank">苹果轮播</a>')
            .replace('静态简历','<a href="https://wanglu3576667.github.io/my-cv/resume.html" target="_blank">静态简历</a>')
            .replace('canvas画板','<a href="https://wanglu3576667.github.io/My-Project/drawingBoard/drawingBoard.html" target="_blank">canvas画板</a>')
             .replace('导航器','<a href="https://wanglu3576667.github.io/My-Project/navPage/navpage.html" target="_blank">导航器</a>')
        }else{
            setTimeout(writePageMarkDown,time)
        }
    
    }
    
}.call()
