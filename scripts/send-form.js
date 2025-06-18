document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // предотвращаем отправку
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});
