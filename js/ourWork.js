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


// $(function(){
//   $('.modal').on('shown.bs.modal', function(){
//     $(this).find('.modal-dialog').css({
//       'margin-top': function(){
//         return -($(this).outerHeight() / 2);
//       },
//       'margin-left': function(){
//         return -($(this).outerWidth() / 2);
//       }
//     });
//   });
// });