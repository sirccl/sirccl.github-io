//大学时光倒计时
function getRTime() {
    var EndTime = new Date("2050/12/30 00:00:00");
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);

    document.getElementById("t_d").innerHTML = d + " ";
    document.getElementById("t_h").innerHTML = h + " ";
    document.getElementById("t_m").innerHTML = m + " ";
    document.getElementById("t_s").innerHTML = s + " ";
}
setInterval(getRTime, 1000);