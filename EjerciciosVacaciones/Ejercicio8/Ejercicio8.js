'use strict'
let num1 = +prompt("Introduce un numero")
let num2 = +prompt("Introduce un numero")
let num3 = +prompt("Introduce un numero")


if (num1 > num2 && num1 > num3){
    console.log("el numero mayor es "+num1)
}
else if (num2 > num1 && num2 > num3){
    console.log("el numero mayor es "+num2)
}
else if(num3 > num1 && num3 > num2)
{
    console.log("el numero mayor es "+num3)
}
else{
    console.log("Son iguales ")
}
if (num1 < num2 && num1 < num3){
    console.log("el numero menor es "+num1)
}
else if (num2 < num1 && num2 < num3){
    console.log("el numero menor es "+num2)
}
else if(num3 < num1 && num3 < num2)
{
    console.log("el numero menor es "+num3)
}
else{
    console.log("Son iguales")
}