$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items:1,
        autoplay:false,
        autoplaySpeed:1000,
        dots:true,
        nav:false,
    });
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 80){
            $('.sticky-wraffer').css({
                'position':'fixed'
             })
            $('.sticky-wraffer').addClass('wrap')
    
    
    
        }else if($(this).scrollTop() < 80){
            $('.sticky-wraffer').css({
               'position':'static'
            })
            $('.sticky-wraffer').removeClass('wrap')
    
        }
    }
    
    )

// ===================  animation ======================

AOS.init();

});
   



