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

funtion