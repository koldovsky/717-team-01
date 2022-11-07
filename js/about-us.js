$(document).ready(function() {
$(window).scroll(function(){
    const scrollTop = $(window).scrollTop();
    const offsetTop = $(".about-us").offset().top -200;
    if (scrollTop > offsetTop) {
        $(".about-us").animate({opacity: 1}, 1000);
    }
})
})
