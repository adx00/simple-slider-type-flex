document.addEventListener('DOMContentLoaded', sliderInit(2));

function sliderInit(activeSlide = 0) {
    let slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            removeActiveClass();
            slide.classList.add('active');
        });
    });

    function removeActiveClass() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });  
    }
}