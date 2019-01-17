function R(min, max) { return min + Math.floor(10 * Math.random() * (max - min)) / 10; }

var books = $(".books li"),
    total = books.length, 
    container = $(".books"),
    h = container.innerHeight(),
    dir = $(".directory"),
    book_x = 0, 
    mouse_x = 0, 
    mouse_offset = $(window).width() / 3;

// onload animations
$(document).ready(function () {
    dir.addClass("open")
});

// placement
var bookwidth = 400, bookheight = 200;
for (var i = 0; i < total; i++) {
    var book = books[i];
    TweenLite.set(book, { x: book_x, y: R(0, h - bookheight) });
    book_x += bookwidth + 50;
    book.attr("startX", book_x)
}

// on hover
books.hover(function () {
        var boxes = $(".books img");
        var this_i = $(this).find("img");
        TweenMax.to(boxes, 0.7, { opacity: 0.5 });
        TweenMax.to(this_i, 0.1, { scale: 1, opacity: 1 });
        TweenMax.to(this_i, 0.1, { opacity: 1 });
    }, function () {
        var boxes = $(".books img");
        TweenMax.to(boxes, 0.7, { opacity: 1 });
    }
);

// parallax
$(document).on("mousemove", function (e) {
    var percentMM = (mouse_x - e.pageX) / mouse_offset * 100;
    $(".books li").each(function () {
        TweenMax.to($(this), 1, { x: "+=" + percentMM * R(10, 30) });
    });
    mouse_x = e.pageX;
});