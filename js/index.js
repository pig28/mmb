$(function(){
//渲染导航，点击事件
    $.ajax({
        type : "get",
        dataType:"json",
        url : tools.getIp()+"getindexmenu",
        success : function(data){
            console.log(data);
            $(".mm_nav ul").html(template("tpl",data));

            $(".pro_nav:nth-child(9),.pro_nav:nth-child(10),.pro_nav:nth-child(11),.pro_nav:nth-child(12)").css("display","none");
        }
    });
    $(".mm_nav").on("click",$(".pro_nav:nth-child(8)"),function(){
        // console.log(11);
        $(".pro_nav:nth-child(9),.pro_nav:nth-child(10),.pro_nav:nth-child(11),.pro_nav:nth-child(12)").toggle();
    });

    //渲染商品列表
    $.ajax({
        type : "get",
        dataType : "json",
        url : tools.getIp()+"getmoneyctrl",
        success : function(data){
            // console.log(data);
            $(".product_list ul").html(template("tpl2",data));
        }
    });



});




















