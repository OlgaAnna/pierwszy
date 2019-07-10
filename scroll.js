jQuery(function ($) {
    //scroll reset, start property
    $.scrollTo(0);

    //link
    $('#link1').click(function () {
        $.scrollTo($('#about'), 500);
    });

    $('#link2').click(function () {
        $.scrollTo($('#work'), 500);
    });

    $('#link3').click(function () {
        $.scrollTo($('#contact'), 500);
    });
});