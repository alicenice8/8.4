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
$(function(){
	$("#count").numberRock({
		lastNumber:138,		//终止数字
		duration:800,
		easing:'swing',  	//慢快慢
	});
});
$(function(){
	$("#count2").numberRock({
		lastNumber:423,		//终止数字
		duration:800,
		easing:'swing',  	//慢快慢
	});
});
$(function(){
	$("#count3").numberRock({
		lastNumber:89,		//终止数字
		duration:800,
		easing:'swing',  	//慢快慢
	});
});
$(function(){
	$("#count4").numberRock({
		lastNumber:567,		//终止数字
		duration:800,
		easing:'swing',  	//慢快慢
	});
});

(function($){
    $.fn.numberRock=function(options){
        var defaults={
            lastNumber:100,
            duration:2000,
            easing:'swing'  //swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)
        };
        var opts=$.extend({}, defaults, options);

        $(this).animate({
            num : "numberRock",
        },{
            duration : opts.duration,
            easing : opts.easing,
            complete : function(){
                console.log("success");
            },
            step : function(a,b){  //可以检测我们定时器的每一次变化
                $(this).html(parseInt(b.pos * opts.lastNumber));
            }
        });

    }

})(jQuery);
var li=document.querySelectorAll('.show-f');
var show=document.querySelectorAll('.show-span');

li[0].onmouseover=function(){
    this.style.margin='0 10px 0 10px'
    show[0].style.display='block';
}
li[0].onmouseout=function(){
    this.style.margin='10px 10px 0 10px'
    show[0].style.display='none';
}
li[1].onmouseover=function(){
    this.style.margin='0 10px 0 10px'
    show[1].style.display='block';
}
li[1].onmouseout=function(){
    this.style.margin='10px 10px 0 10px'
    show[1].style.display='none';
}
li[2].onmouseover=function(){
    this.style.margin='0 10px 0 10px'
    show[2].style.display='block';
}
li[2].onmouseout=function(){
    this.style.margin='10px 10px 0 10px'
    show[2].style.display='none';
}