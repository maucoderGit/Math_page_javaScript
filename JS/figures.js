// Create functions of calculator

const square_perimeter = (sides) => sides * 4;
const triangle_perimeter = (side_base, side_left, side_right) => side_base + side_left + side_right;
const circle_perimeter = (circle_radium) => PI * circle_radium * 2 

// height isosceles triangle

const height_triangle_equilater = (sides) => Math.sqrt(sides**2 - (sides / 2)**2)
const height_triangle_isosceles = (long_side, short_side) => Math.sqrt(long_side**2 - (short_side / 2)**2);

const square_area = (side) => side**2
const triangle_area = (side_base, triangle_height) => (side_base * triangle_height) / 2 
const circle_area = (circle_radium) =>(circle_radium ** 2) * PI

// let squeare_side = 2

// let triangle_side0 = 8;
// let triangle_side_left = 6;
// let triangle_base = 6;
// let triangle_height = 5.5;

// let circle_radium = 4;

const PI = Math.PI;

// interactions with HTML 

function perimeter_square_calculator(){
    const input = document.getElementById("input_square_calculator");
    const value = input.value;

    alert(square_perimeter(value))
}

function area_square_calculator (){
    const input = document.getElementById("input_square_calculator");
    const value = input.value;

    alert(square_area(value))
}

// Triangles

function perimeter_triangle_calculator(){
    const input1 = document.getElementById("input_triangle_calculator_side1");
    const input2 = document.getElementById("input_triangle_calculator_side2");
    const foot = document.getElementById("input_triangle_calculator_foot");

    const value1 = parseInt(input1.value) ;
    const value2 = parseInt(input2.value);
    const value_foot = parseInt(foot.value);

    alert(triangle_perimeter(value_foot, value1, value2))
}

function area_triangle_calculator(){
    const foot = document.getElementById("input_triangle_calculator_foot");
    const height = document.getElementById("input_triangle_calculator_height")

    const value_foot = parseInt(foot.value);
    const value_height = parseInt(height.value); 

    alert(triangle_area(value_foot, value_height))
}

function circunference_circle_calculator(){
    const input = document.getElementById("input_circle_radium");
    const value = input.value;

    alert(circle_perimeter(value))
}

function area_circle_calculator(){
    const input = document.getElementById("input_circle_radium");
    const value = input.value;

    alert(circle_area(value))
}

function heigth_triangle_calculator(){
    const input0 = document.getElementById("input_triangle_calculator_foot")
    const input1 = document.getElementById("input_triangle_calculator_side1")
    const input2 = document.getElementById("input_triangle_calculator_side2")

    const values = [input0.value, input1.value, input2.value]

    const hightles_value = Math.max.apply(null, values) 
    const lowes_value = Math.min.apply(null, values) 

    if (values[0] == values[1] || values[1] == values[2] || values[2] == values[0]){
        alert("Triangle height is = " + height_triangle_equilater(values[0]))
    }
    else{
        alert("Triangle height is = " + height_triangle_isosceles(hightles_value, lowes_value))
    }
}
