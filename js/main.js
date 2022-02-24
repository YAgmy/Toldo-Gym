$("#menu").click(function() {
        $(this).toggleClass("fa-times");
        $('header nav').fadeIn('slow', function() {
            if ($('#menu').hasClass("fa-times")) {
                $(".fa-times").on("click", function () {
                    $('header nav').fadeOut('slow');
                });
            }
        });
});



$('.btn-effet').hover(function (e) {

    $(this).find('span').eq(1).animate({
        width: '100%'
    }, 500)

}, function () {

    $(this).find('span').eq(1).animate({
        width: 0
    }, 500)
});


$(window).on('scroll', function () {
    if ($(window).scrollTop() > 500) {
        $("header").css("background-color", "rgba(0, 0, 0, 0.914)");
    }
})


// Sync Header link:
$(window).scroll( function () {
    $('.bk').each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 300) {
            let bkid = $(this).attr("id");
            $('nav a').removeClass('active')
            $('nav a[data-scroll="' + bkid + '"]').addClass("active");
        }
    })
})
