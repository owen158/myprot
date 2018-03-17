/**
 * Created by Administrator on 2017/5/7.
 */
// var obj = {
//     val:0,
//     count: function(){
//         console.log(this._getFirst() + '' +this._getlast());
//         // return this._getFirst()+ '' +this._getlast();
//     },
//     _getFirst:function () {
//         return 1
//     },
//     _getlast:function () {
//         return 2
//     }
// };
var obj=function () {
   this.count=1
};
obj.prototype={
    User:function (t,b) {
        console.log(this._First(t) +this._Last(b));
    },
    _First:function (a) {
        return a;
        console.log(a)
    },
    _Last:function (b) {
        return b;
        console.log(b)
    }
};
var oj = new obj();
oj.User(1,2);
// var obj = {
//     val: 0,
//     count: function(){
//         this.val ++;
//         console.log(this.val);
//     }
// };
// obj.count()
// var a = new person();
