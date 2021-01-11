$(document).ready(function () {
    $('.header__menu-burger').click(function (event) {
        $('.header__menu-burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});