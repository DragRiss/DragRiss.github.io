// 定义一个活动标识符
let active = false;

//滚动条点下时添加类名并改变active值
document.querySelector('.scroller').addEventListener('mousedown', function () {
    active = true;
    document.querySelector('.scroller').classList.add('scrolling');
});
//监听鼠标离开滚动条
document.body.addEventListener('mouseup', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});


document.body.addEventListener('mousemove', function (e) {
    if (!active) return;
// 改变滚动条小圆圈left位置
    let x = e.pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});

//改变滚动条白条位置和左边图片的width
function scrollIt(x) {
    let transform = Math.max(0, (Math.min(x, document.querySelector('.wrapper').offsetWidth)));
    document.querySelector('.after').style.width = transform + "px";
    document.querySelector('.scroller').style.left = transform - 25 + "px";
}
// 滚动条默认位置，这里设置它的left 在430px
scrollIt(430);


document.querySelector('.scroller').addEventListener('touchstart', function () {
    active = true;
    document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel', function () {
    active = false;
    document.querySelector('.scroller').classList.remove('scrolling');
});