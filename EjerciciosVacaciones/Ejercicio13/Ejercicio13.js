'use strict'
let multiplos = 0


for(let i =0;i<30;i++){
    let numeros = +prompt("dime un numero")
    if ( numeros % 5 == 0){
        multiplos++
        console.log(`${multiplos}`)
    }
}
console.log(`${multiplos} son el total de numeros multiplos de 5 `)
 