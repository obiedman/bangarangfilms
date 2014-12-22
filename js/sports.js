var details = {
  "2way_camp" : {
      "video" : "https://www.youtube.com/embed/NoFS1aVeF7g",
      "video_details" : {
          "title" : "2Way Lacrosse Camp",
          "blurb" : "Produced by Bangarang Films, this video was created for 2Way Lacrosse Camps. The video production, customer testimonials, b-roll, and professional editing create a compelling marketing video for 2Way Lacrosse Camps."
      }
    },

  "b4b" : {
    "video" : "https://www.youtube.com/embed/yXmjtUPpv1I",
    "video_details" : {
      "title" : "Beggin' 4 Bass",
      "blurb" : "Join host Adam Guild as he travels the country searching for the best bass fishing spots our nation has to offer. Expect plenty of food, fun, and general debauchery as 'AG' brings his unique sense of humor to the locals of these legendary fishing holes. Produced by Bangarang Films."
    }
  },
  "nikes" : {
    "video" : "https://www.youtube.com/embed/cZkMsOnjLPs?rel=0",
    "video_details" : {
      "title" : "Nikes",
      "artist" : "RE-UP",
      "blurb" : "A music video for Re-Up's song 'Nikes'. Filmed on the Sony EX-1 in Brighton, MA and Waltham, MA. (2010)"
    }
  },
  "and1_live" : {
    "video" : "https://player.vimeo.com/video/39435121?title=0&amp;byline=0&amp;portrait=0&amp;color=4cff24",
    "video_details" : {
      "title" : "And1 Live - Turks and Caicos",
      "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  },
}

var videoDetailsHeight;

var toggleDetails = function(){
  var count = $(".video_details").data("count");
    if (count % 2 == 0){
      videoDetailsHeight = $(".video_details").height();
      console.log(videoDetailsHeight);
      $(".video_details").css("bottom", 20-videoDetailsHeight);
      $("#title-toggle").removeClass("glyphicon-chevron-down");
      $("#title-toggle").addClass("glyphicon-chevron-up");
      $("#title-toggle")[0].innerHTML = "&nbsp;Show";
      $(".video_details").data("count", count + 1);
    }else{
      $(".video_details").css("bottom", 0);
      $(".video_details").data("count", count  + 1);
      $("#title-toggle").removeClass("glyphicon-chevron-up");
      $("#title-toggle").addClass("glyphicon-chevron-down");
      $("#title-toggle")[0].innerHTML = "&nbsp;Hide";
    }
  };

$(".video_link").click(function(){
  event.preventDefault();
  $(".active").removeClass("active");
  $(this).addClass("active");
  var video = details[$(this).data("video")];
  video_string = "<iframe class='embed-responsive-item padded' src=" + video["video"] + " allowfullscreen></iframe>"
  details_string = "<div class='video_details' data-count='0'><span id='title-toggle' class='glyphicon glyphicon-chevron-down'>&nbsp;Hide</span><h2 class='text-primary'>" + video["video_details"]["title"] + "</h3><h3>" + video["video_details"]["blurb"] + "</h3></div>";
  $("#change").html(video_string + details_string);

  $("#title-toggle").click(function(){
    console.log("got here");
    toggleDetails();
  });
});

$(document).ready(function(){
  $("#title-toggle").click(function(){
    toggleDetails();
  });
});