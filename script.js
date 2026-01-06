let cart= [];
let total = 0;

const stickerButton = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const miniplushButton = document.querySelector("#plush");
const comicbookButton = document.querySelector("#comic");
const mysteryboxButton = document.querySelector("#mystery");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-Span");

const updateTotal = () => {
    totalSpan.textContent = totalInCent/100;
}
const addSticker = () => {
    shoppingCart.innerHTML +=
    totalInCent += 50;
    updateTotal();
}
const addKeychain = () => {
    shoppingCart.innerHTML +=
    totalInCent += 150;
    updateTotal();
}
const addPlush = () =>{
    shoppingCart.innerHTML +=
    totalInCent += 400;
    updateTotal();
}
