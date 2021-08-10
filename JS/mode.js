const list = [1,2,3,4,1,2,4,3,2,1,1,1,3,5,6,89,9,123,312];

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
    console.log(mode)
}