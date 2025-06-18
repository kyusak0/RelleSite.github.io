let nameField = document.querySelector("input[type=text]")
let tel = document.querySelector("input[type=tel]")
let sentBtn = document.querySelector("#sent")

let telMask = new Inputmask("+7(999) 999-99-99")
telMask.mask(tel)
