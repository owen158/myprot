/**
 * Created by Administrator on 2017/5/5.
 */
function codeimg() {
    var src = jrg+'validateCode?timesp'+(new Date()).valueOf();
    $("#image").attr("src", src)
}