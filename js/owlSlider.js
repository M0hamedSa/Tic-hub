$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
        "<i class='fa-solid fa-arrow-left fa-sm' style='color: #5f22d9;'></i>",
        "<i class='fa-solid fa-arrow-right fa-sm' style='color: #5f22d9;'></i>"
    ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });