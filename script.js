let cart= [];
let total = 0;

const stickerButton = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const miniplushButton = document.querySelector("#plush");
const comicbookButton = document.querySelector("#comic");
const mysteryboxButton = document.querySelector("#mystery");

const shoppingCart = document.getElementById('shopping-cart');
const totalSpan = document.getElementById('total-span');

const UpdateDisplayTotal = () => {
    totalSpan.textContent = total/100;
    
}
const addSticker = () => {
    shoppingCart.innerHTML +=
    total += 50;
    UpdateDisplayTotal();
}
const addKeychain = () => {
    shoppingCart.innerHTML +=
    total += 150;
    UpdateDisplayTotal();
}
const addPlush = () =>{
    shoppingCart.innerHTML +=
    total += 400;
    UpdateDisplayTotal();
}
const addComic = () => {
    shoppingCart.innerHTML +=
    total += 275;
    UpdateDisplayTotal();
}
const addMystery = () => {
    shoppingCart.innerHTML +=
    total += 325;
    UpdateDisplayTotal();
}

stickerButton.addEventListener("click", addSticker);
keychainButton.addEventListener("click", addKeychain);
miniplushButton.addEventListener("click", addPlush);
comicbookButton.addEventListener("click", addComic);
mysteryboxButton.addEventListener("click", addMystery);