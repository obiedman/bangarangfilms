$(".videoThumbnail").hover(function () {
    "use strict";
    var that = $(this);
    $("#" + that.data("video")).get(0).play();
}, function () {
    "use strict";
    var that = $(this);
    $("#" + that.data("video")).get(0).pause();
});