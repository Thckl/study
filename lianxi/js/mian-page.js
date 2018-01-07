// JavaScript Document
var t;
$(".gc").hover(function () {
    clearTimeout(t);
    t = setTimeout(function () {
        $(".gc").find(".card-nav").animate({
            'top': 40 + 'px',
            'opacity': 1
        }, 200).addClass("dis");
    }, 500);
});

$(".gc").mouseleave(function () {
    clearTimeout(t);
    $(this).find(".card-nav").animate({
        'top': 50 + 'px',
        'opacity': 0
    }, 200, function () {
        $(".gc").find(".card-nav").removeClass("dis");
    });
});
