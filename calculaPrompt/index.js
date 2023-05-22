// var addition(a,b) {
//     return a + b;
// }

// var soustraction(a,b) {
//     return a - b;
// }

// var multiplication(a,b) {
//     return a * b;
// }

// var division(a,b) {
//     return a / b;
// }

// Demande à l'utilisateur d'entrer le premier nombre
var nombre1 = parseFloat(prompt("Entrez le premier nombre :"));

// Demande à l'utilisateur d'entrer le deuxième nombre
var nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

// Demande à l'utilisateur d'entrer l'opération à effectuer
var operation = prompt("Entrez l'opération à effectuer (+, -, *, /) :");

var resultat;

// Vérifie l'opération sélectionnée et effectue le calcul approprié
switch (operation) {
  case "+":
    resultat = nombre1 + nombre2;
    break;
  case "-":
    resultat = nombre1 - nombre2;
    break;
  case "*":
    resultat = nombre1 * nombre2;
    break;
  case "/":
    resultat = nombre1 / nombre2;
    break;
  default:
    resultat = "";
}

// Affiche le résultat
alert("Le résultat de l'opération est : " + resultat);
