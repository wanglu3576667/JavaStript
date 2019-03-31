var EventCenter ={
    on:function (type,handler){
        document.addEventListener(type,handler)
    },
    fire : function (type,data){
        return document.dispatchEvent(new CustomEvent(type, {
            detail: data
          }))
    }
}

