!function (){
    var view = $('.plear_outer')

 /*_______________________________________________________________________________________*/

    var model = {
        init_song : function (id,fun){
                id = id || 'public_tuijian_chengmingqu'
                $.getJSON('//jirenguapi.applinzi.com/fm/getSong.php',{channel:id}).done(fun)
        },
        init_lyicr : function (id,fun){
            id = id || 'public_tuijian_chengmingqu'
            $.getJSON('//jirenguapi.applinzi.com/fm/getLyric.php',{sid:id}).done(fun)
         }
    }

    /*_______________________________________________________________________________________*/

    var contorller = {
        init : function (view,model){
            this.$view = view
            this.model = model
            this.get_song = null
            this.get_lyric = null
            this.timer = null
            this.hash = null
            this.$stop_playing = this.$view.find('.stop_playing')
            this.$song_cover = this.$view.find('.cover')
            this.$singer = this.$view.find('.singer')
            this.$next_song = this.$view.find('.next_song')
            this.$lyricr = this.$view.find('.lyric')
            this.$song_name = this.$view.find('.song_name')
            this.$progress=this.$view.find('.progress')
            this.$time = this.$view.find('.time')
            this.song = new Audio()
            this.play = false
            this.bindEvent_document()
            this.bindEvent_stop_playing()
            this.bindEvent_progress_star()
            this.bindEvent_progress_pause()
            
        },

        load_music : function (get_song){
            var _this = contorller ;
             _this.get_song = get_song
            _this.song.src =  _this.get_song.song[0].url
            _this.song.autoplay = true
            _this.song.play()
            _this.$song_cover.css({'background-image':`url(${_this.get_song.song[0].picture})`})
            _this.$singer.text(_this.get_song.song[0].artist)
            _this.$song_name.text(_this.get_song.song[0].title)
            _this.model.init_lyicr(_this.get_song.song[0].sid,_this.load_lyicr)
            
        },

        load_lyicr : function (getLyric){
            var _this=contorller
            _this.hash = {}
            _this.get_lyric = getLyric.lyric
            var arr = _this.get_lyric.split('\n')
            arr.forEach((value) => {
               _this.hash[value.match(/\d{2}:\d{2}/g)] = value.replace(/\[.+?\]/g,'')
                
            });
            _this.hash['00:00'] = '欢迎收听我的FM，我是作者印第安老斑鸠'
            

        },

        bindEvent_document : function (){
            var _this = this
            EventCenter.on('music',function (event){//监听自定义事件，拿到事件的自定义数据
                _this.channelID = event.detail
                _this.model.init_song.call( _this, _this.channelID, _this.load_music)
                _this.$stop_playing.html(`<svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-zantingtingzhi"></use>
                                            </svg>`
                                            )
            })
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
                this.model.init_song.call( this, this.channelID, this.load_music)
                this.$stop_playing.html(`<svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-zantingtingzhi"></use>
                                            </svg>`
                                            )
                console.log(this)
            })
        },
        bindEvent_progress_star : function (){
            $(this.song).on('playing',()=>{
                this.timer = setInterval(()=>{

                    var currentTime = parseInt(this.song.currentTime,10)
                    var duration = parseInt(this.song.duration,10)
                    this.$progress.css({width:`${(currentTime/duration)*100}%`})

                    var second = currentTime%60 + ''
                    var minute = parseInt(currentTime/60,10) + ''
                    if (second.length === 1){
                        second = '0'+second
                    }
                    this.$time.text(`${minute}:${second}`)

                    var geci = '0'+ this.$time.text()
                    if (this.hash[geci]){
                        this.$lyricr.text(this.hash[geci])
                        this.$lyricr.text_annimation('jello')
                    }
                    


                },300)
            })
        },
        bindEvent_progress_pause : function (){
            $(this.song).on('pause',()=>{
               clearInterval(this.timer) 
            })
        }
    


    }

   /*_______________________________________________________________________________________*/

    contorller.init(view,model)

}.call()
