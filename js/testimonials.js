(function () {
    const testimonials = [
        {
            idTestimonials: "testimonial_1",
            imageTestimonials: "img/testimonials-carousel/img-cole-tiers.png",
            imageNameTestimonials: "Photo Cole Tiers",
            nameTestimonials: "Cole Tiers",
            textTestimonials: "I wanted to see Norway since childhood when I saw a stylish house right in the middle of the Norwegian forest in some magazine. I thought then that I also want to live in such a house. This dream	came true a few months ago on a tour of Norway. I am very happy! Thanks, gues!",
            dataTestimonials: "October 28, 2021"
        },
        {
            idTestimonials: "testimonial_2",
            imageTestimonials: "img/testimonials-carousel/img-lilland-forester.png",
            imageNameTestimonials: "Photo Lilland Forester",
            nameTestimonials: "Lilland Forester",
            textTestimonials: "We went on this tour with our daughter, she was 5 years old. I was worried that it would be difficult for her but everything went	great. We spent nights in good hotels with excellent breakfasts.	My daughter always had something to eat, and the nature in Norway	fascinated her even more us!",
            dataTestimonials: "May 13, 2022"
        },
        {
            idTestimonials: "testimonial_3",
            imageTestimonials: "img/testimonials-carousel/img-alice-hendricks.jpg",
            imageNameTestimonials: "Photo Alice Hendricks",
            nameTestimonials: "Alice Hendricks",
            textTestimonials: "I still can’t believe I have seen the Northern Lights with my own	eyes! That was incredible! When we arrived in Tromso, it was	constantly snowing, the weather was bad, and the guide said that	we were out of luck, most likely. But on the last night, right at midnight, the clouds left, and I saw it! It was magical!",
            dataTestimonials: "January 12, 2022"
        },
    ];
    function renderPointTestimonials() {
        for (let i = 0; i < testimonials.length; i++) {
            const pointOne = document.querySelector('.pointTestimonials');
            pointOne.innerHTML += `<span class="dotTestimonials"></span>`;
        }
    }
    renderPointTestimonials();
    let currentSlideTestimonialIdx = 0;
    function renderSlideTestimonials() {
        const slideContainerTestimonials = document.querySelector('.testimonials__carousel-slide');
        slideContainerTestimonials.innerHTML = `
        <article class="carousel__person">
                                <img src="${testimonials[currentSlideTestimonialIdx].imageTestimonials}" class="carousel__person-img" alt="${testimonials[currentSlideTestimonialIdx].imageNameTestimonials}">
                        <h4 class="carousel__person">${testimonials[currentSlideTestimonialIdx].nameTestimonials}</h4>
                        <p class="carousel__person-text">${testimonials[currentSlideTestimonialIdx].textTestimonials}</p>
                      <p class="carousel__person-data">${testimonials[currentSlideTestimonialIdx].dataTestimonials}</p>
                 </article>`;
        activePointTestimonials();
    }
    function nextSlideTestimonials() {
        currentSlideTestimonialIdx = currentSlideTestimonialIdx + 1 >= testimonials.length ? 0 : currentSlideTestimonialIdx + 1;
        renderSlideTestimonials();
    }
    function prevSlideTestimonials() {
        currentSlideTestimonialIdx = currentSlideTestimonialIdx - 1 < 0 ? testimonials.length - 1 : currentSlideTestimonialIdx - 1;
        renderSlideTestimonials();
    }
    renderSlideTestimonials();
    const nextBtnTestimonial = document.querySelector('.testimonials__carousel__button-next');
    nextBtnTestimonial.addEventListener('click', nextSlideTestimonials);
    const prevBtnTestimonial = document.querySelector('.testimonials__carousel__button-prev');
    prevBtnTestimonial.addEventListener('click', prevSlideTestimonials);
    function activePointTestimonials() {
        const activeDotTestimonials = document.getElementsByClassName("dotTestimonials");
        for (let i = 0; i < testimonials.length; i++) {
            activeDotTestimonials[i].className = activeDotTestimonials[i].className.replace(" active", "");
        }
        activeDotTestimonials[currentSlideTestimonialIdx].className += " active";
    }
})();