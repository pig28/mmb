$(function(){

    //导航栏
    $.ajax({
        type :"get",
        url : tools.getIp() + "getgsshop",
        dataType : "json",
        success : function(data){
            console.log(data);
            $(".jingdong").html(template("tpl",data));
        }
    });

    $.ajax({
        type : "get",
        url : tools.getIp() + "getgsshoparea",
        success : function(data){
            console.log(data);
            $(".area").html(template("tpl2",data));
        }
    });
    
    $(".jd_li").on("click",function(){
        $(".sm_nav .jingdong").toggle();
    });
    $(".area_li").on("click",function(){
        $(".sm_nav .area").toggle();
    });
    $(".pri_li").on("click",function(){
        $(".sm_nav .pri").toggle();
    });

    var shopId = 0;
    var areaId = 0;
    $(".jingdong").on("click","li",function(){
        var html = $(this).text();
        $(".jd_li a").text(html);
        var shopId = $(this).data("id")
    });
    $(".area").on("click","li",function(){
        var html = $(this).text();
        $(".area_li a").text(html);
        var areaId = $(this).data("id");

        $.ajax({
            type : "get",
            url : tools.getIp() + "getgsproduct",
            data : {
                shopid : shopId,
                areaid : areaId
            },
            success : function(data){
                console.log(data);
                $(".gs_content ul").html(template("tpl3",data));
            }
        })
    });

    $.ajax({
        type : "get",
        url : tools.getIp() + "getgsproduct",
        data : {
            shopid : shopId,
            areaid : areaId
        },
        success : function(data){
            console.log(data);
            $(".gs_content ul").html(template("tpl3",data));
        }
    })




});