$(function(){
    //title的渲染以及功能
    $.ajax({
        type : "get",
        url : tools.getIp() + "getbaicaijiatitle",
        dataType : "json",
        success : function(data){
            // console.log(data);
            $(".bcj_title ul").html(template("tpl",data));
            var liWidth = $(".bcj_title li").outerWidth(true);
            // console.log(liWidth);
            var ulWidth = 0;
            ulWidth = liWidth * $(".bcj_title li").length +100 + "px";
            // console.log($(".bcj_title li").length);
            // console.log(ulWidth);
            $(".bcj_title ul").css("width",ulWidth);

            $(".bcj_title ul").on("click","li",function(){
                $(this).find("a").addClass("now");
                $(this).siblings().find("a").removeClass("now");
                //获取id
                var id = $(this).data("id");
                console.log(id);
                $.ajax({
                    type : "get",
                    url : tools.getIp() + "getbaicaijiaproduct",
                    data : {
                        titleid : id
                    },
                    success : function(data){
                        console.log(data);
                        $(".bcj_content ul").html(template("tpl2",data));
                    }
                })
            });

        }
    });

    $.ajax({
        type : "get",
        url : tools.getIp() + "getbaicaijiaproduct",
        data : {
            titleid : 0
        },
        success : function(data){
            console.log(data);
            $(".bcj_content ul").html(template("tpl2",data));
        }
    })





});



















