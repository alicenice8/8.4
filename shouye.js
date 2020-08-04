// document.addEventListener('load',function(){
    var huantu1=document.querySelector('.open-4-1');
    var huantu2=document.querySelector('.open-4-2');
    var open=document.querySelector('.open');
    huantu1.addEventListener('click',function(){
        open.style.background="url('img/首页-开始背景1.webp')";
        huantu1.style.background='#ffffff'
        huantu2.style.background='#878787';
    });
    huantu2.addEventListener('click',function(){
        open.style.background="url('img/首页-开始背景2.webp')";
        huantu2.style.background='#ffffff';
        huantu1.style.background='#878787';
    })
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

    // huantu1.onclick=function(){
    //     // open.style.background="url('img/首页-开始背景2.webp')";
    //     // huantu1.style.background='yellow';
    //     console.log('1')
    // }
// })
//商品栏开始
    var zs=document.querySelector('.zs-k-1');
    var zswz=document.querySelector('.zs-1-1');
        zs.onmouseover=function(){
            zswz.style.color='#519f10';
            zs.style.padding='14px';
            zs.style.border='1px solid blue'    
        };
        zs.onmouseout=function(){
            zswz.style.color='#555555';
            zs.style.padding='15px';
            zs.style.border='';
        }
    var zs2=document.querySelector('.zs-k-2');
    var zsw2=document.querySelector('.zs-1-2');
        zs2.onmouseover=function(){
            zsw2.style.color='#519f10';
            zs2.style.padding='14px';
            zs2.style.border='1px solid blue'    
        };
        zs2.onmouseout=function(){
            zsw2.style.color='#555555';
            zs2.style.padding='15px';
            zs2.style.border='';
        }
    var zs3=document.querySelector('.zs-k-3');
    var zswz3=document.querySelector('.zs-1-3');
        zs3.onmouseover=function(){
            zswz3.style.color='#519f10';
            zs3.style.padding='14px';
            zs3.style.border='1px solid blue'    
        };
        zs3.onmouseout=function(){
            zswz3.style.color='#555555';
            zs3.style.padding='15px';
            zs3.style.border='';
        }
    var zs4=document.querySelector('.zs-k-4');
    var zswz4=document.querySelector('.zs-1-4');
        zs4.onmouseover=function(){
            zswz4.style.color='#519f10';
            zs4.style.padding='14px';
            zs4.style.border='1px solid blue'    
        };
        zs4.onmouseout=function(){
            zswz4.style.color='#555555';
            zs4.style.padding='15px';
            zs4.style.border='';
        }
    var zs5=document.querySelector('.zs-k-5');
    var zswz5=document.querySelector('.zs-1-5');
        zs5.onmouseover=function(){
            zswz5.style.color='#519f10';
            zs5.style.padding='14px';
            zs5.style.border='1px solid blue'    
        };
        zs5.onmouseout=function(){
            zswz5.style.color='#555555';
            zs5.style.padding='15px';
            zs5.style.border='';
        }
    var zs6=document.querySelector('.zs-k-6');
    var zswz6=document.querySelector('.zs-1-6');
        zs6.onmouseover=function(){
            zswz6.style.color='#519f10';
            zs6.style.padding='14px';
            zs6.style.border='1px solid blue'    
        };
        zs6.onmouseout=function(){
            zswz6.style.color='#555555';
            zs6.style.padding='15px';
            zs6.style.border='';
        }
