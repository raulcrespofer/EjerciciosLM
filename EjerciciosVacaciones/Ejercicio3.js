
numero1 = +(prompt("Introduce un numero: "));
numero2 = +(prompt("Introduce un numero: "));
MostrarDivision(numero1,numero2)
function MostrarDivision(numero1,numero2)
{
	if (numero1 == 0 ){
		console.log("el primer numero es 0")
	}
	else {
		console.log(numero1 / numero2)
	}	
	
}