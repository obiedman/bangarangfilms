var jjBlurb = "JJ hails from Barrington, Rhode Island. After attending high school at the Porstmouth Abbey School, JJ accepted a spot at Boston College, graduating in 2009 with a BA in Communications and a minor in Film Studies. JJ went on to Boston University's Center for Digital Imaging Arts, where he received a certificate degree in Digital Filmmaking. He has been producing award-winning video content in the greater Boston area ever since.";
var jjInfo = document.getElementById("jjInfo");
var jjInfoMobile = document.getElementById('jjInfoMobile');

var kevinBlurb = "Kevin grew up in Simsbury, Connecticut where he attended The Westminster School. After a much anticipated decision, he decided to take his talents to Boston, graduating from Boston College's Carroll School of Management in 2009 with focuses in Marketing and Economics. A film buff since childhood, Kevin joined JJ to form Bangarang Films in 2011.";
var kevinInfo = document.getElementById("kevinInfo");
var kevinInfoMobile = document.getElementById('kevinInfoMobile');


$(document).ready(function() {
  if ($(window).width() > 768){
    jjInfo.innerHTML = jjBlurb;
    kevinInfo.innerHTML = kevinBlurb;
  } else{
    jjInfoMobile.innerHTML = jjBlurb;
    kevinInfoMobile.innerHTML = kevinBlurb;
  $("#kevRoles").height($("#jjRoles").height()); 
  };
})

$(window).resize(function() {
  if ($(window).width() > 768){
    jjInfo.innerHTML = jjBlurb;
    jjInfoMobile.innerHTML = '';

    kevinInfo.innerHTML = kevinBlurb;
    kevinInfoMobile.innerHTML = '';

  } else {
    jjInfo.innerHTML = '';
    jjInfoMobile.innerHTML = jjBlurb;

    kevinInfo.innerHTML = '';
    kevinInfoMobile.innerHTML = kevinBlurb;
  };
  $("#kevRoles").height($("#jjRoles").height());
});