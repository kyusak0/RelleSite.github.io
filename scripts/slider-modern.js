document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const arrow = document.querySelector('.slider-arrow');
    
    // Клонируем первый слайд и добавляем в конец для бесконечности
    const firstSlide = slides[0].cloneNode(true);
    slider.appendChild(firstSlide);
    
    let currentIndex = 0;
    const slideCount = slides.length;
    const slideWidth = 100; // 100% ширины
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % (slideCount + 1);
        slider.style.transition = 'transform 0.3s ease';
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Если достигли клона - мгновенно возвращаемся к началу
        if (currentIndex === slideCount) {
            setTimeout(() => {
                slider.style.transition = 'none';
                currentIndex = 0;
                slider.style.transform = 'translateX(0)';
            }, 300);
        }
    }
    
    arrow.addEventListener('click', nextSlide);
    
    // Автопрокрутка
    let interval = setInterval(nextSlide, 3000);
    
    // Пауза при наведении
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 3000);
    });
});