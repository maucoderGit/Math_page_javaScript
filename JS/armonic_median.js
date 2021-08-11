const LIST = [9,4,6,8,8,12];

function armonic_median_calculator(list){
    list.sort((previus_element, new_element) => previus_element - new_element)
    const list_elements = list.length;

    console.log(list)
}

armonic_median_calculator(LIST)