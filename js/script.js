

$(document).ready(function () {
    $('.header__menu-burger').click(function (event) {
        $('.header__menu-burger, .header__menu, .header, .first-block__button-body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function () {
    $('.header__dropdown-directory-textus').click(function (event) {
        $('.header__last-line, .header__dropdown-page').toggleClass('dropdown-page');
        //$('body').toggleClass('lock');
    });
});

$(document).ready(function () {

    $('#img-tovar1').addClass('_visible');
    $('#title1').addClass('_visible');
    $('#text1').addClass('_visible');
    $('#long1').addClass('_visible');
    $('#weight1').addClass('_visible');
    $('#material1').addClass('_visible');

    $('#tab_1').click(function (event) {
        $('#tab_1').addClass('check');
        $('#tab_2').removeClass('check');
        $('#tab_3').removeClass('check');

        $('#img-tovar1').addClass('_visible');
        $('#img-tovar3').removeClass('_visible');
        $('#img-tovar2').removeClass('_visible');

        $('#title1').addClass('_visible');
        $('#title2').removeClass('_visible');
        $('#title3').removeClass('_visible');

        $('#text1').addClass('_visible');
        $('#text2').removeClass('_visible');
        $('#text3').removeClass('_visible');

        $('#long1').addClass('_visible');
        $('#long2').removeClass('_visible');
        $('#long3').removeClass('_visible');

        $('#weight1').addClass('_visible');
        $('#weight2').removeClass('_visible');
        $('#weight3').removeClass('_visible');

        $('#material1').addClass('_visible');
        $('#material2').removeClass('_visible');
        $('#material3').removeClass('_visible');
    });

    $('#tab_2').click(function (event) {
        $('#tab_1').removeClass('check');
        $('#tab_2').addClass('check');
        $('#tab_3').removeClass('check');

        $('#img-tovar2').addClass('_visible');
        $('#img-tovar3').removeClass('_visible');
        $('#img-tovar1').removeClass('_visible');

        $('#title1').removeClass('_visible');
        $('#title2').addClass('_visible');
        $('#title3').removeClass('_visible');

        $('#text1').removeClass('_visible');
        $('#text2').addClass('_visible');
        $('#text3').removeClass('_visible');

        $('#long1').removeClass('_visible');
        $('#long2').addClass('_visible');
        $('#long3').removeClass('_visible');

        $('#weight1').removeClass('_visible');
        $('#weight2').addClass('_visible');
        $('#weight3').removeClass('_visible');

        $('#material1').removeClass('_visible');
        $('#material2').addClass('_visible');
        $('#material3').removeClass('_visible');
    });

    $('#tab_3').click(function (event) {
        $('#tab_1').removeClass('check');
        $('#tab_2').removeClass('check');
        $('#tab_3').addClass('check');

        $('#img-tovar3').addClass('_visible');
        $('#img-tovar1').removeClass('_visible');
        $('#img-tovar2').removeClass('_visible');

        $('#title1').removeClass('_visible');
        $('#title2').removeClass('_visible');
        $('#title3').addClass('_visible');

        $('#text1').removeClass('_visible');
        $('#text2').removeClass('_visible');
        $('#text3').addClass('_visible');

        $('#long1').removeClass('_visible');
        $('#long2').removeClass('_visible');
        $('#long3').addClass('_visible');

        $('#weight1').removeClass('_visible');
        $('#weight2').removeClass('_visible');
        $('#weight3').addClass('_visible');

        $('#material1').removeClass('_visible');
        $('#material2').removeClass('_visible');
        $('#material3').addClass('_visible');
    });


});
