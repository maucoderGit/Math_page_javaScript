function calcule_aritmetic_average(list){
    const sum_list = list.reduce(
        (value_acumulated = 0, new_lement) => {
            return value_acumulated + new_lement    
        }
    ) 

    const average_list = sum_list / list.length
    return average_list
}

