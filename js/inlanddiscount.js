$(function(){

   $.ajax({
       type : "get",
       url : tools.getIp() + "getinlanddiscount",
       dataType : "json",
       success : function(data){
           console.log(data);
           $(".land_content ul").html(template("tpl",data));
       }
   })

});