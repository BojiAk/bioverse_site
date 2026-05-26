document.addEventListener('DOMContentLoaded', function () {
    setActiveMenuLink();
    startCarousel();
    handleDemoForm();
});

function setActiveMenuLink() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.links a');

    menuLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

function startCarousel() {
    const carousel = document.querySelector('.carousel');

    if (!carousel) {
        return;
    }

    const slides = carousel.querySelector('.slides');
    const totalSlides = slides.children.length;
    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    carousel.querySelector('.next').addEventListener('click', function () {
        showSlide(currentIndex + 1);
    });

    carousel.querySelector('.prev').addEventListener('click', function () {
        showSlide(currentIndex - 1);
    });

    setInterval(function () {
        showSlide(currentIndex + 1);
    }, 4500);
}

function handleDemoForm() {
    const form = document.querySelector('form[data-demo]');

    if (!form) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const message = document.querySelector('#msg');
        message.textContent = 'Mulțumim! Formularul demonstrativ a fost completat.';

        form.reset();
    });
}
