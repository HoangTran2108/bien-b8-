function c() {
    let p=document.getElementById("s1").value;
    let h=document.getElementById("s2").value;
    let r=(+h)+(+p)
    document.getElementById("kq").innerHTML=r
}
function r() {
    let p=document.getElementById("s1").value;
    let h=document.getElementById("s2").value;
    let q=(+p)-(+h)
    document.getElementById("kq").innerHTML=q
}
function n() {
    let p = document.getElementById("s1").value;
    let h = document.getElementById("s2").value;
    let a = (+p) * (+h)
    document.getElementById("kq").innerHTML = a
}
function t() {
    let p = document.getElementById("s1").value;
    let h = document.getElementById("s2").value;
    let b = (+p) / (+h)
    document.getElementById("kq").innerHTML = b
}n