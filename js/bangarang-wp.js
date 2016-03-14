$(function () {
    "use strict";
    var preloadImages = function () {
        var preloadImages = [
		// small bangarang logo
			"http://bangarangfilms.com/images/bf_logo_xs-s.png",
		// play button overlay
			"http://bangarangfilms.com/images/play_overlay.png",
		// jQuery UI icons and styles
			"http://bangarangfilms.com/css/images/ui-bg_flat_25_000000_40x100.png",
			"http://bangarangfilms.com/css/images/ui-bg_flat_44_000000_40x100.png",
			"http://bangarangfilms.com/css/images/ui-bg_highlight-hard_20_0972a5_1x100.png",
			"http://bangarangfilms.com/css/images/ui-bg_highlight-soft_33_003147_1x100.png"
		],

            images = [];
        for (var i = 0; i < preloadImages.length; i++) {
            images.push(new Image());
            images[images.length - 1].src = preloadImages[i];
        }
    }();

    Cufon.replace("h1, h2, h3");

    $(".ui-tabs-nav li").bind("mouseover", function () {
        $(this).toggleClass("ui-state-hover");
    }).bind("mouseout", function () {
        $(this).toggleClass("ui-state-hover");
    });


});