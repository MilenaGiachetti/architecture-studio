// Slide controller
const slides = document.getElementsByClassName("slide");
const previousBtn = document.getElementById("slider-previous");
const nextBtn = document.getElementById("slider-next");
const btns = document.getElementsByClassName("slider__control");

let currentSlideIndex = 0;

const changeSlide = (index) => {
    slides[currentSlideIndex].classList.remove("slide--active");
    btns[currentSlideIndex].classList.remove("slider__control--active");
    if (index < 0) {
        index = --slides.length;
    } else if (index === slides.length) {
        index = 0
    }
    slides[index].classList.add("slide--active");
    btns[index].classList.add("slider__control--active");
    currentSlideIndex = index;
}

previousBtn.addEventListener("click", () => {
    changeSlide(currentSlideIndex - 1)
})

nextBtn.addEventListener("click", () => {
    changeSlide(currentSlideIndex + 1)
})

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        changeSlide(+e.target.dataset.slide);
    })
}