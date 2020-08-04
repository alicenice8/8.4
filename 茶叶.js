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
};

var tit=document.querySelectorAll('.title-a-a');
for(let i=0;i<tit.length;i++){
    tit[i].onmouseover=function(){
        this.style.color='#90af6b'
    }
    tit[i].onmouseout=function(){
        this.style.color='#878787'
    }
}
var show=document.querySelectorAll('.show-one');
var showtit=document.querySelectorAll('.show-one-title');
var showbot=document.querySelectorAll('.show-one-gang-bottom');
for(let i=0;i<show.length;i++){
    show[i].onmouseover=function(){
        showtit[i].style.color='#519f10';
    }
    show[i].onmouseout=function(){
        showtit[i].style.color='#878787';
        showbot[i].style.width='1px'
    }
   

    
}
$('.show-one:eq(1)').on('mouseout',function(){
    $('.show-one-gang-bottom:eq(0)').animate({
        width:1
    },1000)
})

$('.show-one:eq(0)').on('mouseover',function(){
    $('.show-one-gang-bottom:eq(0)').animate({
        width:261.25
    },1000)
})

