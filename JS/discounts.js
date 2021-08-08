function price_and_discounts_calculator(price, porcent){
    const discount = 100 - porcent
    const formule = price * discount / 100;
    console.log(`Your product value is ${price} and with discount of ${porcent},
 Your new price is ${formule} `)
}

// console.log(`Your product value is ${price} and with discount of ${porcent},
//  Your new price is ${price_and_discounts_calculator} `)
