$(document).ready(function () {
    $('.nav-toggle').click(function (event) {
        $('.nav-toggle, .nav_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});