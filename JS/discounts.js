function price_and_discounts_calculator(price, porcent){
    const discount = 100 - porcent;
    const formule = price * discount / 100;
//     console.log(`Your product value is ${price} and with discount of ${porcent},
//  Your new price is ${formule} `)

    return formule
}

function on_click_buttom_price_discount(){
    const input_price = document.getElementById("input_price");
    const price_value = input_price.value;

    const input_discount = document.getElementById("input_discount");
    const discount_value = input_discount.value;

    const price_with_discount = price_and_discounts_calculator(price_value, discount_value);
    
    const result = document.getElementById("price_with_discount_result");
    result.innerText = "Price with discount is $" + price_with_discount;
}


// console.log(`Your product value is ${price} and with discount of ${porcent},
//  Your new price is ${price_and_discounts_calculator} `)
