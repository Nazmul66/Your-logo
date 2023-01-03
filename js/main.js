// preloader jquery function

$(window).on("load", function(){

  $(".preloader").fadeOut("fast");

});


// scrollbar jquery function

$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".fa-arrow-up").fadeIn();
    }
    else{
      $(".fa-arrow-up").fadeOut();
    }
  });

  $(".fa-arrow-up").click(function(){
    $("body").animate({
      scrollTop:0
    }, 1000);

  });

});

//

function searchBar(){
  var icon = document.getElementById("form-section");
  icon.classList.toggle('kola');
}

function closehBar(){
  var icon = document.getElementById("form-section");
  icon.classList.toggle('kola');
}



