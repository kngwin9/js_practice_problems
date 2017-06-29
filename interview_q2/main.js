// # Reverse A String

//  Reversing one string
const string = "networking is the best thing to do";
let output = "";

const reverse = (str_input) => {
    let temp_array = [];
    let results_array = [];
    let str_letter = str_input.split('');
    for (let j = 0; j < str_letter.length; j++) {
        temp_array.push(str_letter[j]);
    }
    for (let i = 1; i <= temp_array.length; i++) {
        results_array.push(temp_array[temp_array.length - i]);
    }
    output = results_array.join("");

    console.log(str_letter);
    console.log("Temp Array: " + temp_array);
    console.log("Results Array: " + results_array);
};

reverse(string);
console.log(output);