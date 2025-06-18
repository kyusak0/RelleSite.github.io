function initSlider() {
    const slider = document.querySelector('.certificate-list');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (window.innerWidth <= 768) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 300, behavior: 'smooth' });
        });
        
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
}

// Инициализация при загрузке и ресайзе
window.addEventListener('DOMContentLoaded', initSlider);
window.addEventListener('resize', initSlider);