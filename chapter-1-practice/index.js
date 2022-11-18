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
SPENDING_THRESHOLD = 200;
purchaseAmount = 0;
bankBalance = 500;

while (purchaseAmount + PHONE_PRICE < bankBalance) {
  purchaseAmount += PHONE_PRICE;
  console.log('1 phone bought')
  if (purchaseAmount + ACCESSORY_PRICE < SPENDING_THRESHOLD) {
    purchaseAmount += ACCESSORY_PRICE;
    console.log('1 accessory bought')
  }
} 

const tax = getTax(purchaseAmount)
const total = purchaseAmount + tax;

console.log()
console.log('total with tax: ' + currency(total));

function currency(amount) {
  return '$' + amount.toFixed(2);
}

function getTax(amount) {
  return amount * TAX_RATE;
}

