var timu=document.querySelectorAll('.opne-2-1-2');
var bianse=document.querySelector('.opne-2-1-2-2');
var owenz=document.querySelectorAll('.open-2-wenzi');

for(var i=0;i<timu.length;i++){
    owenz[i].onmouseover=function(){
    this.style.color='#519f10';
}
   owenz[i].onmouseout=function(){
    this.style.color='#878787';
}
}
//show里面的
var loding=document.querySelector('.medio-ke-show-loding-writing');
var lodfather=document.querySelector(".medio-ke-show-loding");
var show=document.querySelectorAll('.medio-ke-show-2');
var showfather=document.querySelector('.medio-ke-show');
var medio=document.querySelector(".medio");
loding.onclick=function(){
    lodfather.style.display='none';
    showfather.style.height='1470px'
    show[0].style.display='block';
    show[1].style.display='block';
    show[2].style.display='block';
    show[3].style.display='block';
    medio.style.height='1600px'
}
var showtitle=document.querySelectorAll('.medio-ke-show-1-title');
for(var i=0;i<showtitle.length;i++){
    showtitle[i].onmouseover=function(){
        this.style.color='#90af6b';
    }
    showtitle[i].onmouseout=function(){
        this.style.color='#000000';
    }
}
//title里面的
var title1=document.querySelector('.medio-ke-title-2');
var title2=document.querySelector('.medio-ke-title-4');
var title3=document.querySelector('.medio-ke-title-6');
var show1=document.querySelectorAll('.medio-ke-show-1');
title1.onmouseover=function(){
    this.style.color='#90af6b';
}
title1.onmouseout=function(){
    this.style.color='#000000';
}
title2.onmouseover=function(){
    this.style.color='#90af6b';
}
title2.onmouseout=function(){
    this.style.color='#000000';
}

title3.onmouseover=function(){
    this.style.color='#90af6b';
}
title3.onmouseout=function(){
    this.style.color='#000000';
}
var show1=document.querySelectorAll('.medio-ke-show-1');
var mediodeke=document.querySelector('.medio-ke');
title1.onclick=function(){
    medio.style.height='250px'
    showfather.style.height='165px'
    mediodeke.style.height='165px'
    show1[0].style.display='none';
    show1[1].style.display='none';
    show1[2].style.display='block';
    show1[3].style.display='none';
    show1[4].style.display='none';
    show[0].style.display='none';
    show[1].style.display='none';
    show[2].style.display='none';
    show[3].style.display='none';
    lodfather.style.display='none';
}
title2.onclick=function(){
    medio.style.height='1050px'
    showfather.style.height='1000px'
    mediodeke.style.height='1000px'
    show1[0].style.display='block';
    show1[1].style.display='none';
    show1[2].style.display='none';
    show1[3].style.display='block';
    show1[4].style.display='none';
    show[0].style.display='block';
    show[1].style.display='block';
    show[2].style.display='block';
    show[3].style.display='block';
    lodfather.style.display='none';
}
title3.onclick=function(){
    medio.style.height='350px'
    showfather.style.height='340px'
    mediodeke.style.height='340px'
    show1[0].style.display='none';
    show1[1].style.display='block';
    show1[2].style.display='none';
    show1[3].style.display='none';
    show1[4].style.display='block';
    show[0].style.display='none';
    show[1].style.display='none';
    show[2].style.display='none';
    show[3].style.display='none';
    lodfather.style.display='none';
}



