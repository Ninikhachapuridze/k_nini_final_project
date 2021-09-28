$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navigation-wraper").css("background" , "#FFBF9D");
        }
  
        else{
            $(".navigation-wraper").css("background" , "#9FA1AA");  	
        }
    })
  })

  $(function(){
    $('.multiple-items').slick({
     infinite: true,
     // რამდენი სურათი გამოჩნდეს
     slidesToShow: 3,
     // სლაიდის დროს რამდენი ელემნტით გადავიდეს 
     slidesToScroll: 1,
     // რომ გამოჩნდეს ღილაკები
     arrows: true,
     // რომ გამოჩნდეს ბურთულები
     dots:true,
     // responsiv-ის კოდი
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

