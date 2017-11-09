$(function(){

    //获取地址栏参数
    var id = tools.getParam("productid");
    var name = tools.getParam("brandName");
    var categoryId = tools.getParam("categoryId");



    $.ajax({
        type : "get",
        url : tools.getIp() + "getproduct",
        dataType : "json",
        data : {
            productid : id
        },
        success : function(data){
            console.log(data);
            $(".product_bijia").html(template("tpl",data));
        }
    });

    //发送ajax请求，获取评论
    $.ajax({
        type : "get",
        url : tools.getIp() + "getproductcom",
        data : {
            productid : id
        },
        success : function(data){
            console.log(data);
            $(".product_com_list ul").html(template("tpl2",data));
        }
    });

    $.ajax({
        type : "get",
        url : tools.getIp() + "getcategorybyid",
        data : {
            categoryid :categoryId
        },
        success : function(data){
            console.log(data);
            $(".product_content_nav").html(template("tpl3",data));
        }
    });

    $.ajax({
        type : "get",
        url : tools.getIp()+"getproductlist",
        data : {
            categoryid : categoryId,
            pageid : 1
        },
        success : function(data){
            console.log(data);
            $(".product_content_nav a:last-child").html(template("tpl4",data));
        }
    })
});

























