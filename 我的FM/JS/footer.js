!function (){
    var $view = $('footer')

    var model = {
        init: function(){
           $.ajax({
                type: "GET",
                url: "http://api.jirengu.com/fm/getChannels.php",
                success:this.find
            })
        },

        find:function(json){
            json = JSON.parse(json).channels
            var html = ''
            var ul = contorller.$ul
            var li_width = ul.find('li').outerWidth(true)

            ul.css({width:`${li_width*json.length+100}px`})

            json.forEach((element) => {
                html+= `<li id = ${element.channel_id}>
                            <div style = background-image:url(${element.cover_small})></div>
                            <p>${element.name}</p>
                        </li>`
                })
            ul.html(html)

            window.onresize = function (){
                ul.css({width:`${ul.find('li').outerWidth(true)*json.length+100}px`,transition:'0s'})
            }
        }         
    }

    var contorller = {
        init : function ($view,model){
            this.$view = $view
            this.model = model
            this.$box = $view.find('.swiper_window')
            this.$ul = $view.find('.song_menu_list')
            this.$btn = $view.find('.scroll')
            this.model.init() 
            this.li_width = this.$ul.find('li').outerWidth(true)
            this.bindEvent_li()  
            this.bindEvent_btn()
        },

        bindEvent_li : function(){
            this.$ul.on('click','li',function(){
                    console.log(this)
            })
        },

        bindEvent_btn:function (){
            var move = 0
            var left_scroll = true
            var right_scroll = false
            var scroll = function (){ 
                this.$ul.css({transform:`translate(${move}px,-50%)`,transition:'0.5s'})
            }.bind(this)

            this.$btn.eq(1).on('click',function(){
                if (-move>=this.$ul.width()-this.$box.width()){
                    left_scroll = false
                }else if(left_scroll === true){
                    right_scroll = true
                    move+= (-(this.li_width*5))
                    scroll()
                }
            }.bind(this))

            this.$btn.eq(0).on('click',function(){
                if(-move<=0){
                    right_scroll = false
                }else  if( right_scroll === true){
                    move+= ((this.li_width*5))
                    scroll()
                }
            }.bind(this))
        }


    }

    contorller.init($view,model)
    
}.call()