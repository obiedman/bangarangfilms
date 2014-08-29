

if ($(window).width() > 640){
	function slideOut(){
			TweenLite.to($('.ClickHere'), 3, {opacity:1, ease:Power1.easeIn, delay:0})
		};


	// fade out letters
		function fadeOut(){
			TweenLite.to([$('#b'), $('#g')], 3, {opacity:0, ease:Power1.easeOut, onComplete:showVideo});
		};

	// replaces containertest div with a div that holds the demo reel video, executes after fadeOut()
		function showVideo(){
			var thevid=document.getElementById('thevideo');
			var iframe=document.getElementById('iframe');
			$('containertest').hide()
			thevid.style.display='block'; 
			document.getElementById('iframe').src = 
			document.getElementById('iframe').src.replace('autoplay=0','autoplay=1');
			$('div.containertest').replaceWith($('div.demoreel'));
			TweenLite.to($('div.demoreel'), 2, {opacity:1, ease:Power1.easeIn});
		};

	// Creates pop-up animation for BG logo that fires on page-load
		$(document).ready(function(){
			TweenLite.from([$('#b'), $('#g')], 3.5, {scaleX:0.0, scaleY:0.0, delay:1, ease:Power1.easeIn, ease:Elastic.easeOut, onComplete:slideOut});
			TweenLite.to($('#g'), 3, {left:"+=200px", delay:2.5,ease:Power1.easeInOut});
			TweenLite.to($('#b'), 3, {left:"-=200px", delay:2.5, ease:Power1.easeInOut});
		
		});

	// Define animation to play on click. Click can be anywhere in the containertest div.
		$('div.containertest').click(function (event){
			TweenLite.to($('.ClickHere'), 2, {opacity:0, ease:Power1.easeOut});
			TweenLite.to($('#g'), 3, {left:"-=200px", ease:Power1.easeInOut, onComplete:fadeOut});
			TweenLite.to($('#b'), 3, {left:"+=200px", ease:Power1.easeInOut, onComplete:fadeOut});
		});

	// Set hover function for ClickHere
		$('div.ClickHere').hover(function(){
			TweenLite.to($('.ClickHere'), 0.6, {fontSize:"40px"});
		}, function(){
			TweenLite.to($('.ClickHere'), 0.6, {fontSize:"36px"});
		});
	};
