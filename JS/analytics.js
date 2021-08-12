function calcule_aritmetic_average(list){
    const sum_list = list.reduce(
        (value_acumulated = 0, new_lement) => {
            return value_acumulated + new_lement    
        }
    ) 

    const average_list = sum_list / list.length
    return average_list
}

const salaries = COLOMBIA.map(
    function(citizen){
        return citizen.salary;
    }
);

const salaries_sorted = salaries.sort(
    function (salary_a, salary_b) {
        return salary_a - salary_b;
    }
);

function is_even(number){
    return (number % 2 === 0);
}

function median_salaries(list){
    const midle = parseInt(list.length / 2)
    
    if (is_even(list.length)) {
        const midle_citizen1 = list[midle - 1];
        const midle_citizen2 = list[midle];

        const median = calcule_aritmetic_average([midle_citizen1, midle_citizen2])
        return median
    } else {
        const midle_citizen = list[midle];
        return midle_citizen
    }
}

const median_general = median_salaries(salaries_sorted)