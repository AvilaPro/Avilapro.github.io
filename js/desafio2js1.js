	var i=0;
	var d=0;
	var e=0;
	var f=0;
	var A=25000;
	var B=50000;
	var C=68900;
	//var costo=0; decidi luego no inicializarla para al hacer el break se interrumpa el proceso.
	var recargo=0;
	var descuento=0;
	var impuesto=0;
	var precio=0;
	var subtotal=0;
	var subbtotal=0;
	var total=0;
funa: do{
	var nombre=prompt("Ingrese el nombre del cliente:");
	console.log("nombre del cliente: "+nombre);
	if(nombre==null){
		if(confirm("Esta seguro que desea salir?")){
			alert("HASTA PRONTO");
			console.log(costo); //uso esta instruccion para que se cierre la compilacion.
		}
		else
			continue funa;
	}
	else
		if(nombre==""){
			alert("No debes dejar la casilla vacia");
			continue funa;
		}
		else
			if(!isNaN(nombre))
				alert("Debe escribir un nombre real, no numeros\n Usted escribio: "+nombre);
				else
					i=i+1;
}while(i<1)
fun1: do{
	var tipo=prompt("Ingrese el tipo de franela que el cliente desea comprar: \n (Recuerde que solo hay tipo A, B o C)");
	console.log("tipo de franela: "+tipo);
	if(tipo==null){
		if(confirm("Esta seguro que desea salir?")){
			alert("HASTA PRONTO");
			break;
		}
		else
			continue fun1;
	}
	else
		if(tipo==""){	
			alert("NO debes dejar la casilla vacia\nRECUERDE: Solo hay tres tipos de franelas: A, B o C");
			continue fun1;} //<- se incluyo esta instruccion porque sino al tratar de aplicar el metodo
	tipo=tipo.toUpperCase(); //toUpperCase() iba a dar un error y crearia un cierre abrupto del codigo
	console.log("tipo de franela: "+tipo);
	if(tipo==="A"){
		costo=A;
		d=d+1;
	}
		else
			if(tipo==="B"){
				costo=B;
				d=d+1;
			}
				else
					if(tipo==="C"){
						costo=C;
						d=d+1;
					}
					else
						alert("Debe escribir un tipo de franela valido (A, B o C)\n Usted escribio:" +tipo);
}while(d<1)
console.log("costo: "+costo);
fun2: do{
	var origen=prompt("Ingrese el origen de la franela\n Nacional(N) o Importado(I):");
	console.log("origen: "+origen);
	if(origen==null){
		if(confirm("Esta seguro que desea salir?")){
			alert("HASTA PRONTO");
			break;
		}
		else
			continue fun2;
	}
	else
		if(origen==""){
			alert("NO debes dejar la casilla vacia\nRECUERDE: Seleccione (N) para Nacional o (I) para Importado");
			continue fun2;
		}
	origen=origen.toUpperCase();
	console.log("origen: "+origen);
	if(origen==="N"){
		recargo=1.25;
		orig="Nacional";
		e=e+1;
	}
		else
			if(origen==="I"){
				recargo=1.45;
				orig="Importado";
				e=e+1;
			}
			else
				alert("Usted escribio: "+origen+"\nDebe escribir un tipo de origen correcto, RECUERDE\n Nacional(N) o Importado(I)");
}while(e<1)
console.log("origen: "+origen);
console.log("orig: "+orig);
console.log("recargo: "+recargo);
fun3: do{ 
	var cantidad=parseInt(prompt("Ingrese el numero de unidades que el cliente va a comprar:"));
		if(cantidad==null){ //esta instruccion esta de mas ya que al usuario darle cancelar
					if(confirm("Esta seguro que desea salir?")){ //la variable cantidad seria 
						alert("HASTA PRONTO"); //null, pero esto el compilador lo vera como
						break; //NaN y por ende no pasara por esta instruccion sino que ira 
					} //directo al if(isNaN()). Pero lo dejo porsia XD
					else
						continue fun3;
					}
					else
						if(cantidad>=25){
							descuento=0.85;
							desc="15%";
							f=f+1;
						}
						else
							if(cantidad<=11 && cantidad>=6){
								descuento=0.95;
								desc="5%";
								f=f+1;
							}
								else
									if(isNaN(cantidad)){
										alert("NO debes dejar la casilla vacia o NO escribas letras");
										continue fun3;
									}
									else
										if(cantidad===0){
											alert("FUE ABSURDO QUE LLEGARAS AQUI -.-");	
											break;
										}
										else{
											desc="0%";
											descuento=1;
											f=f+1;
										}
}while(f<1)
console.log("cantidad: "+cantidad);
console.log("descuento: "+descuento);
console.log("desc es: "+desc);
precio=(costo*recargo);
console.log("precio (costo*recargo): "+precio);
subtotal=(precio*cantidad);
console.log("subtotal (precio*cantidad): "+subtotal);
subbtotal=(subtotal*descuento);
console.log("subtotal ya con el descuento: "+subbtotal);
impuesto=subbtotal*0.12;
console.log("impuesto (aplicado al subtotal ya con el descuento): "+impuesto);
total=(subbtotal+impuesto);
console.log("el total a pagar es (subtotal+impuesto): "+total);
alert("Nombre del Cliente: "+nombre+"\nNumero de unidades solicitadas: "+cantidad+"\nTipo de franela solicitado: "+tipo+"\nEl origen de las franelas es: "+orig+"\nCantidad de franelas solicitado: "+cantidad+"\nPrecio unitario de la franela: "+precio+"\nSUbtotal a pagar: "+subtotal+"\nSe le asigno un descunto del: "+desc+"\nQue al aplicarlo al subtotal este queda en : "+subbtotal+"\nEl impuesto (12%) es: "+impuesto+"\nEl total a pagar es: "+total);





