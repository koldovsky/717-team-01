(function (){

    const slides = [
    '<div class="header__slide"><img class="header__slide" src="img/header_carousel-bodo.jpeg" alt="Norway Bodo"></div>',
    '<div class="header__slide"><img class="header__slide" src="img/header_carousel-lafoten.jpeg" alt="Norway Lofoten"></div>',
    '<div class="header__slide"><img class="header__slide" src="img/header_carousel-oslo.jpeg" alt="Norway Oslo"></div>',
    '<div class="header__slide"><img class="header__slide" src="img/header_carousel-tromso.jpeg" alt="Norway Tromso"></div>',
    '<div class="header__slide"><img class="header__slide" src="img/header_carousel-trondheim.jpeg" alt="Norway Trondheim"></div>'
    ];
    let currentSlideIdx = 0;
    function renderSlide() {
    const slideContainer = document.querySelector('.header__products-carousel-slide-container');
    slideContainer.innerHTML = slides[currentSlideIdx];
    }
    function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
    }
    function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
    }
    setInterval(nextSlide, 4500);
    renderSlide();
    //const nextButton = document.querySelector('.header__products-carousel-next');
    //nextButton = addEventListener('click', nextSlide);
    //const prevButton = document.querySelector('.header__products-carousel-prev');
    //prevButton = addEventListener('click', prevSlide);
})(); 