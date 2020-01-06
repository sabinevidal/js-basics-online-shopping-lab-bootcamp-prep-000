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
 newItem = { itemName: item, itemPrice: Math.floor(Math.random() * 101) };
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var itemsAndPrices = [];
  //iterating over cart
  for (var i=0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0];
    
  }
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if ( cart.length === 1) {
    
    return `In your cart, you have ${itemName} at ${itemPrice}.`
    
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
