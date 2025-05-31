let slideIndex = 1;
let slideTimer;
const slideDuration = 6000; // 6 секунд задержки до автопереключения слайда

// инициализация слайдшоу
function initSlideshow() {
    console.log("Initializing slideshow");
    const slides = document.getElementsByClassName("slide");
    console.log("Found " + slides.length + " slides");
    
    // Установить первый слайд и точку как активные
    if (slides.length > 0 && !slides[0].classList.contains("active")) {
        slides[0].classList.add("active");
    }
    
    const dots = document.getElementsByClassName("dot");
    if (dots.length > 0) {
        dots[0].classList.add("active");
    }
    
    // Запустить таймер переключеняи слайдов
    startSlideTimer();
}

// Запуск таймера слайда
function startSlideTimer() {
    // Clear any existing timer
    clearTimeout(slideTimer);
    
    // Обнулить таймер
    slideTimer = setTimeout(function() {
        changeSlide(1);
    }, slideDuration);
}

// Переключить слайд на n позиций
function changeSlide(n) {
    showSlides(slideIndex += n);
    // Обнулить таймер при ручном переключении слайдов
    startSlideTimer();
}

// Перейти на конкретный слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
    // Переключить таймер при ручном переключении слайдов
    startSlideTimer();
}

// Отобразить текущий слайд
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) {
        console.error("No slides found");
        return;
    }
    
    // Вернуться к первому слайду, если мы прошли его
    if (n > slides.length) {slideIndex = 1}
    
    // Перейти к последнему слайду, если мы прошли его
    if (n < 1) {slideIndex = slides.length}
    
    // Скрыть все слайды
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Удалить активный класс у всех точек
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Отобразить текущий слайд и активировать его точку
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

// Инициализировать при загрузке DOM дерева
document.addEventListener('DOMContentLoaded', initSlideshow); 