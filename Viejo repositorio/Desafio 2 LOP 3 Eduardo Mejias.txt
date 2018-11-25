

Algoritmo Desafio2lop3
	Definir Nombre, nombre_mayor_nota, nombre_menor_nota Como Caracter
	Definir acum, Edad, edad_mayor, edad_menor, menores_edad Como Entero
	
	Mostrar "Bienvenido al procesador de edades."
	Mostrar ""
	Mostrar "Aqui podra procesar las edades de 10 personas"
	Mostrar ""
	Mostrar "Presione una tecla para comenzar"
	Esperar Tecla
	Limpiar Pantalla
	acum=1
	acumulador_edades=0
	contador_personas=0
	edad_mayor=0
	edad_menor=100
	menores_edad=0
	
	Mientras acum<11
		Mostrar "Ingrese el nombre del "+ConvertirATexto(acum)+"º persona: "
		Leer Nombre
		Mostrar "Ingrese la edad del "+ConvertirATexto(acum)+"º persona: "
		Leer Edad
		Mostrar "Edad " Edad
		acum=acum+1
		Si Edad>edad_mayor 
			entonces
				edad_mayor=Edad
				nombre_mayor_edad=Nombre
		FinSi
		Si Edad<edad_menor 
			Entonces
				edad_menor=Edad
				nombre_menor_edad=Nombre
		FinSi
		Si Edad<18 
			Entonces
				menores_edad=menores_edad+1
		FinSi
		contador_personas=contador_personas+1
		acumulador_edades=acumulador_edades+Edad
	FinMientras
	
	
	
	Mostrar "La edad promedio de todas las personas es: " acumulador_edades/contador_personas
	Mostrar ""
	Mostrar "El porcentaje de las personas que son menores de edad es: " (menores_edad*100)/contador_personas " %"
	Mostrar ""
	Mostrar "La primera persona procesada con menor edad es: " nombre_menor_edad " y su edad es: " edad_menor
	Mostrar ""
	Mostrar "La primera persona procesada con mayor edad es: " nombre_mayor_edad " y su edad es: " edad_mayor
	Mostrar ""
	Mostrar "Presione una tecla para Finalizar"
	Esperar Tecla
	
FinAlgoritmo
