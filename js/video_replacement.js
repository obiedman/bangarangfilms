$(document).ready(function(){
  nikes_string = '<video id="nikes" class="embed-responsive-item" poster="videos/music/thumbs/nikes03.jpg" loop><source src="videos/music/nikes03/nikes03.mp4.mp4" type="video/mp4"></source><source src="videos/music/nikes03/nikes03.webm" type="video/webm"></source><source src="videos/music/nikes03/nikes03.oggtheora.ogv" type="video/ogg"></source><img src="videos/music/thumbs/nikes03.jpg" class="img-responsive" alt="Music" /></video>';
  sports_string = '<video id="sports" class="embed-responsive-item" poster="videos/sports/thumbs/2way01.jpg" loop><source src="videos/sports/2way01/2way01.mp4.mp4" type="video/mp4"></source><source src="videos/sports/2way01/2way01.webm" type="video/webm"></source><source src="videos/sports/2way01/2way01.oggtheora.ogv" type="video/ogg"></source><img src="videos/sports/thumbs/2way01.png" class="img-responsive" alt="Sports" /></video>';
  corp_string = '<video id="welding" class="embed-responsive-item" poster="videos/corporate/thumbs/welding02.jpg" loop><source src="videos/corporate/welding02/welding_02.mp4.mp4" type="video/mp4"></source><source src="videos/corporate/welding02/welding_02.webm" type="video/webm"></source><source src="videos/corporate/welding02/welding_02.oggtheora.ogv" type="video/ogg"></source><img src="videos/corporate/thumbs/welding02.jpg" class="img-responsive" alt="Corporate" /></video>';
  commercials_string = '<video id="fountains" class="embed-responsive-item" poster="videos/commercials/thumbs/fountains01.jpg" loop><source src="videos/commercials/fountains/fountains.mp4.mp4" type="video/mp4"></source><source src="videos/commercials/fountains/fountains.webm" type="video/webm"></source><source src="videos/commercials/fountains/fountains.oggtheora.ogv" type="video/ogg"></source><img src="videos/commercials/thumbs/fountains01.jpg" class="img-responsive" alt="Commercials" /></video>';
  weddings_string = '<video id="weddings" class="embed-responsive-item" poster="videos/weddings/thumbs/weddings.jpg" loop><source src="videos/weddings/weddings03/weddings03.mp4.mp4" type="video/mp4"></source><source src="videos/weddings/weddings03/weddings03.webm" type="video/webm"></source><source src="videos/weddings/weddings03/weddings03.oggtheora.ogv" type="video/ogg"></source><img src="videos/weddings/thumbs/weddings.jpg" class="img-responsive" alt="Weddings" /></video>';
  other_string = '<video id="other" class="embed-responsive-item" poster="videos/other/thumbs/beggin4bass01.jpg" loop><source src="videos/other/beggin4bass/beggin4bass01.mp4.mp4" type="video/mp4"></source><source src="videos/other/beggin4bass/beggin4bass01.webm" type="video/webm"></source><source src="videos/other/beggin4bass/beggin4bass01.oggtheora.ogv" type="video/ogg"></source><img src="videos/other/thumbs/beggin4bass01.jpg" class="img-responsive" alt="Other" /></video>';

  $("#music_placeholder").html(nikes_string);
  $("#sports_placeholder").html(sports_string);
  $("#corp_placeholder").html(corp_string);
  $("#commercials_placeholder").html(commercials_string);
  $("#weddings_placeholder").html(weddings_string);
  $("#other_placeholder").html(other_string);
  $(".videoThumbnail").hover(function(){
    var that = $(this);
    $("#"+that.data("video")).get(0).play();
  }, function(){
    var that = $(this);
    $("#"+that.data("video")).get(0).pause();
  });
});
