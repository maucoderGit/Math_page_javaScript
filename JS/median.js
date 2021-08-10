const LIST = [100, 200, 300, 500, 40000000];

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
    
} 
else 
{  
    median = LIST[midle_list];
}