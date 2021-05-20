'use strict'
let cantidad = +prompt("Dime una cantidad")
let precio = +prompt("Dime un precio")

if (cantidad >= 0 && cantidad <= 10)
{
    console.log(precio);
}
else if(cantidad >= 11 && cantidad <= 30)
{
    let total5 = precio * 0.95
    console.log(`el precio tiene un descuento del 5% y el precio es de ${total5}€`)
}
else if(cantidad >=31 && cantidad <= 50)
{
    let total10 = precio * 0.90
    console.log(`el precio tiene un descuento del 5% y el precio es de ${total10}€`)
}
else if (cantidad > 50)
{
    let total15 = precio * 0.85
    console.log(`el precio tiene un descuento del 5% y el precio es de ${total15}€`)
}
else
{
    console.log("Ha ocurrido un error")
}