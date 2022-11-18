/*
- function: currencyFormat

  - ask phone price 
    - add price to total
    - ask accessory price
      - ask if another accessory
        - add price to total
    - ask if there is another phone

    - function: calculate tax
    - add tax

    - check if total is less than bank balance
*/


const prompt = require('prompt-sync')({sigint: true});

TAX_RATE = .03;
PHONE_PRICE = 100;
ACCESSORY_PRICE = 50;
SPENDING_THRESHOLD = 100;

purchaseAmount = 0;
bankBalance = 500;


let anotherPhone = prompt('Would you like to buy a phone (' + currency(PHONE_PRICE) + '): ');
while (anotherPhone == 'yes') {
  purchaseAmount += PHONE_PRICE;
  
  let moreAccessories = prompt('would you like to buy an accessory (' + currency(ACCESSORY_PRICE) + '): ');
  while (moreAccessories == 'yes') {

    purchaseAmount += ACCESSORY_PRICE;
    moreAccessories = prompt("would you like to buy an another accessory: ");
  }

  anotherPhone = prompt('Another phone?: ');
} 

const tax = getTax(purchaseAmount)
const total = purchaseAmount + tax;
const affordable = (total <= bankBalance) ? true : false;

console.log()
console.log('total with tax: ' + currency(total));
affordable ? console.log('You can afford this purchase.') : console.log('You cannot afford this purchase.')

function currency(amount) {
  return '$' + amount.toFixed(2);
}

function getTax(amount) {
  return amount * TAX_RATE;
}

