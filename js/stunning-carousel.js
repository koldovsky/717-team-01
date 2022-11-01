(function () {
    const slides = [
        '<div class="slide"><img src="img/stunnigspots/1-sunset-min.jpg" alt="Sunset"></div>',
        '<div class="slide"><img src="img/stunnigspots/2-intro-min.jpg" alt="Intro"></div>',
        '<div class="slide"><img src="img/stunnigspots/3-tronkheym-min.jpg" alt="Tronkheym"></div>',
        '<div class="slide"><img src="img/stunnigspots/4-thumbnail-min.jpg" alt="Thumbnail"></div>',
        '<div class="slide"><img src="img/stunnigspots/5-generated-min.jpg" alt="Generated"></div>',
        '<div class="slide"><img src="img/stunnigspots/6-gettyimages-min.jpg" alt="Gettyimages"></div>',
    ];
    let currentSlideIdx = 0;
    function renderSlide() {
        const slideContainer = document.querySelector('.products-carousel__slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 767) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 990) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }
    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }
    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlide();
    }
    //setInterval(nextSlide, 5000);
    renderSlide();
    const nextBtn = document.querySelector('.products-carousel__next');
    nextBtn.addEventListener('click', nextSlide);
    const prevBtn = document.querySelector('.products-carousel__prev');
    prevBtn.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderSlide);
})();