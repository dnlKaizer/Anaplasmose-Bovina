// Slide cards
$('.info-card').each(function () {
    $(this).mouseover(function () {
        $('.info-container').children('.info-card').addClass('inactive');
        $(this).removeClass('inactive');
        $(this).addClass('active');
    });
});

// Animação Slide In Left ao aparecer na tela
const observerSlideInLeft = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).addClass('slide-in');
            obs.unobserve(entry.target); // anima só uma vez
        }
    });
}, { threshold: 0.2 });

// Animação Slide In Bottom ao aparecer na tela
const observerSlideInBottom = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $(entry.target).addClass('slide-in-bottom');
            obs.unobserve(entry.target); // anima só uma vez
        }
    });
}, { threshold: 0.05 });


// Animação Slide In
$(document).ready(function () {
    $('.accordion-container').each(function () {
        observerSlideInLeft.observe(this);
    });

    $('.bg-green.shadow-green').each(function () {
        observerSlideInLeft.observe(this);
    });

    $('.section-content').each(function () {
        observerSlideInBottom.observe(this);
    });
});

// Carousel
$(document).ready(function () {
    let currentIndex = 0;
    const $carouselInner = $('.carousel-inner');
    const $cards = $('.carousel-card');
    const cardWidth = $('.carousel-card').outerWidth(true) + 36; // inclui largura + margem
    const totalSlides = $('.carousel-card').length;
    $('.carousel-inner').css('width', cardWidth * totalSlides + 'px');

    // Ajusta a largura total da .carousel-inner
    $carouselInner.css('width', cardWidth * totalSlides + 'px');

    function updateCarousel() {
        const offset = -currentIndex * cardWidth;
        $carouselInner.css('transform', 'translateX(' + offset + 'px)');
    }

    $('#nextBtn').on('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    $('#prevBtn').on('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    $('#prevBtnMobile').on('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
});