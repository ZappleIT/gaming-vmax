$(window).resize(function () {
    var widthWindow = $(window).width();
    if (widthWindow <= '576') {
        $('.justify-content-center').addClass('row');
    }
    else
    {
        $('.justify-content-center').removeClass('row');
    }
});
$(window).trigger('resize');