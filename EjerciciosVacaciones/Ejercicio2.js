
numero = prompt("Introduce un numero: ");
MostrarTemperatura(numero)
function MostrarTemperatura(Kelvin,Fh )
{
	
			Fh = Number((numero * 9 / 5) + 32)
			Kelvin = Number(numero + 273.15)
			console.log ("Temperatura en Fh " + Fh)
			console.log ("Temperatura en Kelvin " + Kelvin)
	
}