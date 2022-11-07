(function () {
    const testimonials = [
        {
            idTestimonials: "testimonial_1",
            imageTestimonials: "img/testimonials__carousel/img-cole-tiers.png",
            imageNameTestimonials: "Photo Cole Tiers",
            nameTestimonials: "Cole Tiers",
            textTestimonials: "I wanted to see Norway since childhood when I saw a stylish house right in the middle of the Norwegian forest in some magazine. I thought then that I also want to live in such a house. This dream	came true a few months ago on a tour of Norway. I am very happy! Thanks, gues!",
            dataTestimonials: "October 28, 2021"
        },
        {
            idTestimonials: "testimonial_2",
            imageTestimonials: "img/testimonials__carousel/img-lilland-forester.png",
            imageNameTestimonials: "Photo Lilland Forester",
            nameTestimonials: "Lilland Forester",
            textTestimonials: "We went on this tour with our daughter, she was 5 years old. I was worried that it would be difficult for her but everything went	great. We spent nights in good hotels with excellent breakfasts.	My daughter always had something to eat, and the nature in Norway	fascinated her even more us!",
            dataTestimonials: "May 13, 2022"
        },
        {
            idTestimonials: "testimonial_3",
            imageTestimonials: "img/testimonials__carousel/img-alice-hendricks.jpg",
            imageNameTestimonials: "Photo Alice Hendricks",
            nameTestimonials: "Alice Hendricks",
            textTestimonials: "I still can’t believe I have seen the Northern Lights with my own	eyes! That was incredible! When we arrived in Tromso, it was	constantly snowing, the weather was bad, and the guide said that	we were out of luck, most likely. But on the last night, right at midnight, the clouds left, and I saw it! It was magical!",
            dataTestimonials: "January 12, 2022"
        },
    ];
       function renderTestimonials(testimonials) {
           const testimonialsContainer = document.querySelector('.testimonials__carousel-slide');
           testimonialsContainer.innerHTML = '';
           for (const oneTestimonial of testimonials) {
               testimonialsContainer.innerHTML += `
           <article class="carousel__person">
                         <img src="${oneTestimonial.imageTestimonials}" class="carousel___person-img" alt="${oneTestimonial.imageNameTestimonials}">
                         <h4 class="carousel___person">${oneTestimonial.nameTestimonials}</h4>
                         <p class="carousel___person-text">${oneTestimonial.textTestimonials}</p>
                         <p class="carousel___person-data">${oneTestimonial.dataTestimonials}</p>
                     </article>`;
           }
       }
       renderTestimonials(testimonials);
    const slides = [
        '<article class="carousel__person"><img src="img/testimonials__carousel/img-cole-tiers.png" class="carousel___person-img" alt = "Image Cole Tiers" ></article >',
        '<article class="carousel__person"><img src="img/testimonials__carousel/img-lilland-forester.png" class="carousel___person-img" alt = "Photo Lilland Forester" ></article >',
        '<article class="carousel__person"><img src="img/testimonials__carousel/img-alice-hendricks.jpg" class="carousel___person-img" alt = "Photo Alice Hendricks" ></article >',
    ];
    let currentSlideTestimonialIdx = 0;
    function renderSlideTestimonials() {
        const slideContainer = document.querySelector('.testimonials__carousel-slide');
        slideContainer.innerHTML = slides[currentSlideTestimonialIdx];
    }
    function nextSlideTestimonials() {
        currentSlideTestimonialIdx = currentSlideTestimonialIdx + 1 >= slides.length ? 0 : currentSlideTestimonialIdx + 1;
        renderSlideTestimonials();
    }
    function prevSlideTestimonials() {
        currentSlideTestimonialIdx = currentSlideTestimonialIdx - 1 < 0 ? slides.length - 1 : currentSlideTestimonialIdx - 1;
        renderSlideTestimonials();
    }
    renderSlideTestimonials();
    const nextBtnTestimonial = document.querySelector('.testimonials__carousel__button-next');
    nextBtnTestimonial.addEventListener('click', nextSlideTestimonials);
    const prevBtnTestimonial = document.querySelector('.testimonials__carousel__button-prev');
    prevBtnTestimonial.addEventListener('click', prevSlideTestimonials);
})();