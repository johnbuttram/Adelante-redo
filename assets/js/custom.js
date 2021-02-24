$('nav').on("click",function(){
    $(window).scrollTop(0);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});  