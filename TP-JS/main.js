//Manipulation du DOM
//ex1

let div = document.querySelector("#maDiv");
let button = document.querySelector("#monBouton");


button.addEventListener("click", () => {
  div.textContent = "Nouveau texte"; 
});

//ex2
let maDiv = document.querySelector("#maDiv");

let nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "nouveau paragraphe.";
maDiv.appendChild(nouveauParagraphe); 


let nouveauBouton = document.createElement("button");
nouveauBouton.textContent = "Nouveau bouton";
document.body.appendChild(nouveauBouton);


nouveauBouton.addEventListener("click", () => {
  console.log("bouton cliqué ");
});

//ex3

let bouton = document.querySelector("#monBouton");

bouton.addEventListener("click", () => {
  maDiv.style.backgroundColor = "lightpink";
  maDiv.style.color = "black";
  maDiv.style.fontSize = "20px";
  maDiv.style.borderRadius = "10px";
});

//Gestion des événements:
bouton.addEventListener("click", function() {
document.querySelector("#maDiv").innerText = "Le texte a changé !";
});



