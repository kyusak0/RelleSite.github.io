import { products } from './database.js';


let fill = (place, datalist, length = datalist.length) => {
    for (let i = 0; i < length; i++) {
        let card = document.createElement("li");
        card.classList.add("card");

        let cardImage = document.createElement("img");
        cardImage.src = datalist[i].image;
        cardImage.classList.add("card-img");

        let cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = datalist[i].title;

        let cardType = document.createElement("p");
        cardType.classList.add("card-text");
        cardType.textContent = datalist[i].type;
        let cardBtnsContainer = document.createElement("div");
        
            cardBtnsContainer.classList.add("card-btns");

            let openCardBtn = document.createElement("button");
            openCardBtn.classList.add("card-open-view");
            openCardBtn.textContent = "Открыть для просмотра";
            openCardBtn.innerHTML += `<svg width="20"
    height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.6596 10.3207C16.7438 10.1169 16.7438 9.88804 16.6596 9.68426C16.6189 9.58323 16.5589 9.49114 16.4828 9.41321L10.5902 3.52065C10.434 3.36437 10.222 3.27657 10.001 3.27657C9.77996 3.27657 9.568 3.36437 9.41172 3.52065C9.25544 3.67693 9.16764 3.88889 9.16764 4.10991C9.16764 4.33092 9.25544 4.54288 9.41172 4.69916L13.8842 9.17161L4.10842 9.16572C3.99841 9.16527 3.8894 9.1866 3.78768 9.22849C3.68596 9.27038 3.59354 9.332 3.51575 9.40979C3.43796 9.48758 3.37634 9.58 3.33445 9.68172C3.29256 9.78344 3.27123 9.89245 3.27168 10.0025C3.27123 10.1125 3.29256 10.2215 3.33445 10.3232C3.37634 10.4249 3.43796 10.5173 3.51575 10.5951C3.59354 10.6729 3.68596 10.7345 3.78768 10.7764C3.8894 10.8183 3.99841 10.8397 4.10842 10.8392L13.8842 10.8333L9.41172 15.3058C9.25544 15.462 9.16764 15.674 9.16764 15.895C9.16764 16.116 9.25544 16.328 9.41172 16.4843C9.568 16.6406 9.77996 16.7284 10.001 16.7284C10.222 16.7284 10.434 16.6406 10.5902 16.4843L16.4828 10.5917C16.5589 10.5138 16.6189 10.4217 16.6596 10.3207Z"
    fill="#ffffff" fill-opacity="0.8" />
    </svg>`

            let sentEmailBtn = document.createElement("button");
            sentEmailBtn.classList.add("card-open-email")
            sentEmailBtn.textContent = "Получить каталог на E-mail";

            cardBtnsContainer.append(openCardBtn, sentEmailBtn);
        


        card.append(cardImage, cardTitle, cardType, cardBtnsContainer)

        place.append(card);
    }
}

let catalog = document.querySelector(".full-catalog .cards");
let mainPageCatalog = document.querySelector(".main-page-catalog .cards");

if (catalog) {
    catalog.addEventListener("onload", fill(catalog, products));
}
else if (mainPageCatalog) {
    mainPageCatalog.addEventListener("onload", fill(mainPageCatalog, products, 4));
    
}



