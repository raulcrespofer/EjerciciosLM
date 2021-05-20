'use strict'
let d = prompt("Dia")
let m = prompt("mes")
let y = prompt("año")
let fechaNac = prompt("Fecha")
let fechaActual = new Date();

if (fechaActual - fechaNac >= 65) {
    console.log("jubilado")
}
else {
    console.log("no esta jubilado")
}