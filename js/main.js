$(function(){
   
 
  
  $('.regular').slick({
    // autoplay: true,
    dots: false,
    swipe:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
   
  });
  
  $(".hamberger").click(function () {
    $(this).toggleClass('active');
    $(".hamberger-menu").toggleClass("open");
    $("html").toggleClass("no_scroll");
    $("body").toggleClass("no_scroll");
    
});
  
  $(".hamburger").on("click", function(){
    if($(".sp-nav").hasClass("open-nav")){
  
      $(".sp-nav").removeClass("open-nav")
    }else {
      $(".sp-nav").addClass("open-nav")
    }
      
  })
  
 

});



 

  
  
    
 
    

   
