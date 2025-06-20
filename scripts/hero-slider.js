const images = [
  'images/hero/slide1.png',
  'images/hero/slide2.png',
  'images/hero/slide3.png',
  'images/hero/slide4.png',
  'images/hero/slide5.png',
  'images/hero/slide6.png'
];

let index = 0;
const slider = document.querySelector('.hero-slider');

function updateSlider() {
  slider.style.backgroundImage = `url('${images[index]}')`;
}

function nextSlide() {
  index = (index + 1) % images.length;
  updateSlider();
  resetInterval();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  updateSlider();
  resetInterval();
}

// Таймер автоматического переключения
let intervalId = setInterval(nextSlide, 10000);

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 10000);
}

// Кнопки
let heroContinue = document.getElementById('hero-continue');
let heroPrevous = document.getElementById('hero-prevous');

heroContinue.addEventListener('click', nextSlide);
heroPrevous.addEventListener('click', prevSlide);

// Установка первого изображения
updateSlider();
