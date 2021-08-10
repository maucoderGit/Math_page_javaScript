function calcule_aritmetic_average(list){
    const sum_list = list.reduce(
        (value_acumulated = 0, new_lement) => {
            return value_acumulated + new_lement    
        }
    ) 

    const average_list = sum_list / list.length
    return average_list
}

// const LIST = [0 ,100, 200, 300, 500, 40000000];

function median_calcule(list){
    list = list.sort((a,b) => a - b)
    console.log(list)

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
    } 
    else 
    {  
        median = list[midle_list];
    }

    return median
}