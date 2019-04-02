!function (){
    var $view = $('footer')

/*_______________________________________________________________________________________*/

    var model = {
        init: function(){
           $.ajax({
                type: "GET",
                url: "https://jirenguapi.applinzi.com/fm/getChannels.php",
                success:this.find_rander
            })
        }
    }

/*_______________________________________________________________________________________*/

    var contorller = {
        init : function ($view,model){
            this.$view = $view
            this.model = model
            this.json = null
            this.$box = $view.find('.swiper_window')
            this.$ul = $view.find('.song_menu_list')
            this.$btn = $view.find('.scroll')
            this.$label = $('.label')
            this.$bg = $('.bg') 
            this.model.init.call(this) 
            this.li_width = this.$ul.find('li').outerWidth(true)
            this.bindEvent_li()  
            this.bindEvent_btn()
        },

        bindEvent_li : function(){
            var _this = this
            this.$ul.on('click','li',function(){
                EventCenter.fire('music', this.id)//创建自定义事件，并给该事件对象添加属性
                _this.$bg.css({'background-image':`url(${$(this).attr('data')})`})
                _this.$label.text($(this).attr('name'))

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
                    left_scroll = true
                    move+= ((this.li_width*5))
                    scroll()
                }
            }.bind(this))
        },

        bindEvent_window : function(){
            window.onresize = function (){
                this.$ul.css({width:`${this.$ul.find('li').outerWidth(true)*this.json.length+100}px`,transition:'0s'})
            }.bind(this)
        },

        find_rander:function(json){
            var _this = contorller 
            _this.json = JSON.parse(json).channels
            var html = ''
            _this.json.forEach((element) => {
                html+= `<li id = ${element.channel_id} data = ${element.cover_big} name=${element.name} >
                            <div style = background-image:url(${element.cover_small})></div>
                            <p>${element.name}</p>
                        </li>`
                })
            _this.$ul.html(html)
            _this.$li = _this.$ul.find('li')
            _this.$ul.css({width:`${_this.li_width*_this.$li.length+100}px`})
            _this.bindEvent_window()
        }       


    }

    contorller.init($view,model)
    
}.call()