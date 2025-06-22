import { products, certificates, portfolio } from './database.js';

let editPanel = document.querySelector(".editor");


let cleanCatalog = () => {
    while (editPanel.firstChild) {
        editPanel.removeChild(editPanel.firstChild);
    }
}

let editNavs = document.querySelectorAll(".edit-nav");
editNavs.forEach(editNav => {
    editNav.onclick = function () {
        editNav.onclick = adminEdit(editNav.textContent);
    }
});

let adminFill = (type) => {

    let element = document.createElement("li");
    element.classList.add("element");

    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    let cardImageContainer = document.createElement("div");
    cardImageContainer.classList.add("card-img");

    let cardImage = document.createElement("img");
    cardImage.src = type.image;

    cardImageContainer.append(cardImage);

    let cardTextContainer = document.createElement("div");
    cardTextContainer.classList.add("text");

    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = type.title;

    let cardType = document.createElement("p");
    cardType.classList.add("card-type");
    cardType.textContent = type.type;

    cardTextContainer.append(cardTitle, cardType);
    cardContainer.append(cardImageContainer, cardTextContainer)

    let cardEvent = document.createElement("div");
    cardEvent.classList.add("event");

    let editBtn = document.createElement("span");
    editBtn.classList.add("edit");
    editBtn.textContent = "изменить";
    editBtn.onclick = function () {
        editCard(editBtn.parentElement.parentElement)
    }

    let deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "удалить";
    deleteBtn.onclick = function () {
        deleteCard(deleteBtn.parentElement.parentElement);
    }

    cardEvent.append(editBtn, deleteBtn);

    element.append(cardContainer, cardEvent);
    editPanel.append(element)
};
products.forEach(product => {
    adminFill(product);
});
let newCardBtn = document.createElement("li");
newCardBtn.classList.add("new");
newCardBtn.textContent = "+";
editPanel.append(newCardBtn);


let editBtns = document.querySelectorAll(".edit");
let deleteBtns = document.querySelectorAll(".delete");


let addCard = function () {
    newCardBtn.onclick = null;
    let cards = newCardBtn.parentElement;

    newCardBtn.textContent = "";
    newCardBtn.classList.remove("new");
    newCardBtn.classList.add("element");
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    let cardImageContainer = document.createElement("div");
    cardImageContainer.classList.add("card-img");

    let cardImage = document.createElement("img");

    cardImageContainer.append(cardImage);

    let cardTextContainer = document.createElement("div");
    cardTextContainer.classList.add("text");

    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Title";

    let cardType = document.createElement("p");
    cardType.classList.add("card-type");
    cardType.textContent = "Type";

    cardTextContainer.append(cardTitle, cardType);
    cardContainer.append(cardImageContainer, cardTextContainer)

    let cardEvent = document.createElement("div");
    cardEvent.classList.add("event");

    let editBtn = document.createElement("span");
    editBtn.classList.add("edit");
    editBtn.textContent = "изменить";
    editBtn.onclick = function () {
        editCard(editBtn.parentElement.parentElement)
    }

    let deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "удалить";
    deleteBtn.onclick = function () {
        deleteCard(deleteBtn.parentElement.parentElement);
    }

    cardEvent.append(editBtn, deleteBtn);

    newCardBtn.append(cardContainer, cardEvent);
    newCardBtn = document.querySelector(".new");
    let newCard = document.createElement("li");
    newCard.classList.add("new");
    newCard.textContent = "+";
    cards.append(newCard)
    newCardBtn = document.querySelector(".new");
    newCardBtn.onclick = addCard;
}


newCardBtn.onclick = addCard;

