let topic = document.querySelector('.topic');

let lastPosY;

window.addEventListener('scroll', () => {
    let posY = window.scrollY;

    if (posY > lastPosY) {
        topic.classList.add('scrollDown');
        topic.classList.remove('scrollUp');
    }
    else {
        topic.classList.remove('scrollDown');
        topic.classList.add('scrollUp');
    }

    lastPosY = posY;
});

let hideMenuBtn = document.querySelector(".hide-menu");
let menu = document.querySelector(".menu");
let menuAdaptive = document.querySelector(".menu-adaptive");
let lastDisplayMenu = menu.style.display;
let lastDisplayMenuAdaptive = menuAdaptive.style.display;
hideMenuBtn.onclick = () => {
    console.log(hideMenuBtn)
    if (hideMenuBtn.textContent == "Скрыть") {
        hideMenuBtn.textContent = "Показать";

        menu.style.display = "none"
        menuAdaptive.style.display = "none"
    }
    else if (hideMenuBtn.textContent == "Показать") {
        hideMenuBtn.textContent = "Скрыть";

        menu.style.display = lastDisplayMenu
        menuAdaptive.style.display = lastDisplayMenuAdaptive

    }
}

window.addEventListener('scroll', function() {
    if (window.scrollY < 1000) { /* Пороговое значение прокрутки */
      topic.classList.add('topic-light');
    } else {
      topic.classList.remove('topic-light');
    }
  });