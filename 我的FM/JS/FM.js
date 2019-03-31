!function (){
    var view = $('.plear_outer')

    /*____________________________*/

    var model = {
        init : function (id,fun){
                $.getJSON('//jirenguapi.applinzi.com/fm/getSong.php',{channel:id}).done(fun)
            
            //$.getJSON('//jirenguapi.applinzi.com/fm/getSong.php',{channel:id}).done(fun)
        }
    }

    /*____________________________*/

    var contorller = {
        init : function (view,model){
            this.$view = view
            console.log(this.$view)
            this.model = model
            this.$stop_playing = this.$view.find('.stop_playing')
            this.$song_cover = this.$view.find('.cover')
            this.$singer = this.$view.find('.singer')
            this.$next_song = this.$view.find('.next_song')
           // this.$lyricr = this.$view.find('.lyric')
            this.$song_name = this.$view.find('.song_name')
            this.song = new Audio()
            this.play = false
            this.bindEvent_document()
            this.bindEvent_stop_playing()
            
        },

        bindEvent_document : function (){
            var _this = this
            EventCenter.on('music',function (event){//监听自定义事件，拿到事件的自定义数据
                _this.channelID = event.detail
                _this.model.init.call( _this, _this.channelID, _this.load_music)
                _this.$stop_playing.html(`<svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-zantingtingzhi"></use>
                                            </svg>`
                                            )
                console.log(_this.channelID)
            })
        },

        load_music : function (json){
            var _this = contorller ;
             _this.json = json
            console.log(json)
            _this.song.src =  _this.json.song[0].url
            _this.song.autoplay = true
            _this.song.play()
            _this.$song_cover.css({background:`url(${_this.json.song[0].picture})`})
            _this.$singer.text(_this.json.song[0].artist)
            _this.$song_name.text(_this.json.song[0].title)
            
        },

        bindEvent_stop_playing :function(){
            this.$stop_playing.on('click',()=>{
                if(this.play === false){
                    this.song.pause()
                    this.$stop_playing.html(`<svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-bofang"></use>
                                            </svg>`
                                            )
                    this.play = true
                }else{
                    this.song.play()
                    this.$stop_playing.html(`<svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-zantingtingzhi"></use>
                                            </svg>`
                                            )
                    this.play = false
                }
            })

            this.$next_song.on('click',()=>{
                this.model.init.call( this, this.channelID, this.load_music)
                this.$stop_playing.html(`<svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-zantingtingzhi"></use>
                                            </svg>`
                                            )
                console.log(this)
            })
        }


    }
    /*____________________________*/
    contorller.init(view,model)

}.call()
