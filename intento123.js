// let a, b;

// // a = 20;
// // b = 30;

// console.log(a == b); //false
// console.log(a<b); //true
// console.log(a > b); //false

// let pais, edad;
// pais = prompt("¿De qué pais eres?");
// edad = prompt("¿Qué edad tienes?");

// if(pais == "colombia" && edad >= 18) {
//     document.writeln("Eres un ciudadano del país de : ", pais);
// } else{
//     document.writeln("No eres un ciudadano del país de Colombia o no eres mayor de edad :", );
// }

// El operador || (OR) se utiliza para evaluar si al menos una de la scondiciones es verdadera. si alguna de las condiciones es verdadera, el resultado seeá verdadero. por ejemplo:

let 
let valido= false;

while (!valido) {
    
let day,month,year;
day = prompt("Ingrese el Día de su nacimiento (1-31):");
month = prompt("Ingrese el Mes de su nacimiento (1-12):");
year = prompt("Ingrese el Año de su nacimiento (por ejemplo 2023):");

// covertir los valores ingresados a numeros
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);

//validar si el dia, mes y año son validos
if (isNaN(day) ||NaN(month) || isNaN(year)) {
    document.writeln("Ingrese solo numeros")
} else if (month == 1 || mont == 2 || month == 3){
    document.writeln("Pertenece al primer trimestre del año");
} else {
    document.writeln("No pertenece al primer trimestre del año");
}

