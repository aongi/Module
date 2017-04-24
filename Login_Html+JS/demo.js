/**
 * Created by aongi on 2017/4/23.
 */
function us() {
    var obj = document.getElementById("username");
    var username = obj.value;
    if (username.length == 0 ) {
        var userLogOne = "账户名不能为空！";
        document.getElementById("userLog").innerHTML = userLogOne;
        pw();
        return false;
    } else {
        var reg = /^[a-zA-Z]+$/;
        if (!reg.test(username)) {
            var userLog = "对不起，您输入的英文字母类型格式不正确!";
            document.getElementById("userLog").innerHTML = userLog;
            pw();
            return false;
        }
    }
}
function pw() {
    var obj1 = document.getElementById("password");
    var password = obj1.value;
    if (password.length == 0) {
        var passwordLog = "密码不能为空！";
        document.getElementById("passwordLog").innerHTML = passwordLog;
    }else {
        passwordLog = "";
        document.getElementById("passwordLog").innerHTML = passwordLog;
    }
}