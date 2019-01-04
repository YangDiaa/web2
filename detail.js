window.onload=function(){
  var cover=document.getElementsByClassName("above")[0];
  window.onscroll=function(){
    var st=document.documentElement.scrollTop;
    if(st>300){
      cover.style.position="fixed";
    }
    else{
      cover.style.position="static";
    }
  }
}

//放大镜
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementById('box');

img1.onmouseover = function () {
  box.style.width='816px';
  slider.style.display = 'block';
  img2.style.display = 'block';
}
img1.onmouseout = function () {
  box.style.width='408px';
  slider.style.display = 'none';
  img2.style.display = 'none';
}

img1.onmousemove = function (ev) {
  var ev = ev || window.event;
  var st=document.documentElement.scrollTop || document.body.scrollTop;
  var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
  var oT = ev.clientY - box.offsetTop - slider.offsetHeight / 2+st;

  var oMaxw = img1.offsetWidth - slider.offsetWidth;
  var oMaxh = img1.offsetHeight - slider.offsetHeight;
  var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
  var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 

  oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
  oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

  slider.style.left = oL + 'px';
  slider.style.top = oT + 'px';

  var scale = img2.offsetWidth / slider.offsetWidth;
  Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
  Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
}

//图片切换
var img=document.getElementById("img");
var imgs=img.children;
var bigimg=document.getElementsByClassName("change")[0];
var big=document.getElementById("Bimg");
imgs[0].onclick=function(){
  imgs[1].setAttribute('class','small-3');
  imgs[2].setAttribute('class','small-2');
  bigimg.src="img/pp0.jpeg"
  big.src="img/pp0.jpeg";
}
imgs[1].onmouseover=function(){
  imgs[1].setAttribute('class','small-3');
  imgs[2].setAttribute('class','small-2');
  bigimg.src="img/pp0.jpeg";
  big.src="img/pp0.jpeg";
}

imgs[2].onmouseover=function(){
  imgs[1].setAttribute('class','small-2');
  imgs[2].setAttribute('class','small-3');
  bigimg.src="img/pp1.jpeg";
  big.src="img/pp1.jpeg";
}

imgs[3].onclick=function(){
  imgs[1].setAttribute('class','small-2');
  imgs[2].setAttribute('class','small-3');
  bigimg.src="img/pp1.jpeg";
  big.src="img/pp1.jpeg";
}

//化妆品含量选择及显示
var hanliang=document.getElementById("hanliang");
var a=hanliang.children;
var choice=document.getElementById("choice");
a[0].onclick=function(){
  a[0].setAttribute('class','detail-5-back2');
  a[1].setAttribute('class','detail-5-back1');
  choice.innerHTML='"150ml"';
}
a[1].onclick=function(){
  a[1].setAttribute('class','detail-5-back2');
  a[0].setAttribute('class','detail-5-back1');
  choice.innerHTML='"200ml"';
}

//选择数量
var amount=document.getElementById("amount");
var x=document.getElementById("num1");
var y=document.getElementById("num2");
y.onclick = function(){
  if(amount.value>0 && amount.value<5){
    amount.value = parseInt(amount.value)+1;
    y.style.cursor="pointer";
  }
  else{
    y.style.cursor="no-drop";
  }
}
x.onclick = function(){
  if(amount.value <6 && amount.value>1){
    amount.value = parseInt(amount.value)-1;
    x.style.cursor="pointer";
  }
  else{
    x.style.cursor="no-drop";
  }
}
y.onmouseover = function(){
  if(amount.value<6 && amount.value>0){
      y.style.cursor = "pointer";
    }
    else{
      y.style.cursor = "no-drop";
    }
}
x.onmouseover = function(){
  if(amount.value <6 && amount.value>0){
      x.style.cursor = "pointer";
    }
    else{
      x.style.cursor = "no-drop";
    }
}

//加入购物车
var add=document.getElementById('add');
var newpage=document.getElementById('newpage');
var chenghao=document.getElementById('chenghao');
var shop=document.getElementById('shop');
var bg=document.getElementById("background");

add.onclick=function(){
  newpage.style.display='block';
  bg.style.display='block';
}
chenghao.onclick=function(){
  newpage.style.display='none';
}
shop.onclick=function(){
  newpage.style.display='none';
}
