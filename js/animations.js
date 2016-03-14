var clicked = false;
var finished = false;

$(document).ready(function(){
  $(".demo-reel").css("height", "500px");
});

function spreadOut() {
  var t1 = new TimelineLite();

      t1.from([$('#b1'), $('#g2')], 3, {opacity: 0, ease:Power1.easeInOut});
      t1.to($('#g2'), 3, {left:"+=270px",ease:Power1.easeInOut});
      t1.to($('#b1'), 3, {left:"-=270px", ease:Power1.easeInOut}, "-=3");
      t1.to($("#a1"), 2.5, {left:"-=170px", ease:Power1.easeInOut}, "-=2.5");
      t1.to($("#a1"), 1.5, {opacity: 1, ease:Power1.easeInOut}, "-=1.5");
      t1.to($("#n2"), 2.5, {left: "+=170px", ease:Power1.easeInOut}, "-=2.5");
      t1.to($("#n2"), 1.5, {opacity: 1, ease:Power1.easeInOut}, "-=1.5");
      t1.to($("#n1"), 2, {left:"-=115px", ease:Power1.easeInOut}, "-=2");
      t1.to($("#n1"), 1.5, {opacity: 1, ease:Power1.easeInOut}, "-=1.5");
      t1.to($("#a3"), 2, {left:"+=115px", ease:Power1.easeInOut}, "-=2");
      t1.to($("#a3"), 1.5, {opacity: 1, ease:Power1.easeInOut}, "-=1.5");
      t1.to($("#g1"), 1.5, {left:"-=45px", ease:Power1.easeInOut}, "-=1.5");
      t1.to($("#r1"), 1.5, {left:"+=45px", ease:Power1.easeInOut}, "-=1.5");
      t1.to($("#g1"), 2.0, {opacity: 1, ease:Power1.easeInOut}, "-=1.0");
      t1.to($("#r1"), 2.0, {opacity: 1, ease:Power1.easeInOut}, "-=2.0");
      t1.to($("#a2"), 2.0, {opacity: 1, ease:Power1.easeInOut}, "-=2.0");
      t1.to($("#click"), 1.5, {opacity: 1, ease:Power1.easeInOut});

      finished = true;
};

function collapse(){
  var t1 = new TimelineLite();

    t1.to("#click", 1.5, {opacity: 0, ease:Power1.easeInOut});
    t1.to("#a2", 1.5, {opacity: 0, ease:Power1.easeInOut}, "-=1");
    t1.to("#r1", 2.0, {opacity: 0, ease:Power1.easeInOut}, "-=1");
    t1.to("#r1", 2, {left: "-=45px", ease:Power1.easeInOut}, "-=2");
    t1.to("#g1", 2.0, {opacity: 0, ease:Power1.easeInOut}, "-=2");
    t1.to("#g1", 2, {left: "+=45px", ease:Power1.easeInOut}, "-=2");
    t1.to("#a3", 2, {opacity: 0, ease:Power1.easeInOut}, "-=2");
    t1.to("#a3", 2, {left: "-=115px", ease:Power1.easeInOut}, "-=2");
    t1.to("#n1", 2, {opacity: 0, ease:Power1.easeInOut}, "-=2");
    t1.to("#n1", 2, {left: "+=115px", ease:Power1.easeInOut}, "-=2");
    t1.to("#n2", 2, {opacity: 0, ease:Power1.easeInOut}, "-=2");
    t1.to("#n2", 2, {left: "-=170px", ease:Power1.easeInOut}, "-=2");
    t1.to("#a1", 2, {opacity: 0, ease:Power1.easeInOut}, "-=2");
    t1.to("#a1", 2, {left: "+=170px", ease:Power1.easeInOut}, "-=2");
    t1.to("#b1", 2.5, {left: "+=270px", ease:Power1.easeInOut}, "-=2");
    t1.to("#g2", 2.5, {left: "-=270px", ease:Power1.easeInOut}, "-=2.5");
    t1.to(["#g2", "#b1"], 3, {opacity: 0, ease:Power1.easeInOut, onComplete: showVideo});
  };

$('.video-wrap').css("opacity", 1);

if ($(window).width() > 640){

	var thevid=document.getElementById('thevideo');
	var logoDiv = document.getElementById('logoWrap');

	thevid.style.display="none";
	logoDiv.style.display="block";

	// replaces logo-wrap div with a div that holds the demo reel video, executes after fadeOut()
		function showVideo(){
			var iframe=document.getElementById('iframe');

			thevid.style.display='block'; 
			document.getElementById('iframe').src = 
			document.getElementById('iframe').src.replace('autoplay=0','autoplay=1');
			$('div.logo-wrap').replaceWith($('div.video-wrap'));
			TweenLite.to($('div.video-wrap'), 2, {opacity:1, ease:Power1.easeIn});
		};

	// Creates pop-up animation for BG logo that fires on page-load
		$(document).ready(function(){
			spreadOut();
		
		});

	// Define animation to play on click. Click can be anywhere in the containertest div.
		$('div.demo-reel').click(function (event){
			if (!clicked && finished){
				collapse();
				clicked = true;
			}
		});
};
