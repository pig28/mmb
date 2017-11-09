$(function(){

    //获取商品id
    var id = tools.getParam("productId");

    //渲染商品主题内容
    $.ajax({
        type : "get",
        url : tools.getIp() + "getmoneyctrlproduct",
        data : {
            productid : id
        },
        success : function(data){
            console.log(data);
            $(".body_content").html(template("tpl",data));
        }
    });

    $.ajax({
        type : "get",
        url : tools.getIp() + "getmoneyctrlproduct",
        data : {
            productid : id
        },
        success : function(data){
            console.log(data);
            $(".product_com").html(template("tpl2",data));
        }
    });

});