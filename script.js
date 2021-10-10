
$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $(".header-wraper").css("background" , "#FFBF9D");
      }

      else{
          $(".navigation-wraper").css("background" , "");  	
      }
  })
})

$(function(){
$('.multiple-items').slick({
  infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  ]
});  
});





