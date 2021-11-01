// Slide controller
const slides = document.getElementsByClassName("slide");
const previousBtn = document.getElementById("slider-previous");
const nextBtn = document.getElementById("slider-next");

let currentSlideIndex = 0;

const changeSlide = (index) => {
    slides[currentSlideIndex].classList.remove("slide--active");
    if (index < 0) {
        index = --slides.length;
    } else if (index === slides.length) {
        index = 0
    }
    slides[index].classList.add("slide--active");
    currentSlideIndex = index;
}

previousBtn.addEventListener("click", () => {
    changeSlide(currentSlideIndex - 1)
})

nextBtn.addEventListener("click", () => {
    changeSlide(currentSlideIndex + 1)
})