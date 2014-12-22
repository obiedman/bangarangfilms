$(function() {
  $("#myModal").on('hidden.bs.modal', function(e) {
    $("#modalVideo").attr("src", "");
   
  });
});

//load correct video when thumbnail is clicked
$(function(){
  $(".video-choice").click(function(){
    var srcVideo = $(this)[0].getAttribute("data-video");
    $("#modalVideo").attr("src", srcVideo);
  });
});