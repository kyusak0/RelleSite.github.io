document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.portfolio-list');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const progressBar = document.querySelector('.slider-progress-bar');
    const items = document.querySelectorAll('.portfolio-item');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    // Обновление прогресс-бара
    function updateProgress() {
        const progress = ((currentIndex + 1) / totalItems) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Прокрутка к определенному элементу
    function scrollToItem(index) {
        if (index < 0) index = 0;
        if (index >= totalItems) index = totalItems - 1;
        
        currentIndex = index;
        const item = items[index];
        slider.scrollTo({
            left: item.offsetLeft - slider.offsetLeft,
            behavior: 'smooth'
        });
        
        updateProgress();
    }
    
    // Кнопки навигации
    nextBtn.addEventListener('click', () => {
        scrollToItem(currentIndex + 1);
    });
    
    prevBtn.addEventListener('click', () => {
        scrollToItem(currentIndex - 1);
    });
    
    // Обработка скролла
    slider.addEventListener('scroll', () => {
        const scrollPos = slider.scrollLeft;
        const containerWidth = slider.offsetWidth;
        
        items.forEach((item, index) => {
            const itemLeft = item.offsetLeft - slider.offsetLeft;
            const itemWidth = item.offsetWidth;
            
            if (scrollPos >= itemLeft - containerWidth / 2 && 
                scrollPos < itemLeft + itemWidth - containerWidth / 2) {
                currentIndex = index;
                updateProgress();
            }
        });
    });
    
    // Инициализация
    updateProgress();
});

window.addEventListener('DOMContentLoaded', initSlider);
window.addEventListener('resize', initSlider);