const CUPONS = ["LICORESVE12","LABARTOLALIC","RON_Y_LICOR!","BEBE_Y_DISFRUTA"]

function price_and_discounts_calculator(price, porcent, cupons = 0){
    const discount = (100 - porcent) - cupons;
    const formule = price * (discount / 100);
    console.log(`Your product value is ${price} and with discount of ${porcent},
 Your new price is ${formule} `)

    return formule
}
  
function validate_cupon(){
    const result = document.getElementById("cupon_validate");
    const cupon = document.getElementById("input_cupon");
    const cupon_value = cupon.value;

    for (i of CUPONS){
        console.log(i)
        if (i === cupon_value){
            return 15
        }
        result.innerText = "";
    }   
    
    result.innerText = "This cupon is not valid " + cupon_value;
    return 0
}

function on_click_buttom_price_discount(){
    const input_price = document.getElementById("input_price");
    const price_value = input_price.value;

    const input_discount = document.getElementById("input_discount");
    const discount_value = input_discount.value;

    const user_cupon = validate_cupon();
    const price_with_discount = price_and_discounts_calculator(price_value, discount_value, user_cupon);
    
    const result = document.getElementById("price_with_discount_result");
    result.innerText = "Price with discount is $" + price_with_discount;
}


// console.log(`Your product value is ${price} and with discount of ${porcent},
//  Your new price is ${price_and_discounts_calculator} `)
