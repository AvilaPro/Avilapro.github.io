//Enunciado de la tarea 1 de la sección 2726

//Formule un algoritmo modular considerando el siguiente enunciado: ENUNCIADO: Procesar números enteros en el rango de 100 a 1000 hasta que el usuario 
//decida interrumpir el procesamiento cumpliendo con los objetivos indicados:
				
//1.- Implementar un menú con 3 opciones: Procesar números, Mostrar resultados y Salir, recuerde usar la opción "De otro modo"
//2.- Usando ciclo Repetir-Hasta implementar la lectura validada de los números a ser procesados, mediante una función.
//3.- Controlar la finalización del procesamiento de los números (opción uno del menú) hasta que el usuario decida interrumpirlo mediante una respuesta.
//4.- Calcular y mostrar la Cantidad de números procesados y la Cantidad de números en el rango de 200 y 400
//5.- Calcular y mostrar el Acumulado de todos los números ingresados y el Acumulado de los números pares

Funcion Num_Leido<-Func_Leer_Num
	Repetir
		Mostrar "Ingrese el numero a procesar" Sin Saltar
		Leer Num_Leido
		Si (Num_Leido<100) O (Num_Leido>1000)  
			entonces Mostrar "Numero no valido"
		FinSi
	Hasta Que (Num_Leido>=100) Y (Num_Leido<=1000) 
FinFuncion

Funcion Caracter_Leido<-Func_Leer_CarVal(Mensaje,Valor_Val1,Valor_Val2)
	Repetir
		Mostrar Mensaje Sin Saltar
		Leer Caracter_Leido
		Caracter_Leido=Mayusculas(Caracter_Leido)
	Hasta Que Caracter_Leido=Valor_Val1 o Caracter_Leido=Valor_Val2 
FinFuncion

Subproceso Leer_Datos(Num_Ing Por Referencia)
	Num_Ing=Func_Leer_Num
FinSubProceso

Subproceso Inicializar_Variables(Cant_Num Por Referencia,Cant_Num_200_400 Por Referencia,Cant_Num_Par Por Referencia, acumulador Por Referencia, acumulador_par Por Referencia)
	Cant_Num=0
	Cant_Num_200_400=0
	Cant_Num_Par=0
	acumulador_par=0
	acumulador=0
FinSubProceso

Subproceso Incrementar_Contadores(Num_Ing,Cant_Num Por Referencia,Cant_Num_200_400 Por Referencia,Cant_Num_Par Por Referencia, acumulador Por Referencia, acumulador_par Por Referencia)
	Cant_Num=Cant_Num+1
	Si Num_Ing>=200 y Num_Ing<=400 entonces 
		Cant_Num_200_400=Cant_Num_200_400+1
	FinSi
	Si (Num_Ing % 2) = 0 entonces 
		Cant_Num_Par=Cant_Num_Par+1
		acumulador_par=acumulador_par+Num_Ing
	FinSi
	acumulador=acumulador+Num_Ing
FinSubProceso

SubProceso Uno(Cant_Num Por Referencia, Cant_Num_200_400 Por Referencia, Cant_Num_Par Por Referencia, acumulador Por Referencia, acumulador_par Por Referencia)
	Repetir
		Leer_Datos(Num_Ing)
		Incrementar_Contadores(Num_Ing, Cant_Num, Cant_Num_200_400, Cant_Num_Par, acumulador, acumulador_par )
		Respuesta=Func_Leer_CarVal("¿Desea continuar procesando información (S/N)?","S","N")
	Hasta Que Respuesta="N"
FinSubProceso

Subproceso Mostrar_Resultados(Cant_Num,Cant_Num_200_400,Cant_Num_Par,acumulador,acumulador_par)
	Limpiar Pantalla
	Mostrar "----- RESULTADOS DEL PROCESAMIENTO -----"
	Mostrar "Cantidad de numeros procesados: ", Cant_Num
	Mostrar " Cantidad de números en el rango de 200 y 400: ", Cant_Num_200_400
	Mostrar "La cantidad de numeros pares ingresados fue: ", Cant_Num_Par
	Mostrar "El Acumulado de todos los números ingresados es: ", acumulador 
	Mostrar "El Acumulado de los números pares es: ", acumulador_par	
FinSubProceso




Algoritmo Desafio1LOP3
	Definir Cant_Num, Cant_Num_200_400, Cant_Num_Par, acumulador, acumulador_par como Entero
	Inicializar_Variables(Cant_Num, Cant_Num_200_400, Cant_Num_Par, acumulador, acumulador_par)
	
	Repetir
		Si opc_menu=1  
			entonces 
			Limpiar Pantalla
			Mostrar "Ultima opción seleccionada: " opc_menu
		FinSi
		Si opc_menu=2
			entonces 
			Mostrar "Presione cualquier tecla para volver al menú"
			Esperar Tecla
			Limpiar Pantalla
		FinSi
		Mostrar "MENU DE OPCIONES"
		Mostrar "1. Procesar Numeros"
		Mostrar "2. Mostrar resultados"
		Mostrar "3. Salir del sistema"
		Mostrar "Ingrese la opción... " Sin Saltar
		Leer opc_menu
		Segun opc_menu Hacer
			1: Uno(Cant_Num,Cant_Num_200_400,Cant_Num_Par,acumulador,acumulador_par)
			2: Mostrar_Resultados(Cant_Num,Cant_Num_200_400,Cant_Num_Par,acumulador,acumulador_par)
			3: Mostrar "Usted escogió salir del sistema."
			De Otro Modo:
				Mostrar "Debe ingresar una opción entre 1 y 3"
		FinSegun
	Hasta Que opc_menu=3
FinAlgoritmo
