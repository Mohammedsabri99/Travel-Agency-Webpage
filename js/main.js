// Wow JS
// ===========================================================
$(function(){
    new WOW().init();
});

// Preloader
// ===========================================================
$(window).on('load', function(){
    $('#preloader').fadeOut("slow");
});

// Smooth Scroll
// ===========================================================
$(function(){
    var scroll = new SmoothScroll('a[href*="#"]');
});