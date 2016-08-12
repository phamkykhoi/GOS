$(document).ready(function(){
    $('#navbarTop .dropdown-toggle').hover(function() {
        $(this).css('background', '#20aeb9');
    }, function() {
        $(this).css('background', '#1799a3');
    });

    $('#navbarTop .dropdown-menu a').hover(function() {
        $('#navbarTop .dropdown-toggle').css('background', '#20aeb9');
    }, function() {
        $('#navbarTop .dropdown-toggle').css('background', '#1799a3');
    });

    $('#navbarTop .navbar-toggle').click(function() {
        $(this).css('background', '#1799a3');
    });

    /* scroll events */
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
    /* end scroll events */
});