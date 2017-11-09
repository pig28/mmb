//tools中放一些常用的方法
    var tools = {
        //获取地址栏中的所有参数
       getParamObj : function(){
           var obj = {};
           var search = location.search;
           search = search.slice(1);
           var arr = search.split("&");
           for(var i = 0 ; i < arr.length ; i++){
               var key = arr[i].split("=")[0];
               var value = decodeURI(arr[i].split("=")[1]);
               obj[key] = value;
           }
           return obj;
       },
        getParam : function(key){
            return this.getParamObj()[key];
        },
        getIp : function(){
            return url = "http://192.168.32.29:9090/api/";
        }
    };