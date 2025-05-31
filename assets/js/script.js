// Показывать кнопку при прокрутке
window.onscroll = function() {
    let button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Прокрутка страницы наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}