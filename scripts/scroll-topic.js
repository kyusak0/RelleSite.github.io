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