var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item)
{
 

 var newObject = {itemName: item,itemPrice: Math.floor(Math.random() * (100 - 1 + 1)) + 1}
 cart.push(newObject);
 return `${item} has been added to your cart.`;
}


function viewCart() 
{
  var cartLength = cart.length;
  if (cartLength > 0)
  {
    if (cartLength === 1)
        { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
        }
    else if (cartLength === 2)
        { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
        }
    else if (cartLength > 2)
        {
          var index = 0;
          var tempString ;
          var tempArr = [`In your cart, you have`]
          while(index < cartLength-1)
          {
            tempString = `${cart[index].itemName} at $${cart[index].itemPrice}`
            tempArr.push(tempString)
            index = index + 1
          }
          tempArr.push(`and`)
          tempArr.push(`${cart[cartLength-1].itemName} at $${cart[cartLength-1].itemPrice}`)
          return `${(tempArr.slice(0,1)).join(' ')} ${(tempArr.slice(1, 4)).join(', ')} ${(tempArr.slice(4)).join(' ')}.`
        }
  }
      
  else{return `Your shopping cart is empty.` } 
 
}


function viewCart() {
  // write your code here
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
