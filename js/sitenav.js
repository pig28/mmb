$(function(){

   $.ajax({
       type : "get",
       url : tools.getIp() +"getsitenav",
       success :function(data){
           console.log(data);
           $(".content").html(template("tpl",data))
       }
   })

});