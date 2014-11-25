$(".videoThumbnail").hover(function(){
  var that = $(this);
  $("#"+that.data("video")).get(0).play();
}, function(){
  var that = $(this);
  $("#"+that.data("video")).get(0).pause();
});