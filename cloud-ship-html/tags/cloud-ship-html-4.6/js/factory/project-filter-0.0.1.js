// 给数字增加分隔，每四位数一个分隔，常用于银行卡号
app.filter('splitNumberFilter', function() {
    return function(number) {
        return number ? number.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g,"$1 ") : number;
    }
})
    .filter("stageString",function(){
    return function(string){
        var a;
        if(string.length>=10){
            a = string.slice(0,10);
           a+='...'
        }
        else{
            a=string
        }
        return a
    }
})

    //公司类型
    .filter("industry",function () {
        return function (id) {
            if(id ==1){
                return "IT/互联网";
            }else if(id ==2){
                return "媒体";
            }else if(id ==3){
                return "金融";
            }
        }
    })

    //公司阶段
    .filter("stage",function () {
        return function (id) {
            if(id ===1){
                return "初创期";
            }else if(id ===2){
                return "成长期";
            }else if(id ===3){
                return "成熟期";
            }else if(id ===4){
                return "已上市";
            }
        }
    })

    //合作等级
    .filter("grade", function () {
        return function (id) {
            if (id ===0){
                return "无合作";
            }else if(id ===1){
                return "L1";
            }else if(id ===2){
                return "L2";
            }else if(id ===3){
                return "L3";
            }
        }
    });