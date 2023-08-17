const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = document.querySelectorAll('.custom-slide'); // اسم الكلاس المستخدم للشرائح هنا

let currentSlideIndex = 0;

// عند النقر على زر الانتقال إلى الشريحة السابقة
prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

// عند النقر على زر الانتقال إلى الشريحة التالية
nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlider();
});

// تحديث العرض لعرض الشريحة الحالية فقط
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// عرض الشريحة الأولى افتراضيًا
updateSlider();

const swiper = new Swiper('.js-testimonials-slider', {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.js-testimonials-pagination',
    clickable: true
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
    }
  },
  on: {
    init: function () {
      animateSlide(this.slides[this.activeIndex]);
    },
    slideChangeTransitionEnd: function () {
      animateSlide(this.slides[this.activeIndex]);
    }
  }
});

function animateSlide(slide) {
  anime({
    targets: slide,
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 500,
    easing: 'easeOutQuad'
  });
}