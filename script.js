$(function(){
    var position_top_raccourci = $('.submenu').offset().top;
    $(window).scroll(function() {
        if ($(this).scrollTop() > position_top_raccourci) {
            $('.submenu').addClass('-is-fixed');
        } else {
            $('.submenu').removeClass('-is-fixed');
        }
    });
});