import { calcule_aritmetic_average } from './average';

const LIST = [0 ,100, 200, 300, 500, 40000000];

const midle_list = parseInt(LIST.length / 2);

function is_list_even(number){
    if (number % 2 === 0){
        return true;
    } 
    else {
        return false;
    }
}

let median;

if (is_list_even(LIST.length)){
    const element1 = LIST[midle_list];
    const element2 = LIST[midle_list + 1];
    console.log(`elements are: ${element1} and ${element2}`)

    calcule_aritmetic_average([element1, element2])
} 
else 
{  
    median = LIST[midle_list];
}