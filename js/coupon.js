$(function(){

    $.ajax({
        type : "get",
        url : tools.getIp() + "getcoupon",
        success: function (data) {
            console.log(data);
            $(".cp_content ul").html(template("tpl",data));
        }
    })

});
