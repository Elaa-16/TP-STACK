//syntaxe JavaScript de base
//ex1
let age = 25;              
let personName = "Alice";        
let isStudent = true; 
console.log("L'âge est :", age);
console.log("Le nom est :", personName);
console.log("Est-ce un(e) étudiant(e) ? :", isStudent);
//ex2
let x = 5;
let y = 10;


console.log("Addition (x + y) =", x + y);
console.log("Soustraction (x - y) =", x - y);
console.log("Multiplication (x * y) =", x * y);
console.log("Division (x / y) =", x / y);


console.log("x == y :", x == y);     
console.log("x === y :", x === y);
console.log("x > y :", x > y);
console.log("x < y :", x < y);
console.log("x >= y :", x >= y);
console.log("x <= y :", x <= y);

//ex3
let Age = 20;

if (Age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}


for (let i = 1; i <= 10; i++) {
  console.log(i);
}


let fruits = ["pomme", "banane", "orange"];
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

//ex4

function addition(a, b) {
  return a + b;
}

let resultatAddition = addition(5, 10);
console.log("Résultat de addition :", resultatAddition);

let multiply = (a, b) => a * b;

let resultatMultiplication = multiply(4, 3);
console.log("Résultat de la multiplication :", resultatMultiplication);