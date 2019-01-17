var dir = $(".directory")
dir.addClass("open")

function R(min, max) {
    return min + Math.floor(10 * Math.random() * (max - min)) / 10;
}

// placement
var books = $(".books li"),
    total = books.length;
var container = $(".books"),
    h = container.innerHeight();
var bookwidth = 400,
    bookheight = 200;
var xwidth = 0;
for (var i = 0; i < total; i++) {
    var book = books[i];
    TweenLite.set(book, {
        x: xwidth,
        y: R(0, h - bookheight)
    });
    xwidth += bookwidth + 50;
}

// on hover
$(".books li").hover(
    function () {
        var boxes = $(".books img");
        var this_i = $(this).find("img");
        TweenMax.to(boxes, 0.7, { opacity: 0.5 });
        TweenMax.to(this_i, 0.1, { scale: 1, opacity: 1 });
        TweenMax.to(this_i, 0.1, { opacity: 1 });
    },
    function () {
        var boxes = $(".books img");
        TweenMax.to(boxes, 0.7, { opacity: 1 });
    }
);

// parallax
var winW = $(window).width(),
    winWHalf = winW / 3,
    oldX = 0;
$(document).on("mousemove", function (e) {
    var percentMM = (oldX - e.pageX) / winWHalf * 100;
    $(".books li").each(function () {
        TweenMax.to($(this), 1, { x: "+=" + percentMM * R(10, 30) });
    });
    oldX = e.pageX;
});