let viewBtns = document.querySelectorAll(".card-open-view");
let emailBtns = document.querySelectorAll(".card-open-email");

let viewCard = (card) => {
    console.log(card);
    let cardImage = card.querySelector("img").src;
    let bigImage = document.createElement("img");
    bigImage.src = cardImage;
    bigImage.classList.add("big-image-card");

    let bigImageContainer = document.createElement("div");
    bigImageContainer.classList.add("big-image-card-back");

    bigImageContainer.append(bigImage);

    document.body.append(bigImageContainer);

    bigImageContainer.onclick = () =>{
        bigImageContainer.remove();
    }
};
let emailCard = (cards) => {
    let emailTo = prompt("email adress");
    let emailCC = prompt("email cc(optional)");
    let emailSub = "Catalog";
    let emailBody = cards.querySelector("h3");
    window.location.href = "mailto:" + emailTo + '?cc=' + emailCC + '&subject=' + emailSub + '&body=' + emailBody;
}

viewBtns.forEach(viewBtn => {
    viewBtn.onclick = function () {
        viewCard(viewBtn.parentElement.parentElement);
    };
});
emailBtns.forEach(emailBtn => {
    emailBtn.onclick = function () {
        emailCard(emailBtn.parentElement.parentElement.parentElement);
    };
});