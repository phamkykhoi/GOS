$(document).ready(function(){
    $('#navbarTop .dropdown-toggle').css('background', '#1799a3');
    $('#scrollTop').click(function(){
        $('html, body').animate({"scrollTop": 0}, 500, function(){
            $('#scrollTop').fadeOut();
        });
    });

    $('#scrollBottom').click(function(){
        var height = $('body').height();
        $('html, body').animate({"scrollTop": height}, 500, function(){
            $('#scrollBottom').fadeOut();
        });
    });

    $(window).scroll(function() {
        var height = $('body').height();
        var scrollTop = window.pageYOffset;

        if (scrollTop > 0) {
            $('#scrollTop').fadeIn(500);
        } else {
            $('#scrollTop').fadeOut(500);
        }

        if (scrollTop <= height) {
            $('#scrollBottom').fadeIn(500);
        } else {
            $('#scrollBottom').fadeOut(500);   
        }
    });
});