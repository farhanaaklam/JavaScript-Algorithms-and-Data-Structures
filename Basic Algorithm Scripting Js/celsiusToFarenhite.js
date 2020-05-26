/* Basic Algorithm Scripting: Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32. */

function convertToF(celsius) {
    let farenheit;
    farenheit = celsius * 9 / 5 + 32;
    console.log(farenheit);
    return farenheit;
};

convertToF(30);