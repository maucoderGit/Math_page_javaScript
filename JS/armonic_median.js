const LIST = [9,4,6,8,8,12];

// function fraction_calculetor(list){
//     let value = 0;

//     for(i of list){
//         value += 1/i;
//     }
//     console.log(value)
// }

function armonic_median_calculator(list){
    list.sort((previus_element, new_element) => previus_element - new_element)
    const list_elements = list.length;

    let sum_all_values = list.reduce((element_a,element_b) => {
            element_a + 1 / element_b
        })

    const armonic_median = list_elements / sum_all_values
    console.log(armonic_median)
}

//     const armonic_median = list_elements / value
// }

// fraction_calculetor(LIST)
armonic_median_calculator(LIST)