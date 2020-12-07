
var yc = document.querySelector(".yc");
var one = document.querySelector(".shopcart")
// console.log(yc);
function over() {
    yc.style.display= "block"
}
one.addEventListener("mouseover", over)
one.addEventListener("mouseout", out)

function out() {
    yc.style.display= "none"
}

