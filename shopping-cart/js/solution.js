/**
 * 1. Hämta alla knappar och loopa igenom och sätt en eventlistener på varje knapp
 * 2. Deklarera en variabel som innehåller en array som blir vår varukorg
 * 3. När jag klickar på "Add to cart" så lägg till vald produkt i varukorg
 * 4. När produkt lagts till i varukorg uppdatera siffran för antal i varukorg
 * 5. Sätt en eventlister på knappen "Cart"
 * 6. När jag klickar på cart loopa ut alla produkter i varukorgen och visa
 */

let products = document.getElementsByTagName('button');
let shoppingCart = [];

console.log(products);

function updateCart() {
    document.querySelector('#productsInCart').innerHTML = shoppingCart.length;
}

function listProductsInCart() {
    let cartProducts = '';

    for(let i = 0; i < shoppingCart.length; i++) {
        cartProducts = cartProducts + '<li><span class="product-title">Titel: </span>' + shoppingCart[i] + '</li>';
    }

    document.querySelector('#products').innerHTML = cartProducts;
}

document.querySelector('#open-cart').addEventListener('click', () => {
    document.querySelector('#cart').classList.toggle('hide');
    listProductsInCart();
});

for(let i = 0; i < products.length; i++) {
    console.log(products[i]);
    products[i].addEventListener('click', (event) => {
        //console.log(event.target.parentNode.getAttribute('data-product'));
        // event here is the HTML element that was clicked on
        let product = event.target.parentNode.getAttribute('data-product');
        shoppingCart.push(product);
        updateCart();
        listProductsInCart();
        //console.log(shoppingCart);
    });
}



// let card = {
//     color: 'Rött',
//     type: 'Spader',
//     number: 9
// }
// let cards = [card, card, card, card, card];

// for(let card of cards) {
//     console.log(card);
// }

// console.log('-----');

// for(let i = 0; i < cards.length; i++) {
//     console.log(cards[i]);
// }