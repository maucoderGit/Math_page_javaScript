const LIST = [9,4,6,8,8,12];

function sum_fractions(numerator_a,denominator_a = 1,numerator_b = 1,denominator_b = 1){
    let result = ((numerator_a * denominator_b) + (denominator_a * numerator_b) 
                / (denominator_a * denominator_b))
    console.log(result)
}

// function fraction_calculetor(list){
//     let value = 0;

//     for(i of list){
//         value += 1/i;
//     }
//     console.log(value)
// }

function armonic_median_calculator(list){
    list = list.sort((previus_element, new_element) => previus_element - new_element)
    const list_elements = list.length;
    const reducer = (element_a,element_b) => sum_fractions(1, element_a, 1, element_b)
    console.log(list_elements)
  
    const sum_all_values = list.reduce(reducer)
    console.log(sum_all_values)

    const armonic_median = list_elements / sum_all_values
    return armonic_median
}
