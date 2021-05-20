'use strict'

let menores = 0
let adultos = 0
let jubilados = 0
let edad = +prompt("Di una edad")

while(edad != 0 ){
 edad = +prompt("Di mas edades")
if (edad >= 0 && edad <= 17)
{
    menores++
}
else if (edad >= 18 && edad < 65)
{   
    adultos++
}
else if(edad >=65 && edad >= 150)
{
    jubilados ++
}
else if(edad < 0 && edad > 150 )
{
    alert("Has introducido mal tu edad ")
}
}