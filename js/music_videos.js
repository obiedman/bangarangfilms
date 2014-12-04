var details = {
  "look_alive" : {
      "video" : "https://www.youtube.com/embed/42o1HCmFFpo",
      "video_details" : {
          "title" : "Look Alive",
          "artist" : "Billy Dodge and the Emotions",
          "blurb" : "A live performance filmed on two cameras with live recorded audio. Filmed on RED Scarlet and Canon 60D at Johnny D's in Cambridge, MA. (2013)"
      }
    },

  "illusory" : {
    "video" : "https://www.youtube.com/embed/2wdTTmL6CA4?list=UU2pnpXYDpvJ7ysw8U98S1Lg",
    "video_details" : {
      "title" : "Illusory",
      "artist" : "Billy Dodge ft. Eleanor Kaufman",
      "blurb" : "A music video for Billy Dodge's song 'Illusory', featuring Eleanor Kaufman. Filmed on the RED Scarlet in Westport, MA and Horseneck Beach. (2013)"
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
  "yellow_woman" : {
    "video" : "https://www.youtube.com/embed/uh4GYgv_XUU?rel=0",
    "video_details" : {
      "title" : "Yellow Woman",
      "artist" : "The Nate Wilson Group",
      "blurb" : "A live performance with live recorded audio. Filmed on the Sony EX-1 at Church in Boston, MA. (2011)"
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
  details_string = "<div class='video_details' data-count='0'><span id='title-toggle' class='glyphicon glyphicon-chevron-down'>&nbsp;Hide</span><h2 class='text-primary'>" + video["video_details"]["title"] + "</h2><h3 class='text-secondary'>"+video["video_details"]["artist"] + "</h3><h3>" + video["video_details"]["blurb"] + "</h3></div>";
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