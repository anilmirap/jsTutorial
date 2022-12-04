let students = ["Cinar", "Yigit", "Ada", "Anil", "Cansu"];

result = students.toString();
result = students.join(", ");

// eleman silme
result = students.pop();
result = students.shift();

// eleman ekleme
// result = students.push("cansu");
// result = students.unshift("sena");

let brands1 = ["mercedes", "volkswagen", "renault",];
let brands2 = ["opel", "audi"];
let brands3 = ["honda"];

// result = brands1.concat(brands2);

result = brands1.splice(0, 0, markalar2);


console.log(result);
console.log(brands1);