let editCard = function (card) {

    console.log(card)

    let cardText = card.querySelector(".card .text");
    let cardImg = card.querySelector(".card .card-img");
    let cardEvent = card.querySelector(".event");
    let cardTitle = cardText.querySelector(".card-title");
    let cardType = cardText.querySelector(".card-type");
    let editBtn = cardEvent.querySelector(".edit");
    let deleteBtn = cardEvent.querySelector(".delete");

    cardImg.style.cursor = "help";
    let newImageBtn = document.createElement("input");
    newImageBtn.classList.add("new-image")
    newImageBtn.setAttribute('type', 'file');
    cardImg.append(newImageBtn);
    let lastUrl = card.querySelector(".card .card-img img").src;

    let cardTitleInput = document.createElement("input");
    cardTitleInput.classList.add("title");
    cardTitleInput.setAttribute('type', 'text');
    cardTitleInput.setAttribute('name', 'card-type');
    cardTitleInput.value = cardTitle.textContent;

    let cardTypeInput = document.createElement("input");
    cardTypeInput.classList.add("type");
    cardTypeInput.setAttribute('type', 'text');
    cardTypeInput.setAttribute('name', 'card-type');
    cardTypeInput.value = cardType.textContent;

    let saveBtn = document.createElement("span");
    saveBtn.classList.add("save");
    saveBtn.textContent = "сохранить";

    let cancelBtn = document.createElement("span");
    cancelBtn.classList.add("cancel");
    cancelBtn.textContent = "отменить";

    cardText.append(cardTitleInput, cardTypeInput);
    cardEvent.append(saveBtn, cancelBtn);

    cardType.style.display = "none";
    cardTitle.style.display = "none";
    editBtn.style.display = "none";
    deleteBtn.style.display = "none";

    cardImg.addEventListener("click", () => {

        let cardImage = card.querySelector("img").src;
        let bigImage = document.createElement("img");
        bigImage.src = cardImage;
        bigImage.classList.add("big-image-card");

        let bigImageContainer = document.createElement("div");
        bigImageContainer.classList.add("big-image-card-back");

        bigImageContainer.append(bigImage);

        document.body.append(bigImageContainer);

        bigImageContainer.onclick = () => {
            bigImageContainer.remove();
        }

        const fileInput = document.querySelector('.new-image');
        const imageElement = card.querySelector(".card .card-img img");

        fileInput.addEventListener('change', function () {
            const file = this.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function (event) {
                    const imageUrl = event.target.result;
                    imageElement.src = imageUrl;
                    imageElement.style.display = 'block'; // Показываем изображение
                };

                reader.readAsDataURL(file);
            }
        });
    })

    saveBtn.addEventListener("click", () => {
        cardType.style.display = "block";
        cardType.textContent = cardTypeInput.value;

        cardTitle.style.display = "block";
        cardTitle.textContent = cardTitleInput.value;

        editBtn.style.display = "block";
        deleteBtn.style.display = "block";

        saveBtn.remove();
        cancelBtn.remove();
        cardTitleInput.remove();
        cardTypeInput.remove();
        newImageBtn.remove();
    });

    cancelBtn.addEventListener("click", () => {

        cardType.style.display = "block";
        cardTitle.style.display = "block";
        editBtn.style.display = "block";
        deleteBtn.style.display = "block";
        card.querySelector(".card .card-img img").src = lastUrl;

        saveBtn.remove();
        cancelBtn.remove();
        cardTitleInput.remove();
        cardTypeInput.remove();
        newImageBtn.remove();
    });
}

editBtns.forEach(editBtn => {
    editBtn.onclick = function () {
        editCard(editBtn.parentElement.parentElement)
    }
});

let deleteCard = function (card) {
    if (confirm(`Вы уверены, что хотите удалить данную карточку: ${card.querySelector("h3").textContent} ?`)) {
        card.remove();
    }
}
deleteBtns.forEach(deleteBtn => {
    deleteBtn.onclick = function () {
        deleteCard(deleteBtn.parentElement.parentElement);
    }
});

let adminEdit = function (title) {
    let titleEditing = document.querySelector(".editing");
    console.log(title)
    titleEditing.textContent = `"${title}"`
    cleanCatalog();
    switch (title) {
        case "Каталоги":
            products.forEach(product => {
                adminFill(product)
            });
            break;
        case "Сертификаты":
            certificates.forEach(certificate => {
                adminFill(certificate)
            }); break;
        case "Портфолио":
            portfolio.forEach(portfolio => {
                adminFill(portfolio)
            });
            break;
        default:
            break;
    }
    let newCardBtn = document.createElement("li");
    newCardBtn.classList.add("new");
    newCardBtn.textContent = "+";
    newCardBtn.onclick = addCard;

    editPanel.append(newCardBtn);
}