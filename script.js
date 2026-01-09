let cart= [];
let total = 0;

const products = [
    {id: 1, name: 'sticker', price: 0.50},
    {id: 2, name: 'keychain', price: 1.50},
    {id: 3, name: 'plush', price: 4.00},
    {id: 2, name: 'comic', price: 2.75},
    {id: 2, name: 'mystery', price: 3.25},
]

const stickerButton = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const miniplushButton = document.querySelector("#plush");
const comicbookButton = document.querySelector("#comic");
const mysteryboxButton = document.querySelector("#mystery");

const shoppingCart = document.getElementById('shopping-cart');
const totalSpan = document.getElementById('total-span');

const UpdateTotal = () => {
    totalSpan.textContent = total/100;
    shoppingCart.textContent = stickerButton;
}
const addSticker = () => {
    shoppingCart.innerHTML +=
    total += 50;
    UpdateTotal();
}
const addKeychain = () => {
    shoppingCart.innerHTML +=
    total += 150;
    UpdateTotal();
}
const addPlush = () =>{
    shoppingCart.innerHTML +=
    total += 400;
    UpdateTotal();
}
const addComic = () => {
    shoppingCart.innerHTML +=
    total += 275;
    UpdateTotal();
}
const addMystery = () => {
    shoppingCart.innerHTML +=
    total += 325;
    UpdateTotal();
}

stickerButton.addEventListener("click", addSticker);
keychainButton.addEventListener("click", addKeychain);
miniplushButton.addEventListener("click", addPlush);
comicbookButton.addEventListener("click", addComic);
mysteryboxButton.addEventListener("click", addMystery);