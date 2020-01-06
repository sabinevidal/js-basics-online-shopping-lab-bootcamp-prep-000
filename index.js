var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = { itemName: item, itemPrice: Math.floor(Math.random() * 101) };
 cart.push(newItem);
 return `${item} has been added to your cart.`;
 console.log(cart);
}

function viewCart() {
  // write your code here
  var itemsAndPrices = [];
  //iterating over cart
  for (var i=0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0];
    itemsAndPrices.push(key + " at $" + cart[i][key]);
  }
  
  var beginSentence = "In your cart, you have";
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (itemsAndPrices.length === 1) {
    return `${beginSentence} ${itemsAndPrices}.`;
  
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
