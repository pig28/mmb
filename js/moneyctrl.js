$(function () {

    var pageid = 1;

    function render() {
        $.ajax({
            type: "get",
            url: tools.getIp() + "getmoneyctrl",
            data: {
                pageid: pageid
            },
            success: function (data) {
                console.log(data);
                $(".mc_content ul").html(template("tpl", data));
            }
        });
    }

    render();

    //分页
    $(".after").on("click", function () {
        if (pageid == 14) {
            pageid = 14;
        } else {
            pageid++;
            render();
        }
    });

    $(".before").on("click", function () {
        if (pageid == 1) {
            pageid = 1;
        } else {
            pageid--;
            render();
        }
    });

    $(".page_num").on("change", function () {
        pageid = $(this).val();
        render();
    })

});