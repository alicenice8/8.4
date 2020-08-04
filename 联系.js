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