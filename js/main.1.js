$(document).ready(function(){
    $(document).scroll(function(){ //используем функцию при скролле 
        $('.fly-container, .fly-container-1, .fly-container-2, .fly-container-3, .fly-container-4').each(function(){ // для каждого map-container
            var scrolled = $(window).scrollTop();// вычисляем сколько проскроллили в пикселях от верхней части окна браузера
            $('.eye-1').css('top',0-(scrolled*0.6)+'px');
            $('.finger').css('top',0-(scrolled*0.6)+'px');
            $('.eye-2').css('top',0-(scrolled*0.6)+'px');
            $('.heart').css('top',0-(scrolled*0.6)+'px');
            $('.broke').css('top',0-(scrolled*0.6)+'px');
        })
    });        
});
