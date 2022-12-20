// temperature degrees in kelvin
const kelvin = 293;

// convert kelvin to celsius and store in a variable
let celsius = kelvin - 273

// convert celsius to fahrenheit and store in a variable
let fahrenheit = celsius * (9/5) + 32;

// round fahrenheit down to integer value
fahrenheit = Math.floor(fahrenheit);

// convert celcius to newton and store in a variable
let newton = celsius * (33/10)

// round newton down to integer value
newton = Math.floor(newton);

// print the temperature in fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// print the temperature in newton to the console
console.log(`The temperature is ${newton} degrees Newton.`);

// print the temperature in celsius to the console
console.log(`The temperature is ${celsius} degrees Celsius.`);