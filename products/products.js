
let openShopping = document.querySelector('#shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let Close =document.querySelector("#close");
let CardMain =document.querySelector(".card-e")
let Tables = document.querySelector(".Tables")

let products = [
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },
    {
        id: 1,
        name: 'FURNITURE 1',
        image: 'pexels-martin-péchy-1866149.jpg',
        price: 5600
    },

]


let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}" class="img-new">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button  class="item-button" onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div class="name-ou">${value.name}</div>
                <div class ="price-ou">${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
} 

 openShopping.addEventListener("click", ()=>{
    CardMain.style.left="0%";
    list.style.width="50%";
  //  console.log("clicked ")


 })
// closing the card-e 
Close.addEventListener("click", ()=>{
    CardMain.style.left='-100%';
    list.style.width="90%"
    //console.log("clicked 1")
});












//tables

// let productTables = [
//     {
//         id: 1,
//         name: 'FURNITURE 1',
//         image: 'pexels-jonathan-borba-3144581.jpg',
//         price: 2600
//     },]

// let listTables  = [];
// function initApp(){
//     productTables.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}" class="img-new">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button  class="item-button" onclick="addToCard(${key})">Add To Cart</button>`;
//         Tables.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listTables[key] == null){
//         // copy product form list to list card
//         listTables[key] = JSON.parse(JSON.stringify(productTables[key]));
//         listTables[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listTables.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div class="name-ou">${value.name}</div>
//                 <div class ="price-ou">${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listTables[key];
//     }else{
//         listTables[key].quantity = quantity;
//         listTables[key].price = quantity * productTables[key].price;
//     }
//     reloadCard();
// } 