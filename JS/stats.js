function reset_list(list){
    return list = []
}

function send_data(){
    let array_input = new Array();

    // This function call every element by class name, with the id I've problems and can't
    // get this values.

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

    const list = array_input.map.call(values, function(data_input){
        array_input.push(data_input.value);
        });
    console.log(array_input)
    return array_input;
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


