$(function(){

    //获取id
    var id = tools.getParam("couponId");

   $.ajax({
       type : "get",
       url : tools.getIp() + "getcouponproduct",
       data : {
           couponid : id
       },
       success : function(data){
           console.log(data);
           $(".content ul").html(template("tpl",data));
       }
   });

    //注册点击事件
    $(".content ul").on("click","li",function(){
        console.log(11);
        $(".zcc").slideDown();
    });

    $(".zcc").on("click",function(){
        $(this).hide();
    })
});