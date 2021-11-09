$(document).ready(function(){
    $(".nav>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav>li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    });
    var len = 3;
    var i = 0;
    var slidepos;
    
    setInterval(function(){
        if(i < len-1){
            i = i+1;
        }else{
            i = 0;
        }
        $(".slide>img").fadeOut();
        $(".slide>img").eq(i).fadeIn();
    },2000);
});