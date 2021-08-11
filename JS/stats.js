function reset_list(){
    return list = []
}

function send_data(){
    const input1 = document.getElementById("array_data1");
    const input2 = document.getElementById("array_data2");
    const input3 = document.getElementById("array_data3");
    const input4 = document.getElementById("array_data4");

    const values = {
    value1 : input1.value,
    value2 : input2.value,
    value3 : input3.value,
    value4 : input4.value,
    }

    const list = Object.values(values)
    console.log(list)
}

let list = send_data();

// merge median.js 

function calcule_aritmetic_average(list){
    const sum_list = list.reduce(
        (value_acumulated = 0, new_lement) => {
            return value_acumulated + new_lement    
        }
    ) 

    const average_list = sum_list / list.length
    return average_list
}

function median_calcule(list){
    list = list.sort((a,b) => a - b)
    const midle_list = parseInt(list.length / 2);

    function is_list_even(number){
        if (number % 2 === 0){
            return true;
        } 
        else {
            return false;
        }
    }

    let median;

    if (is_list_even(list.length)){
        const element1 = list[midle_list - 1];
        const element2 = list[midle_list];

        median = calcule_aritmetic_average([element1, element2])
    } else {  
        median = list[midle_list];
    }

    return median
}

// Armonic median is used to calcule velocities, is used in some areas. 

function sum_fractions(numerator_a,denominator_a = 1,numerator_b = 1,denominator_b = 1){
    let result = ((numerator_a * denominator_b) + (denominator_a * numerator_b) 
                / (denominator_a * denominator_b))
    console.log(result)
}

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


