$(function(){

    //发送ajax请求，渲染category分类
    $.ajax({
        type : "get",
        url : tools.getIp()+"getbrandtitle",
        dataType : "json",
        success : function(data){
            console.log(data);
            $(".rows ul").html(template("tpl",data));
        }
    });




});




















