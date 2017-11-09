$(function(){

    //发送ajax请求，渲染category分类
    $.ajax({
        type : "get",
        url : tools.getIp()+"getcategorytitle",
        dataType : "json",
        success : function(data){
            // console.log(data);
            $(".rows ul").html(template("tpl",data));
            // console.log($('[data-id]'));
            var lis = $(".rows ul").find(".pro_cate");
            // console.log(lis);
            lis.on("click",function(){
                var index = $(this).data("id");
                lis.eq(index).find("ul").toggle().parent().siblings().find("ul").hide();
            });
            lis.each(function(){
                //渲染每一个li的儿子
                var id = $(this).data("id");
                $.ajax({
                    type : "get",
                    url : tools.getIp()+"getcategory",
                    data : {
                        titleid : id
                    },
                    success : function(data){
                        console.log(data);
                        lis.eq(id).find(".category_content").html(template("tpl2",data));
                    }

                })
            })
        }
    });

    


});




















