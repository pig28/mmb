$(function () {

    //获取地址栏参数
    var id = tools.getParam("categoryId");
    var name = tools.getParam("category");
    var pageid = 1;
    var pagenum;


    // 发送ajax请求渲染页面头部
    $.ajax({
        type: "get",
        url : tools.getIp()+"getcategorybyid",
        data : {
            categoryid : id
        },
        success : function(data){
            // console.log(data);
            $(".product_list_nav").html(template("tpl",data));
        }
    });
    //发送ajax请求渲染页面内容
        function render(){
            // page = arguments[0]?arguments[0]:1;
            $.ajax({
                type : "get",
                url : tools.getIp()+"getproductlist",
                data : {
                    categoryid : id,
                    pageid : pageid
                },
                success : function(data){
                    pagenum = Math.ceil(data.totalCount / data.pagesize);
                    data.pagenum = pagenum;
                    data.pageid = pageid;
                    $(".page select").html(template("tpl3",data));
                    console.log(data);
                    $(".product_details ul").html(template("tpl2",data));
                }
            })
        }
    render();

    // 操作分页
    // 给下一页注册点击事件
    $(".after").on("click",function(){
        if(pageid==pagenum){
            pageid=pagenum;
        }else{
            pageid++;
            $(".num_page").val(pageid);
            render();
        }
    });
    $(".before").on("click",function(){
       if(pageid==1){
           pageid=1;
       }else{
           pageid--;
           $(".num_page").val(pageid);
           render();
       }
    });
    $(".num_page").on("change",function(){
        pageid = $(this).val();
        render();
    });

});



















