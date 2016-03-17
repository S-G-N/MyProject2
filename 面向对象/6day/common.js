/**
 * Created by Administrator on 2016/3/9.
 */
(function (w){//…≥œ‰
    var getById= function (idName) {
        return document.getElementById(idName)
    }
    var getByTagName= function (tagName) {
        return document.getElementsByTagName(tagName)
    }
    var getByClassName= function (className) {
        if(document.getElementsByTagName){
            return document.getElementsByTagName(className)
        }else{}
    }
    var o={
        id:getById,
        tag:getByTagName,
        class:getByClassName
    };

    w.o= w.__o__=o;
})(window)