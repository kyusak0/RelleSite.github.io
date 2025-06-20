const images = [
    'images/hero/slide1.png',
    'images/hero/slide2.png',
    'images/hero/slide3.png',
    'images/hero/slide4.png',
    'images/hero/slide5.png',
    'images/hero/slide6.png',
    'images/hero/slide7.png'
  ];
  
  let index = 0;
  const slider = document.querySelector('.hero-slider');
  
  function changeBackground() {
    slider.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }
  
  changeBackground(); // Установка первого изображения
  setInterval(changeBackground, 1000); // Меняем каждые 5 секунд