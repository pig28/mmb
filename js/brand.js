$(function () {

    //获取id
    var id = tools.getParam("brandTitleId");

    $.ajax({
        type: "get",
        url: tools.getIp() + "getbrand",
        data: {
            brandtitleid: id
        },
        success: function (data) {
            console.log(data);
            $(".row ul").html(template("tpl", data));
        }
    });

    $.ajax({
        type: "get",
        url: tools.getIp() + "getbrandproductlist",
        data :{
            brandtitleid :id,
        },
        success : function(data){
            console.log(data);
            $(".product_list ul").html(template("tpl2",data));
        }
    })

});