document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector('.carousel-slides');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateSlide() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 20}%)`;
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    }

    function movePrev() {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlide();
    }

    function startAutoplay() {
        setInterval(moveNext, 2000); 
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', movePrev);
        nextButton.addEventListener('click', moveNext);
    } else {
        console.error("Buttons not found");
    }

    startAutoplay();
});
