var lb = document.querySelector(".lb");
var lb_img = document.querySelector(".lb .lb_img");
var img = document.querySelectorAll(".lb .lb_img img")
var lis = document.querySelectorAll(".lb ul li");
var i=2;
    // 初始化手指坐标点
    var startPoint = 0;
    var startEle = 0;
    //手指按下
    lb.addEventListener("touchstart",function(e){
        startPoint = e.changedTouches[0].pageX;
        startEle = lb_img.offsetLeft;
        clearInterval(Time)
    });
    
    //手指滑动
    lb.addEventListener("touchmove",function(e){
        var currPoint = e.changedTouches[0].pageX;  
        var disX = currPoint - startPoint;
        var left = startEle + disX;
        lb_img.style.left = left + "px";       
    });
 
    //当手指抬起的时候，
    lb.addEventListener("touchend",function(e){
        var currPoint = e.changedTouches[0].pageX;
        var disX = - (currPoint - startPoint);
        var left = startEle + disX;
        if(disX > 150){
            i++;
            for(var q=0;q<lis.length;q++){
               lis[q].className = '';   
            }
            if(i == 10){
                i=2;
            }
            lis[i-2].className= "active" ;      
            lb_img.style.left = -100*(Math.round(disX/100)+i+1)+ 'vw';              
        }else{
            lb_img.style.left = -100*(i-1) + "vw";
        }
 
        if(disX < -150){
            i--;
            for(var q=0;q<lis.length;q++){
               lis[q].className = '';
            }
            if(i == 1){
                i=9;
            }
            lis[i-2].className= "active" ;          
            lb_img.style.left = -100*(Math.round(-disX/100)+i-2) + 'vw';
        
        }else{
            lb_img.style.left = -100*(i-1) + "vw";
        }
        Time=setInterval(autoplay,2000);
    })
//设置定时器
Time=setInterval(autoplay,2000);
    function autoplay(){
    i++;
    for(var q=0;q<lis.length;q++){
       lis[q].className = '';   
    }
    if(i == 10){
        i=2;
    }
    lis[i-2].className= "active" ;  
    for(var a=0; a<100;a++){
            setTimeout(function(){
                    var left = lb_img.style.left ? lb_img.style.left : "-100vw";
                    left = parseInt(left)-1;
                    if(left<-900){
                        left=-101;
                    }
                    lb_img.style.left = left + "vw";
            },a);
        }
    }