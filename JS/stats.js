function reset_list(){
    const list = []
    
    const array = document.getElementById("array_input");
    array.innerText = "Your array is empty";

    return list
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

    const array = document.getElementById("array_input");
    array.innerText = "Your array is " + list;

    return list
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

    const array = document.getElementById("answer_average");
    array.innerText = "Your array is " + average_list;

    console.log(average_list)
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

    const array = document.getElementById("answer_armonic");
    array.innerText = "Your array is " + median;

    return armonic_median
}

// mode calculer

function mode_calcule(list){
    let list_counter = {};

    list.map(
        function (element){
            if (list_counter[element]){
                list_counter[element] += 1;
            } 
            else
            {
            list_counter[element] = 1;
            }
        }
    );


    const list_array = Object.entries(list_counter).sort(
        function (acumulated_value, new_value){
            return acumulated_value[1] - new_value[1]
        }
    );

    const mode = list_array[list_array.length -1]

    const array = document.getElementById("answer_mode");
    array.innerText = "Your array is " + mode;

    return mode;
}

// Average calculer

function calcule_aritmetic_average(list){
    const sum_list = list.reduce(
        (value_acumulated = 0, new_lement) => {
            return value_acumulated + new_lement    
        }
    ) 

    const average_list = sum_list / list.length
    
    const array = document.getElementById("answer_average");
    array.innerText = "Your array is " + average_list;
    return average_list
}
