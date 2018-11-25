Subproceso Leer_Datos(Nomb_Elector Por Referencia,Nacionalidad Por Referencia,Edad Por Referencia,estatus Por Referencia)
	Definir a, b como Entero
	Definir confirm como caracter
	a=0
	b=0
	Mostrar "Ingrese el nombre del Elector" Sin Saltar
	Leer Nomb_Elector

	Mientras a<1 Hacer
		Mostrar "Indique la nacionalidad del Elector."
		Mostrar  "Con una [V] para Venezolano y con una [E] para extranjero: " Sin Saltar
		Leer Nacionalidad
		Nacionalidad=Mayusculas(Subcadena(Nacionalidad,1,1))
		Si Nacionalidad="V" entonces
			Nacionalidad="V"
			a=a+1
			Sino
				Si Nacionalidad="E" Entonces
					Nacionalidad="E"
					a=a+1
					Sino
						Mostrar "ERROR! usted ingreso: " Nacionalidad " Ingrese una letra valida."
						Mostrar "Recuerde una [V] para Venezolano y una [E] para Extranjero"
						Mostrar ""
						Mostrar "Presione una tecla para continuar"
						Esperar Tecla
						Limpiar Pantalla
				FinSi
		FinSi
	FinMientras
	Mostrar "Ingrese la edad del elector: " Sin Saltar
	Leer Edad
	Mientras b<1 hacer
		Mostrar "El elector tiene algun trabajo?"
		Mostrar "Indique con una [S] si tiene trabaja o en caso contrario con una [N]"
		Leer confirm
		confirm=Mayusculas(Subcadena(confirm,1,1))
		Si confirm="S" entonces
			estatus=verdadero
			b=b+1
			Sino
				Si confirm="N" Entonces
					estatus=falso
					b=b+1
					Sino
					Mostrar "ERROR!, usted ingreso: " confirm " Ingrese una letra valida."
					Mostrar "Recuerde una [S] si el elector trabaja, en caso contrario con una {N]"
					Mostrar ""
					Mostrar "Presione una tecla para continuar"
					Esperar Tecla
						
			FinSi
		FinSi
	FinMientras
	
FinSubProceso
Subproceso Calc_Bono(estatus,Sueldo Por Referencia, Bono por Referencia)
	Si estatus=Verdadero Entonces
		Mostrar "Ingrese el monto del sueldo del Elector: " Sin	saltar
		Leer Sueldo
		Bono=Sueldo*0.10
	Sino
		Bono=180
	FinSi
FinSubProceso

Funcion Elegible<-Elegibilidad(Nacionalidad,Edad)
	Si ((Nacionalidad="V") Y (Edad>17)) Entonces 
		Elegible=1
		Sino
			Elegible=2
	FinSi
FinFuncion

SubProceso Resultado(Nomb_Elector, Bono, Nacionalidad, Edad)
	Si Elegibilidad(Nacionalidad,Edad)=1 Entonces	
		Mostrar "El elector " Nomb_Elector " SI puede formar parte del grupo de Observadores"
		Mostrar ""
		Mostrar "Su bonificacion sera de: " Bono " BsS"
		Sino
			Si Elegibilidad(Nacionalidad,Edad)=2 entonces
				Mostrar "El elector " Nomb_Elector " NO puede formar parte del grupo de observadores"
			FinSi
	FinSi
FinSubProceso


Algoritmo Desafio4LOP2
	Definir nombre, Nacionalidad Como Caracter
	Definir edad, Elegible Como Entero
	Definir Sueldo, Bono Como Real
	Definir estatus como Logico
	
	Leer_Datos(Nomb_Elector, Nacionalidad, Edad, estatus)
	Calc_Bono(estatus, Sueldo, Bono)
	Resultado(Nomb_Elector, Bono, Nacionalidad, Edad)
FinAlgoritmo

	
	
