$('.main-nav>li').mouseenter(function(){
    $(this).children('.sub-nav').slideDown(300);
});
$('.main-nav>li').mouseleave(function(){
    $(this).children('.sub-nav').slideUp(300);
});

// $('.main-nav>li').mouseenter(function(){
//     $('.sub-nav').slideDown(300);
// });
// $('.main-nav>li').mouseleave(function(){
//     $('.sub-nav').slideUp(300);
// });


setInterval( function(){
    $(".slides").delay("2500");
    $(".slides").animate({marginTop:"-300px"},"500");  //0.5초 동안 위쪽여백:-300px
    $(".slides").delay("2500");                           //2.5초 정지
    $(".slides").animate({marginTop:"-600px"},"500");  //0.5초 동안 위쪽여백:-600px
    $(".slides").delay("2500");                           //2.5초 정지
    $(".slides").animate({marginTop:"0"},"500");       //위쪽여백:0px 처음위치로
});