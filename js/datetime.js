let now = new Date();

// Get Methods
result = now;
result = now.getFullYear();
result = now.getMonth();
result = now.getDate();


// Set Methods
// now.setFullYear(2035);
now.setMonth(4);
now.setDate(15);

result = now;

let dob = new Date(1999, 1, 23, 8, 35);

result = now.getFullYear() - dob.getFullYear();
result = now - dob;

let miliseconds = now - dob;
let seconds = miliseconds / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;


result = days;

console.log(result);
console.log(typeof result);