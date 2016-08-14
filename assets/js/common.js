// make menu mobile when display on mobile
function makeMenuMobile() {
    var menuSystem = $('header nav.menu[references="menu-system"]').html();
    $('#menuMobile > nav[references="menu-system"]').html(menuSystem);
    var menuTasks = $('#tasks nav.menu[references="menu-tasks"]').html();
    $('#menuMobile > nav[references="menu-tasks"]').html(menuTasks);

    $('#menuMobileToggle').click(function() {
        if ($(window).width() < 768) {
            $('#menuMobile').css('height', $(window).height());
            if ($(this).attr('data-display') == 0) {
                $('#menuMobile').animate({left: 0}, 350);
                $(this).attr('data-display', 1);
            } else {
                $('#menuMobile').animate({left: - $('#menuMobile').width()}, 350);
                $(this).attr('data-display', 0);
            }
        }
    });

    $(window).resize(function() {
        var width  = $(this).width();
        var height = $(this).height();
        if (width < 767) {
            $('#menuMobile').css('height', height).show();
        } else {
            $('#menuMobile').hide();
        }
    });
}

// make event scroll to top
function scrollTop() {
    $('#scrollTop').click(function() {
        $(this).css('text-decoration', 'none');
        $('body').animate({"scrollTop": 0}, 500);
    });
}

// table jquery
function showTableData(tableName) {
    $('select[table-name="'+ tableName +'"]').change(function() {
        var rows = parseInt($(this).val());

        if (!isNaN(rows)) {
            var selector = 'table[name="'+ tableName +'"] tbody tr';
            var element = $(selector);

            element.hide();
            rows = (rows <= element.length) ? rows : element.length;

            for (var i = 0; i < rows; i++) {
                element.eq(i).show();
            }
        }
    });
}
