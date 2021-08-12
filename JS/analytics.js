//Helpers

function is_even(number){
    return (number % 2 === 0);
}

function calcule_aritmetic_average(list){
    const sum_list = list.reduce(
        (value_acumulated = 0, new_lement) => {
            return value_acumulated + new_lement    
        }
    ) 

    const average_list = sum_list / list.length
    return average_list
}

// Median Calculator


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


//Median general

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

const median_general = median_salaries(salaries_sorted)

// top 10% median.
const splice_start = (salaries_sorted.length * 90) / 100;
const splice_count = salaries_sorted.length - splice_start;

const salaries_top10 = salaries_sorted.splice(
    splice_start, splice_count
)

const median_top10 = median_salaries(salaries_top10)

console.log({
    median_general,
    median_top10
})