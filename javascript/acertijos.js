(function (){




	const interrogante1 = "Aqui va la primera pregunta... Es una caja sin llave, tapa o bisagra, pero dentro un tesoro dorado aguarda. ¿Que es?";

	const interrogante2 = "Treinta caballos blancos, en un sierra colorada, cuando cabalgan machacan con sus pies y trituran todo a su paso, y luego descansan.";

	const interrogante3 = "¿Que ser camina en cuatro patas al alba, en dos patas al medio dia y tres patas al atardecer?";

	const interrogante4 = "Sus raices no se ven, y es mas alta que un arbol, arriba y arriba sube y sin embargo no crece.";
	
	const interrogante5 = "Esta cosa se devora todo a su paso, pajaros, bestias, arboles, muerde el acero, muele las piedras y las reduce a polvo, mata al rey, arruina la ciudad y derriba la montaña.";

	const interrogante6 = "¿Que titila rojo y caliente como una llama, pero no es fuego.?";

	const interrogante7 = "Puede vivir sin aliento, y son frios como los muertos, nunca tienen sed pero siempre beben y siempre pero siempre andan en silencio.";

	const interrogante8 = "Cantan sin voz, vuela sin alas, sin dientes muerde y sin boca habla.";

	const interrogante9 = "No puedes verla ni sentirla, y ocupa todos los huecos, no puedes olerla ni oirla y esta detras de los astros y al pie de las colinas, mata las risas y acaba vidas.";

	const interrogante10 = "He derrotado a hombres, ejercito y pueblos pero nunca he blandido arma alguna.";

	const interrogante11 = "El te guarda y te vigila desde que naces hasta que mueres. Sin descanso siempre atento, sin el te habrias muerto cientos de veces, y si todo esta en absoluto silencio y prestas suficiente atencion tal vez lo puedas escuchar.";

	const interrogante12 = "Llevas enfrentandote a el toda la vida, nunca le has derrotado, da igual lo que pase, siempre tienes algo que reprocharle.";
	



		//comenzamos con el evento de arranque

		const iniciar = document.getElementById("btn");
		




//funcion para borrar img, boton, campo y crear nuevos
const borrar = function () {
	//remover img
	const DivImagen = document.getElementById("cajaFoto");
		const foto = document.getElementById("foto1");
			DivImagen.removeChild(foto);
	
	//remover texto
	const DivTexto = document.getElementById("encabezado");
			const campoTexto = document.getElementById("campoTexto1");
				DivTexto.removeChild(campoTexto);

	//remover btn
	const divBoton = document.getElementById("cajaBoton");
		const boton = document.getElementById("btn");
			   divBoton.removeChild(boton);
			   



	//crear img
	const imagen = document.createElement("img");
	//insertamos atributos a la img
	imagen.setAttribute("src", "imagenes/lampara2.jpg");
	imagen.setAttribute("class", "lampara1");
	//añadimos la img al div
	const DivImagen1 = document.getElementById("cajaFoto");
		 DivImagen1.appendChild(imagen);



	//agregamos el texto de bienvenida
	const parrafo = document.createElement("h2");
	const contenido = document.createTextNode("La tierra se estremece y de la lampara que esta en tus manos, un humo brillante comienza a brotar");
			parrafo.appendChild(contenido);
			parrafo.setAttribute("class", "campoTexto1");
	const divEncabezado = document.getElementById("encabezado");
			divEncabezado.appendChild(parrafo);

	//agregamos boton de continuar

//boton parte 2
	const botonInicial = document.createElement("button");
				botonInicial.setAttribute("id", "genioId");
				botonInicial.setAttribute("class", "btn-genio");
				botonInicial.innerText = "FROTAR!";
		const divInicial = document.getElementById("cajaBoton");
				divInicial.appendChild(botonInicial);


					
		//presentacion del genio, creamos el id del boton de la segunda parte
		const hola = document.getElementById ("genioId");
		//funcion saludo 


	const saludo = function () {
			//remover img	
		DivImagen1.removeChild(imagen);


			//remover texto
			divEncabezado.removeChild(parrafo);


			//remover btn
			divInicial.removeChild(botonInicial);


			//ahora vamos a crear la presentacion

			
		   //crear img
	const imagenSaludo = document.createElement("img");
	//insertamos atributos a la img
	imagenSaludo.setAttribute("src", "imagenes/hola.jpg");
	imagenSaludo.setAttribute("class", "lampara1");
	//añadimos la img al div
	const DivImagen11 = document.getElementById("cajaFoto");
		 DivImagen11.appendChild(imagenSaludo);



		 
	//agregamos el texto de bienvenida presentacion
	const texto1 = document.createElement("h2");
	const contenido1 = document.createTextNode("Disculpe. ¿Me estás mirando? ¿Frotaste mi lámpara? ¿Me despertaste? ¿Me trajiste aquí?, ¡así que siéntate! Tengo que explicarte como funcionan las cosas aqui... Soy el Nigga mas cool de todos los genios, te dare un autografo luego, no desesperes. Dejame tomarme un cafe primero, despertar despues de 2000 años no es facil y aun tengo sueño y te explico como funcionan las cosas. Soy Kalbari al-Durrat al-Amwaj ibn Jari.... Si conoces mi nombre debes ser muy antiguo... *risas* y como estoy aburrido justo ahora, te concedere UN DESEO pero solo si me respondes correctamente mis preguntas... algunas son dificiles y solo la gente inteligente sabria responder... ¿Tu eres inteligente? El trato es este si contestas bien todas las preguntas, te dare UN DESEO, pero si fallas, te llevare y seras mi sirviente por la eternidad, trabajaras pata mi y haras todo lo que te mande, una gran apuesta que dices?... ");
			texto1.appendChild(contenido1);
			texto1.setAttribute("class", "campoTexto1");
	const divEncabezado1 = document.getElementById("encabezado");
			divEncabezado1.appendChild(texto1);
			
			// Crear boton de aceptar terminos
			const botonInicial1 = document.createElement("button");
				botonInicial1.setAttribute("id", "genioId1");
				botonInicial1.setAttribute("class", "btn-genio");
				botonInicial1.innerText = "Aceptar terminos";
		const divInicial1 = document.getElementById("cajaBoton");
				divInicial1.appendChild(botonInicial1);



		//funcion donde comienza a preguntar
		const pregunta1 = function() {
			//remover img	
		DivImagen11.removeChild(imagenSaludo);


		//remover texto
		divEncabezado1.removeChild(texto1);


		//remover btn
		divInicial1.removeChild(botonInicial1);

			 //crear img
	const imagenpregunta1 = document.createElement("img");
	//insertamos atributos a la img
	imagenpregunta1.setAttribute("src", "imagenes/genio1.jpg");
	imagenpregunta1.setAttribute("class", "lampara1");
	//añadimos la img al div
	const DivImagenp1 = document.getElementById("cajaFoto");
		 DivImagenp1.appendChild(imagenpregunta1);

			//agregamos la pregunta

			const acertijo1 = document.createElement("h2");
	const variable1 = document.createTextNode(interrogante1);
			acertijo1.appendChild(variable1);
			acertijo1.setAttribute("class", "campoTexto1");
	const divEncap1 = document.getElementById("encabezado");
			divEncap1.appendChild(acertijo1);
			
			//creamos un input de texto 
	 campo = document.createElement("input");
			campo.setAttribute("type","text");
			campo.setAttribute("id","campobajoid");
			campo.setAttribute("class","campo");
			campo.setAttribute("placeholder","Responder");
	const	divCampo1 = document.getElementById("cajaBoton");
			divCampo1.appendChild(campo);
			

			//Creamos un bonton para enviar la respuesta
			const botonInicial01 = document.createElement("button");
				botonInicial01.setAttribute("id", "genioId2");
				botonInicial01.setAttribute("class", "btn-genio");
				botonInicial01.innerText = "enviar";
		const divInicial01 = document.getElementById("bajocampo");
				divInicial01.appendChild(botonInicial01);

	
			
//	const respuesta1 = ["los huevos", "LOS HUEVOS", "Los huevos", "huevos", "HUEVOS" ];





//funcion para validar 
const ValidateResponse = function  () {
		const aswer1 = campo.value.toLowerCase();
  
	if (aswer1 == "los huevos" || aswer1 == "huevos" || aswer1 == "Los huevos" || aswer1 == "LOS HUEVOS" || aswer1 == "HUEVOS" || aswer1 == "el huevo" || aswer1 == "El huevo" || aswer1 == "huevo" || aswer1 == "HUEVO") {
	
		alert("POR FIN!, como te gustan los huevos, cocidos o revueltos?! vamos a la siguiente pregunta");
	
			//eliminar imagen
			DivImagenp1.removeChild(imagenpregunta1);
			
			// eliminar pregunta
			divEncap1.removeChild(acertijo1);

			
			//insertar imagen
			const imagenpregunta2 = document.createElement("img");
	//insertamos atributos a la img
	imagenpregunta2.setAttribute("src", "imagenes/genio2.jpg");
	imagenpregunta2.setAttribute("class", "lampara1");
		const DivImagenp2 = document.getElementById("cajaFoto");
		 DivImagenp2.appendChild(imagenpregunta2);

			//insertar pregunta2
			const acertijo2 = document.createElement("h2");
	const variable2 = document.createTextNode(` ...  ${interrogante2}`);
			acertijo2.appendChild(variable2);
			acertijo2.setAttribute("class", "campoTexto1");
	const divEncap2 = document.getElementById("encabezado");
			divEncap2.appendChild(acertijo2);

			
			
	
	
			//eliminamos boton
			divInicial01.removeChild(botonInicial01);
			//eliminamos campo de texto
			divCampo1.removeChild(campo);

			//agregamos el campo nuevo
			
	 campo02 = document.createElement("input");
	 	campo02.setAttribute("type","text");
	 		campo02.setAttribute("id","campobajoid");
	 			campo02.setAttribute("class","campo");
	 				campo02.setAttribute("placeholder","Responder");
const	divCampo02 = document.getElementById("cajaBoton");
						 divCampo02.appendChild(campo02);


	 //creamos el boton
	 const boton02 = document.createElement("button");
			 boton02.setAttribute("id", "genioId02");
	 			boton02.setAttribute("class", "btn-genio");
	 				boton02.innerText = "enviar";
						const divBoton02 = document.getElementById("bajocampo");
				divBoton02.appendChild(boton02);

	
	//const respuesta2 = ["los dientes", "LOS DIENTES", "Los dientes", "dientes", "DIENTES" ];

const ValidateResponse2 = () => {
	const aswer1 = campo02.value.toLowerCase();
	if (aswer1 == "Los dientes" || aswer1 == "diente" || aswer1 == "LOS DIENTES" || aswer1 == "Los dientes" || aswer1 == "DIENTES" || aswer1 == "dientes" || aswer1 == "el diente" || aswer1 == "El diente" || aswer1 == "los dientes" || aswer1 == "DIENTE") {
		alert("Por eso es importante ir al dentista... mi prima es dentista, si quieres te hago una cita. sigamos.");
		//remover la imagen
		DivImagenp2.removeChild(imagenpregunta2);
		//remover el texto
		divEncap2.removeChild(acertijo2);
		//remover campo
		divCampo02.removeChild(campo02);
		//eliminar boton
		divBoton02.removeChild(boton02);


		//creamos la imagen

	const imagenpregunta3 = document.createElement("img");
		  imagenpregunta3.setAttribute("src", "imagenes/genio3.jpg");
		  imagenpregunta3.setAttribute("class", "lampara1");
	const DivImagenp3 = document.getElementById("cajaFoto");
		  DivImagenp3.appendChild(imagenpregunta3);

		  //creamos el texto

	const acertijo3 = document.createElement("h2");
    const variable3 = document.createTextNode(` ...  ${interrogante3}`);
		  acertijo3.appendChild(variable3);
		  acertijo3.setAttribute("class", "campoTexto1");
	const divEncap3 = document.getElementById("encabezado");
		  divEncap3.appendChild(acertijo3);

		  //crear campo de texto
	const campo03 = document.createElement("input");
		  campo03.setAttribute("type","text");
		  campo03.setAttribute("id","campobajoid");
		  campo03.setAttribute("class","campo");
		  campo03.setAttribute("placeholder","Responder");
    const divCampo03 = document.getElementById("cajaBoton");
		  divCampo03.appendChild(campo03);

		  //agregamos boton

	const boton03 = document.createElement("button");
		  boton03.setAttribute("id", "genioId03");
		  boton03.setAttribute("class", "btn-genio");
		  boton03.innerText = "enviar";
	const divBoton03 = document.getElementById("bajocampo");
		  divBoton03.appendChild(boton03);

		
	
		  
	const ValidateResponse3 = () => {
		const answer = campo03.value.toLowerCase();
		if (answer == "el hombre" || answer == "EL HOMBRE" || answer == "El hombre" || answer == "hombre" || answer == "HOMBRE" || answer == "los hombres" || answer == "Los hombre" || answer == "humano" || answer == "humanos" || answer == "HUMANO" || answer == "HUMANOS" || answer == "el humano" || answer == "EL HUMANO" || answer == "Los humanos") {
			alert("Correctooo como sabias eso?  ¡Ajaaaa! Eres listo! sigamos.");

//remover la imagen
DivImagenp3.removeChild(imagenpregunta3);
//remover el texto
divEncap3.removeChild(acertijo3);
//remover campo
divCampo03.removeChild(campo03);
//eliminar boton
divBoton03.removeChild(boton03);


//creamos la imagen

const imagenpregunta4 = document.createElement("img");
  imagenpregunta4.setAttribute("src", "imagenes/genio4.jpg");
  imagenpregunta4.setAttribute("class", "lampara1");
const DivImagenp4 = document.getElementById("cajaFoto");
  DivImagenp4.appendChild(imagenpregunta4);

  //creamos el texto

const acertijo4 = document.createElement("h2");
const variable4 = document.createTextNode(` ...  ${interrogante4}`);
  acertijo4.appendChild(variable4);
  acertijo4.setAttribute("class", "campoTexto1");
const divEncap4 = document.getElementById("encabezado");
  divEncap4.appendChild(acertijo4);

  //crear campo de texto
const campo04 = document.createElement("input");
  campo04.setAttribute("type","text");
  campo04.setAttribute("id","campobajoid");
  campo04.setAttribute("class","campo");
  campo04.setAttribute("placeholder","Responder");
const divCampo04 = document.getElementById("cajaBoton");
  divCampo04.appendChild(campo04);

  //agregamos boton

const boton04 = document.createElement("button");
  boton04.setAttribute("id", "genioId04");
  boton04.setAttribute("class", "btn-genio");
  boton04.innerText = "enviar";
const divBoton04 = document.getElementById("bajocampo");
  divBoton04.appendChild(boton04);
 // const respuesta4 = ["la montaña", "LA MONTAÑA", "La montaña", "montaña", "MONTAÑA" ];
			

			
const ValidateResponse4 = () => {
	const answer = campo04.value.toLowerCase();
if (answer == "la montaña" || answer == "LA MONTAÑA" || answer == "La montaña" || answer == "montaña" || answer == "MONTAÑA" || answer == "montañas" || answer == "MONTAÑAS") {
				alert("¿Si la montaña viene hacia ti? ¡Corre, es un derrumbe! ");
			//remover la imagen
DivImagenp4.removeChild(imagenpregunta4);
//remover el texto
divEncap4.removeChild(acertijo4);
//remover campo
divCampo04.removeChild(campo04);
//eliminar boton
divBoton04.removeChild(boton04);


//creamos la imagen

const imagenpregunta5 = document.createElement("img");
  imagenpregunta5.setAttribute("src", "imagenes/genio5.jpg");
  imagenpregunta5.setAttribute("class", "lampara1");
const DivImagenp5 = document.getElementById("cajaFoto");
  DivImagenp5.appendChild(imagenpregunta5);

  //creamos el texto

const acertijo5 = document.createElement("h2");
const variable5 = document.createTextNode(` ...  ${interrogante5}`);
  acertijo5.appendChild(variable5);
  acertijo5.setAttribute("class", "campoTexto1");
const divEncap5 = document.getElementById("encabezado");
  divEncap5.appendChild(acertijo5);

  //crear campo de texto
const campo05 = document.createElement("input");
  campo05.setAttribute("type","text");
  campo05.setAttribute("id","campobajoid");
  campo05.setAttribute("class","campo");
  campo05.setAttribute("placeholder","Responder");
const divCampo05 = document.getElementById("cajaBoton");
  divCampo05.appendChild(campo05);

  //agregamos boton

const boton05 = document.createElement("button");
  boton05.setAttribute("id", "genioId05");
  boton05.setAttribute("class", "btn-genio");
  boton05.innerText = "enviar";
const divBoton05 = document.getElementById("bajocampo");
  divBoton05.appendChild(boton05);

const ValidateResponse5 = () => {
	const answer = campo05.value.toLowerCase();
	//const respuesta5 = ["el tiempo", "EL TIEMPO", "El tiempo", "tiempo", "TIEMPO" ]; 
	if (answer == "el tiempo" || answer == "El tiempo" || answer == "EL TIEMPO" || answer == "tiempo" || answer == "TIEMPO"  ) {
		alert("Correcto!!! El tiempo lo consume todo.... desde la vida hasta las rocas, solo la eternidad se puede oponer al tiempo  ");


		//remover la imagen
DivImagenp5.removeChild(imagenpregunta5);
//remover el texto
divEncap5.removeChild(acertijo5);
//remover campo
divCampo05.removeChild(campo05);
//eliminar boton
divBoton05.removeChild(boton05);


//creamos la imagen

const imagenpregunta6 = document.createElement("img");
  	  imagenpregunta6.setAttribute("src", "imagenes/genio6.jpg");
 	  imagenpregunta6.setAttribute("class", "lampara1");
const DivImagenp6 = document.getElementById("cajaFoto");
 	  DivImagenp6.appendChild(imagenpregunta6);

  //creamos el texto

const acertijo6 = document.createElement("h2");
const variable6 = document.createTextNode(` ...  ${interrogante6}`);
  	  acertijo6.appendChild(variable6);
 	  acertijo6.setAttribute("class", "campoTexto1");
const divEncap6 = document.getElementById("encabezado");
  	  divEncap6.appendChild(acertijo6);

  //crear campo de texto
const campo06 = document.createElement("input");
 	  campo06.setAttribute("type","text");
 	  campo06.setAttribute("id","campobajoid");
	  campo06.setAttribute("class","campo");
 	  campo06.setAttribute("placeholder","Responder");
const divCampo06 = document.getElementById("cajaBoton");
 	  divCampo06.appendChild(campo06);

  //agregamos boton

const boton06 = document.createElement("button");
  	  boton06.setAttribute("id", "genioId06");
  	  boton06.setAttribute("class", "btn-genio");
 	  boton06.innerText = "enviar";
const divBoton06 = document.getElementById("bajocampo");
  divBoton06.appendChild(boton06);


 // const respuesta6 = ["la sangre", "LA SANGRE", "La sangre", "sangre", "SANGRE" ];
  const ValidateResponse6 = () => {
	const answer = campo06.value.toLowerCase();
	if (answer == "la sangre" || answer == "LA SANGRE" || answer == "La sangre" || answer == "sangre" || answer == "SANGRE" ) {
		
		alert("Exacto! La sangre uhm... Cuidado con dracula, me dijeron que esta cerca de aqui, recuerdo que le decian el empaldador, curioso nombre no?");

		
		//remover la imagen
DivImagenp6.removeChild(imagenpregunta6);
//remover el texto
divEncap6.removeChild(acertijo6);
//remover campo
divCampo06.removeChild(campo06);
//eliminar boton
divBoton06.removeChild(boton06);


//creamos la imagen

const imagenpregunta7 = document.createElement("img");
  	  imagenpregunta7.setAttribute("src", "imagenes/genio7.jpg");
 	  imagenpregunta7.setAttribute("class", "lampara1");
const DivImagenp7 = document.getElementById("cajaFoto");
 	  DivImagenp7.appendChild(imagenpregunta7);

  //creamos el texto

const acertijo7 = document.createElement("h2");
const variable7 = document.createTextNode(` ...  ${interrogante7}`);
  	  acertijo7.appendChild(variable7);
 	  acertijo7.setAttribute("class", "campoTexto1");
const divEncap7 = document.getElementById("encabezado");
  	  divEncap7.appendChild(acertijo7);

  //crear campo de texto
const campo07 = document.createElement("input");
 	  campo07.setAttribute("type","text");
 	  campo07.setAttribute("id","campobajoid");
	  campo07.setAttribute("class","campo");
 	  campo07.setAttribute("placeholder","Responder");
const divCampo07 = document.getElementById("cajaBoton");
 	  divCampo07.appendChild(campo07);

  //agregamos boton

const boton07 = document.createElement("button");
  	  boton07.setAttribute("id", "genioId07");
  	  boton07.setAttribute("class", "btn-genio");
 	  boton07.innerText = "enviar";
const divBoton07 = document.getElementById("bajocampo");
  divBoton07.appendChild(boton07);

const ValidateResponse7 = () => {
	const answer = campo07.value.toLowerCase();
	//const respuesta7 = ["los peces", "LOS PECES", "Los peces", "peces", "PECES" ];
	if (answer == "los peces" || answer == "LOS PECES" || answer == "Los peces" || answer == "peces" || answer == "PECES" || answer == "el pez" || answer == "EL PEZ" || answer == "pez" || answer == "PEZ" || answer == "El pez" ) {
		alert("Baby shark, doo, doo, doo, doo, doo, doo	Baby shark, doo, doo, doo, doo, doo, doo Baby shark, doo, doo, doo, doo, doo, doo Baby shark Sigamos!!!");
	

			//remover la imagen
			DivImagenp7.removeChild(imagenpregunta7);
			//remover el texto
			divEncap7.removeChild(acertijo7);
			//remover campo
			divCampo07.removeChild(campo07);
			//eliminar boton
			divBoton07.removeChild(boton07);
			
			
			//creamos la imagen
			
			const imagenpregunta8 = document.createElement("img");
					imagenpregunta8.setAttribute("src", "imagenes/genio8.jpg");
				   imagenpregunta8.setAttribute("class", "lampara1");
			const DivImagenp8 = document.getElementById("cajaFoto");
				   DivImagenp8.appendChild(imagenpregunta8);
			
			  //creamos el texto
			
			const acertijo8 = document.createElement("h2");
			const variable8 = document.createTextNode(` ...  ${interrogante8}`);
					acertijo8.appendChild(variable8);
				   acertijo8.setAttribute("class", "campoTexto1");
			const divEncap8 = document.getElementById("encabezado");
					divEncap8.appendChild(acertijo8);
			
			  //crear campo de texto
			const campo08 = document.createElement("input");
				   campo08.setAttribute("type","text");
				   campo08.setAttribute("id","campobajoid");
				  campo08.setAttribute("class","campo");
				   campo08.setAttribute("placeholder","Responder");
			const divCampo08 = document.getElementById("cajaBoton");
				   divCampo08.appendChild(campo08);
			
			  //agregamos boton
			
			const boton08 = document.createElement("button");
					boton08.setAttribute("id", "genioId08");
					boton08.setAttribute("class", "btn-genio");
				   boton08.innerText = "enviar";
			const divBoton08 = document.getElementById("bajocampo");
			  divBoton08.appendChild(boton08);


			const ValidateResponse8 = () => {
				const answer = campo08.value.toLowerCase();
				//const respuesta8 = ["el viento", "EL VIENTO", "El viento", "viento", "VIENTO" ];
				if (answer == "el viento" || answer == "EL VIENTO" || answer == "El viento" || answer == "viento" || answer == "VIENTO" || answer == "Los vientos" || answer == "los vientos" || answer == "vientos" ) {
					alert("Vaya parece que eres un poco sabio despues de todo, eso lo aprendiste en la UNEFA?. vamos a la siguiente");
			
			

			//remover la imagen
			DivImagenp8.removeChild(imagenpregunta8);
			//remover el texto
			divEncap8.removeChild(acertijo8);
			//remover campo
			divCampo08.removeChild(campo08);
			//eliminar boton
			divBoton08.removeChild(boton08);

			//creamos la imagen
			
			const imagenpregunta9 = document.createElement("img");
					imagenpregunta9.setAttribute("src", "imagenes/genio9.jpg");
				   imagenpregunta9.setAttribute("class", "lampara1");
			const DivImagenp9 = document.getElementById("cajaFoto");
				   DivImagenp9.appendChild(imagenpregunta9);
			
			  //creamos el texto
			
			const acertijo9 = document.createElement("h2");
			const variable9 = document.createTextNode(` ...  ${interrogante9}`);
					acertijo9.appendChild(variable9);
				   acertijo9.setAttribute("class", "campoTexto1");
			const divEncap9 = document.getElementById("encabezado");
					divEncap9.appendChild(acertijo9);
			
			  //crear campo de texto
			const campo09 = document.createElement("input");
				   campo09.setAttribute("type","text");
				   campo09.setAttribute("id","campobajoid");
				  campo09.setAttribute("class","campo");
				   campo09.setAttribute("placeholder","Responder");
			const divCampo09 = document.getElementById("cajaBoton");
				   divCampo09.appendChild(campo09);
			
			  //agregamos boton
			
			const boton09 = document.createElement("button");
					boton09.setAttribute("id", "genioId09");
					boton09.setAttribute("class", "btn-genio");
				   boton09.innerText = "enviar";
			const divBoton09 = document.getElementById("bajocampo");
			  divBoton09.appendChild(boton09);



const ValidateResponse9 = () => {
	const answer = campo09.value.toLowerCase();
	//const respuesta9 = ["la oscuridad", "LA OSCURIDAD", "La oscuridad", "oscuridad", "OSCURIDAD" ];

	if (answer == "la oscuridad" || answer == "LA OSCURIDAD" || answer == "La oscuridad" || answer == "oscuridad" || answer == "OSCURIDAD"  ) {
		alert("Asi es la oscuridad esta en todos lados, desde el espacio hasta el fondo del mar, la oscuridad es el velo de todos los misterios y secretos");

			//remover la imagen
			DivImagenp9.removeChild(imagenpregunta9);
			//remover el texto
			divEncap9.removeChild(acertijo9);
			//remover campo
			divCampo09.removeChild(campo09);
			//eliminar boton
			divBoton09.removeChild(boton09);

			//creamos la imagen
			
			const imagenpregunta10 = document.createElement("img");
					imagenpregunta10.setAttribute("src", "imagenes/adivina.jpg");
				   imagenpregunta10.setAttribute("class", "lampara1");
			const DivImagenp10 = document.getElementById("cajaFoto");
				   DivImagenp10.appendChild(imagenpregunta10);
			
			  //creamos el texto
			
			const acertijo10 = document.createElement("h2");
			const variable10 = document.createTextNode(` ...  ${interrogante10}`);
					acertijo10.appendChild(variable10);
				   acertijo10.setAttribute("class", "campoTexto1");
			const divEncap10 = document.getElementById("encabezado");
					divEncap10.appendChild(acertijo10);
			
			  //crear campo de texto
			const campo010 = document.createElement("input");
				   campo010.setAttribute("type","text");
				   campo010.setAttribute("id","campobajoid");
				  campo010.setAttribute("class","campo");
				   campo010.setAttribute("placeholder","Responder");
			const divCampo010 = document.getElementById("cajaBoton");
				   divCampo010.appendChild(campo010);
			
			  //agregamos boton
			
			const boton010 = document.createElement("button");
					boton010.setAttribute("id", "genioId010");
					boton010.setAttribute("class", "btn-genio");
				   boton010.innerText = "enviar";
			const divBoton010 = document.getElementById("bajocampo");
			  divBoton010.appendChild(boton010);


const ValidateResponse10 = () => {
	const answer = campo010.value.toLowerCase();
	//const respuesta10 = ["el miedo", "EL MIEDO", "El miedo", "miedo", "MIEDO" ];
	if (answer == "el miedo" || answer == "El miedo" || answer == "EL MIEDO" || answer == "miedo" || answer == "MIEDO" ) {
		alert("Eres realmente bueno en esto, debiste pasar horas jugando Dungeon & Dragons o haber visto la saga del señor de los anillos no?");

		//remover la imagen
		DivImagenp10.removeChild(imagenpregunta10);
		//remover el texto
		divEncap10.removeChild(acertijo10);
		//remover campo
		divCampo010.removeChild(campo010);
		//eliminar boton
		divBoton010.removeChild(boton010);

		//creamos la imagen
		
		const imagenpregunta11 = document.createElement("img");
				imagenpregunta11.setAttribute("src", "imagenes/genio11.jpg");
			   imagenpregunta11.setAttribute("class", "lampara1");
		const DivImagenp11 = document.getElementById("cajaFoto");
			   DivImagenp11.appendChild(imagenpregunta11);
		
		  //creamos el texto
		
		const acertijo11 = document.createElement("h2");
		const variable11 = document.createTextNode(` ...  ${interrogante11}`);
				acertijo11.appendChild(variable11);
			   acertijo11.setAttribute("class", "campoTexto1");
		const divEncap11 = document.getElementById("encabezado");
				divEncap11.appendChild(acertijo11);
		
		  //crear campo de texto
		const campo011 = document.createElement("input");
			   campo011.setAttribute("type","text");
			   campo011.setAttribute("id","campobajoid");
			  campo011.setAttribute("class","campo");
			   campo011.setAttribute("placeholder","Responder");
		const divCampo011 = document.getElementById("cajaBoton");
			   divCampo011.appendChild(campo011);
		
		  //agregamos boton
		
		const boton011 = document.createElement("button");
				boton011.setAttribute("id", "genioId011");
				boton011.setAttribute("class", "btn-genio");
			   boton011.innerText = "enviar";
		const divBoton011 = document.getElementById("bajocampo");
		  divBoton011.appendChild(boton011);



const ValidateResponse11 = () => {
	const answer = campo011.value.toLowerCase();
	//const respuesta11 = ["el corazon", "EL CORAZON", "El corazon", "corazon", "CORAZON" ];

	if (answer == "el corazon" || answer == "El corazon" || answer == "EL CORAZON" || answer == "CORAZON" || answer == "corazon" || answer == "tu corazon" || answer == "TU CORAZON" || answer == "Tu corazon") {
	alert("El corazon es como una caja de pandora, del el pueden escapar los peores males...");
		
		//remover la imagen
		DivImagenp11.removeChild(imagenpregunta11);
		//remover el texto
		divEncap11.removeChild(acertijo11);
		//remover campo
		divCampo011.removeChild(campo011);
		//eliminar boton
		divBoton011.removeChild(boton011);

		//creamos la imagen
		
		const imagenpregunta12 = document.createElement("img");
				imagenpregunta12.setAttribute("src", "imagenes/genio12.jpg");
			   imagenpregunta12.setAttribute("class", "lampara1");
		const DivImagenp12 = document.getElementById("cajaFoto");
			   DivImagenp12.appendChild(imagenpregunta12);
		
		  //creamos el texto
		
		const acertijo12 = document.createElement("h2");
		const variable12 = document.createTextNode(` ATENTO ULTIMA PREGUNTA... si contestas bien te cumplire TU DESEO....  ${interrogante12}`);
				acertijo12.appendChild(variable12);
			   acertijo12.setAttribute("class", "campoTexto1");
		const divEncap12 = document.getElementById("encabezado");
				divEncap12.appendChild(acertijo12);
		
		  //crear campo de texto
		const campo012 = document.createElement("input");
			   campo012.setAttribute("type","text");
			   campo012.setAttribute("id","campobajoid");
			  campo012.setAttribute("class","campo");
			   campo012.setAttribute("placeholder","Responder");
		const divCampo012 = document.getElementById("cajaBoton");
			   divCampo012.appendChild(campo012);
		
		  //agregamos boton
		
		const boton012 = document.createElement("button");
				boton012.setAttribute("id", "genioId012");
				boton012.setAttribute("class", "btn-genio");
			   boton012.innerText = "enviar";
		const divBoton012 = document.getElementById("bajocampo");
		  divBoton012.appendChild(boton012);


		//  const respuesta12 = ["tu reflejo", "TU REFLEJO", "Tu reflejo", "reflejo", "REFLEJO" ];


		
const ValidateResponse12 = () => {
	const answer = campo012.value.toLowerCase();

		if (answer == "tu reflejo" || answer == "Tu reflejo" || answer == "TU REFLEJO" || answer == "REFLEJO" || answer == "el reflejo" || answer == "El reflejo" || answer == "reflejo" || answer == "EL REFLEJO" || answer == "mi reflejo" || answer == "MI REFLEJO" || answer == "Mi reflejo" ) {
			
				alert("Cuando señales con tu dedo a alguien, recuerda que podrias estar frente un espejo.");

				//remover la imagen
		DivImagenp12.removeChild(imagenpregunta12);
		//remover el texto
		divEncap12.removeChild(acertijo12);
		//remover campo
		divCampo012.removeChild(campo012);
		//eliminar boton
		divBoton012.removeChild(boton012);

			

//creamos la imagen
		
const ImgWish1 = document.createElement("img");
ImgWish1.setAttribute("src", "imagenes/hola.jpg");
ImgWish1.setAttribute("class", "lampara1");
ImgWish1.setAttribute("id", "deseo");
const DivImgWish1 = document.getElementById("cajaFoto");
DivImgWish1.appendChild(ImgWish1);


 //creamos el texto
		
 const h2Wish1 = document.createElement("h2");
 const textWish1 = document.createTextNode(`Lo lograste...! Pudiste llegar hasta aqui, eres muy listo o tal vez tuviste algo de ayuda?  De igual manera te concedere un DESEO, SOLO DIVIERTETE, ADELANTE PIDE TU DESEO`);
	   h2Wish1.appendChild(textWish1);
	   h2Wish1.setAttribute("class", "campoTexto1");
 const DivH2Wish1 = document.getElementById("encabezado");
	   DivH2Wish1.appendChild(h2Wish1);


			//creamos la listade deseos
		const DivWish = document.getElementById("bajocampo");
		const UlWish = document.createElement("ul");
			  UlWish.setAttribute("id", "ULID");
			  DivWish.appendChild(UlWish);
		const LiWish = document.createElement("li");
			  LiWish.setAttribute("id", "LIID");
			  UlWish.appendChild(LiWish);
			

			  //lista de deseo uno
		const AWish = document.createElement("a");
			  AWish.setAttribute("href", "#");
			  AWish.setAttribute("id", "1");
		const ATextWish = document.createTextNode("Deseo, tener deseos infinitos");
			  AWish.appendChild(ATextWish);
			  LiWish.appendChild(AWish);


			  //deseo dos
		    const AWish2 = document.createElement("a");
				  AWish2.setAttribute("href", "#");
				  AWish2.setAttribute("id", "2");
            const ATextWish2 = document.createTextNode("Deseo VIVIR 100 años de forma plena ");
            const LiWish2 = document.createElement("li");
                  AWish2.appendChild(ATextWish2);
                  LiWish2.appendChild(AWish2);
				  UlWish.appendChild(LiWish2);
				  
				  //deseo tres 
				  const AWish3 = document.createElement("a");
				  AWish3.setAttribute("href", "#");
				  AWish3.setAttribute("id", "3");
            const ATextWish3 = document.createTextNode("Deseo ser Millonario");
            const LiWish3 = document.createElement("li");
                  AWish3.appendChild(ATextWish3);
                  LiWish3.appendChild(AWish3);
				  UlWish.appendChild(LiWish3);
				  

				  //deseo cuatro 
				  const AWish4 = document.createElement("a");
				  AWish4.setAttribute("href", "#");
				  AWish4.setAttribute("id", "4");
            const ATextWish4 = document.createTextNode("Deseo la paz mundial");
            const LiWish4 = document.createElement("li");
                  AWish4.appendChild(ATextWish4);
                  LiWish4.appendChild(AWish4);
				  UlWish.appendChild(LiWish4);

				  //deseo 5 
				  const AWish5 = document.createElement("a");
				  AWish5.setAttribute("href", "#");
				  AWish5.setAttribute("id", "5");
            const ATextWish5 = document.createTextNode("Deseo una biblioteca gigante de libros");
            const LiWish5 = document.createElement("li");
                  AWish5.appendChild(ATextWish5);
                  LiWish5.appendChild(AWish5);
				  UlWish.appendChild(LiWish5);
				  
					
				  //deseo 6
				  const AWish6 = document.createElement("a");
				  AWish6.setAttribute("href", "#");
				  AWish6.setAttribute("id", "6");
            const ATextWish6 = document.createTextNode("Deseo una mansion!");
            const LiWish6 = document.createElement("li");
                  AWish6.appendChild(ATextWish6);
                  LiWish6.appendChild(AWish6);
				  UlWish.appendChild(LiWish6);


				  //deseo 7
				  const AWish7 = document.createElement("a");
				  AWish7.setAttribute("href", "#");
				  AWish7.setAttribute("id", "7");
            const ATextWish7 = document.createTextNode("Deseo ser inmunidad a las enfermedades, teniendo perfeta salud siempre");
            const LiWish7 = document.createElement("li");
                  AWish7.appendChild(ATextWish7);
                  LiWish7.appendChild(AWish7);
				  UlWish.appendChild(LiWish7);

				    //deseo 8
					const AWish8 = document.createElement("a");
					AWish8.setAttribute("href", "#");
					AWish8.setAttribute("id", "8");
			  const ATextWish8 = document.createTextNode("Deseo conocer las reglas de los deseos y todo acerca de los Genios");
			  const LiWish8 = document.createElement("li");
					AWish8.appendChild(ATextWish8);
					LiWish8.appendChild(AWish8);
					UlWish.appendChild(LiWish8);


					//deseo 9
					const AWish9 = document.createElement("a");
					AWish9.setAttribute("href", "#");
					AWish9.setAttribute("id", "9");
			  const ATextWish9 = document.createTextNode("Deseo una PC Gamer");
			  const LiWish9 = document.createElement("li");
					AWish9.appendChild(ATextWish9);
					LiWish9.appendChild(AWish9);
					UlWish.appendChild(LiWish9);
			

					//deseo 10
					const AWish10 = document.createElement("a");
					AWish10.setAttribute("href", "#");
					AWish10.setAttribute("id", "10");
			  const ATextWish10 = document.createTextNode("Deseo ser un Magnate de los negocios");
			  const LiWish10 = document.createElement("li");
					AWish10.appendChild(ATextWish10);
					LiWish10.appendChild(AWish10);
					UlWish.appendChild(LiWish10);


					
					//deseo 11
					const AWish11 = document.createElement("a");
					AWish11.setAttribute("href", "#");
					AWish11.setAttribute("id", "11");
			  const ATextWish11 = document.createTextNode("Deseo acabar con el comunismo y socialismo en el mundo para siempre");
			  const LiWish11 = document.createElement("li");
					AWish11.appendChild(ATextWish11);
					LiWish11.appendChild(AWish11);
					UlWish.appendChild(LiWish11);



					
					//deseo 12
					const AWish12 = document.createElement("a");
					AWish12.setAttribute("href", "#");
					AWish12.setAttribute("id", "12");
			  const ATextWish12 = document.createTextNode("Deseo que se joda Maduro, que se joda Trump y que se jodan los Chinos.");
			  const LiWish12 = document.createElement("li");
					AWish12.appendChild(ATextWish12);
					LiWish12.appendChild(AWish12);
					UlWish.appendChild(LiWish12);


					
					//deseo 13
					const AWish13 = document.createElement("a");
					AWish13.setAttribute("href", "#");
					AWish13.setAttribute("id", "13");
			  const ATextWish13 = document.createTextNode("Deseo tener suerte");
			  const LiWish13 = document.createElement("li");
					AWish13.appendChild(ATextWish13);
					LiWish13.appendChild(AWish13);
					UlWish.appendChild(LiWish13);



					//deseo 14
					const AWish14 = document.createElement("a");
					AWish14.setAttribute("href", "#");
					AWish14.setAttribute("id", "14");
			  const ATextWish14 = document.createTextNode("Deseo tener paciencia");
			  const LiWish14 = document.createElement("li");
					AWish14.appendChild(ATextWish14);
					LiWish14.appendChild(AWish14);
					UlWish.appendChild(LiWish14);



					
					//deseo 15
					const AWish15 = document.createElement("a");
					AWish15.setAttribute("href", "#");
					AWish15.setAttribute("id", "15");
			  const ATextWish15 = document.createTextNode("Deseo ser un Dios");
			  const LiWish15 = document.createElement("li");
					AWish15.appendChild(ATextWish15);
					LiWish15.appendChild(AWish15);
					UlWish.appendChild(LiWish15);


					//deseo 16
					const AWish16 = document.createElement("a");
					AWish16.setAttribute("href", "#");
					AWish16.setAttribute("id", "16");
			  const ATextWish16 = document.createTextNode("Deseo comer sin engordar");
			  const LiWish16 = document.createElement("li");
					AWish16.appendChild(ATextWish16);
					LiWish16.appendChild(AWish16);
					UlWish.appendChild(LiWish16);


					//deseo 17
					const AWish17 = document.createElement("a");
					AWish17.setAttribute("href", "#");
					AWish17.setAttribute("id", "17");
			  const ATextWish17 = document.createTextNode("Deseo que mi Ex reconozca sus errores en publico y deje de hablar mal de mi");
			  const LiWish17 = document.createElement("li");
					AWish17.appendChild(ATextWish17);
					LiWish17.appendChild(AWish17);
					UlWish.appendChild(LiWish17);


					//deseo 18
					const AWish18 = document.createElement("a");
					AWish18.setAttribute("href", "#");
					AWish18.setAttribute("id", "18");
			  const ATextWish18 = document.createTextNode("Deseo ser irresistible para las mujeres");
			  const LiWish18 = document.createElement("li");
					AWish18.appendChild(ATextWish18);
					LiWish18.appendChild(AWish18);
					UlWish.appendChild(LiWish18);
			

					//deseo 19
					const AWish19 = document.createElement("a");
					AWish19.setAttribute("href", "#");
					AWish19.setAttribute("id", "19");
			  const ATextWish19 = document.createTextNode("Deseo el poder de teletransportarme a voluntad");
			  const LiWish19 = document.createElement("li");
					AWish19.appendChild(ATextWish19);
					LiWish19.appendChild(AWish19);
					UlWish.appendChild(LiWish19);


					//deseo 20
					const AWish20 = document.createElement("a");
					AWish20.setAttribute("href", "#");
					AWish20.setAttribute("id", "20");
			  const ATextWish20 = document.createTextNode("Deseo tener el poder de regeneracion");
			  const LiWish20 = document.createElement("li");
					AWish20.appendChild(ATextWish20);
					LiWish20.appendChild(AWish20);
					UlWish.appendChild(LiWish20);
			


					//deseo 21
					const AWish21 = document.createElement("a");
					AWish21.setAttribute("href", "#");
					AWish21.setAttribute("id", "21");
			  const ATextWish21 = document.createTextNode("Deseo saber como ser siempre joven y nunca morir");
			  const LiWish21 = document.createElement("li");
					AWish21.appendChild(ATextWish21);
					LiWish21.appendChild(AWish21);
					UlWish.appendChild(LiWish21);


					//deseo 22
					const AWish22 = document.createElement("a");
					AWish22.setAttribute("href", "#");
					AWish22.setAttribute("id", "22");
			  const ATextWish22 = document.createTextNode("Deseo ser el mas inteligente de todo el universo!");
			  const LiWish22 = document.createElement("li");
					AWish22.appendChild(ATextWish22);
					LiWish22.appendChild(AWish22);
					UlWish.appendChild(LiWish22);


					//deseo 23
					const AWish23 = document.createElement("a");
					AWish23.setAttribute("href", "#");
					AWish23.setAttribute("id", "23");
			  const ATextWish23 = document.createTextNode("Deseo saber que es y donde esta el One Piece");
			  const LiWish23 = document.createElement("li");
					AWish23.appendChild(ATextWish23);
					LiWish23.appendChild(AWish23);
					UlWish.appendChild(LiWish23);


					//deseo 24
					const AWish24 = document.createElement("a");
					AWish24.setAttribute("href", "#");
					AWish24.setAttribute("id", "24");
			  const ATextWish24 = document.createTextNode("Deseo asegurar mi puesto en el siguiente orden mundial");
			  const LiWish24 = document.createElement("li");
					AWish24.appendChild(ATextWish24);
					LiWish24.appendChild(AWish24);
					UlWish.appendChild(LiWish24);


					//deseo 25
					const AWish25 = document.createElement("a");
					AWish25.setAttribute("href", "#");
					AWish25.setAttribute("id", "25");
			  const ATextWish25 = document.createTextNode("Deseo un evento de extincion global y ser el nuevo (Adan/Eva) del nuevo mundo");
			  const LiWish25 = document.createElement("li");
					AWish25.appendChild(ATextWish25);
					LiWish25.appendChild(AWish25);
					UlWish.appendChild(LiWish25);
			

						//deseo 26
						const AWish26 = document.createElement("a");
						AWish26.setAttribute("href", "#");
						AWish26.setAttribute("id", "26");
				  const ATextWish26 = document.createTextNode("Deseo el poder de traer a la vida a los muertos");
				  const LiWish26 = document.createElement("li");
						AWish26.appendChild(ATextWish26);
						LiWish26.appendChild(AWish26);
						UlWish.appendChild(LiWish26);

							//deseo 27
							const AWish27 = document.createElement("a");
							AWish27.setAttribute("href", "#");
							AWish27.setAttribute("id", "27");
					  const ATextWish27 = document.createTextNode("Deseo ser batman");
					  const LiWish27 = document.createElement("li");
							AWish27.appendChild(ATextWish27);
							LiWish27.appendChild(AWish27);
							UlWish.appendChild(LiWish27);
				
							
							//deseo 28
							const AWish28 = document.createElement("a");
							AWish28.setAttribute("href", "#");
							AWish28.setAttribute("id", "28");
					  const ATextWish28 = document.createTextNode("Deseo La Pajuela del Destino");
					  const LiWish28 = document.createElement("li");
							AWish28.appendChild(ATextWish28);
							LiWish28.appendChild(AWish28);
							UlWish.appendChild(LiWish28);


							//deseo 29
							const AWish29 = document.createElement("a");
							AWish29.setAttribute("href", "#");
							AWish29.setAttribute("id", "29");
					  const ATextWish29 = document.createTextNode("Deseo que Venezuela se arregle y vuelva a ser la misma de antes");
					  const LiWish29 = document.createElement("li");
							AWish29.appendChild(ATextWish29);
							LiWish29.appendChild(AWish29);
							UlWish.appendChild(LiWish29);


							//deseo 30
							const AWish30 = document.createElement("a");
							AWish30.setAttribute("href", "#");
							AWish30.setAttribute("id", "30");
					  const ATextWish30 = document.createTextNode("Deseo que los niños, animales y ancianos de todo el mundo tengan un hogar y nunca le falte la comida");
					  const LiWish30 = document.createElement("li");
							AWish30.appendChild(ATextWish30);
							LiWish30.appendChild(AWish30);
							UlWish.appendChild(LiWish30);


							//deseo 31
							const AWish31 = document.createElement("a");
							AWish31.setAttribute("href", "#");
							AWish31.setAttribute("id", "31");
					  const ATextWish31 = document.createTextNode("Deseo viajar gratis con todas las comodidades y conocer todo el mundo");
					  const LiWish31 = document.createElement("li");
							AWish31.appendChild(ATextWish31);
							LiWish31.appendChild(AWish31);
							UlWish.appendChild(LiWish31);
				

							//deseo 32
							const AWish32 = document.createElement("a");
							AWish32.setAttribute("href", "#");
							AWish32.setAttribute("id", "32");
					  const ATextWish32 = document.createTextNode("Deseo tener el poder de controlar el tiempo");
					  const LiWish32 = document.createElement("li");
							AWish32.appendChild(ATextWish32);
							LiWish32.appendChild(AWish32);
							UlWish.appendChild(LiWish32);


							//deseo 33
							const AWish33 = document.createElement("a");
							AWish33.setAttribute("href", "#");
							AWish33.setAttribute("id", "33");
					  const ATextWish33 = document.createTextNode("Deseo ser un Sayayin");
					  const LiWish33 = document.createElement("li");
							AWish33.appendChild(ATextWish33);
							LiWish33.appendChild(AWish33);
							UlWish.appendChild(LiWish33);


							//deseo 34
							const AWish34 = document.createElement("a");
							AWish34.setAttribute("href", "#");
							AWish34.setAttribute("id", "34");
					  const ATextWish34 = document.createTextNode("Deseo el poder de manipular la materia");
					  const LiWish34 = document.createElement("li");
							AWish34.appendChild(ATextWish34);
							LiWish34.appendChild(AWish34);
							UlWish.appendChild(LiWish34);
				
						//deseo 35
						const AWish35 = document.createElement("a");
						AWish35.setAttribute("href", "#");
						AWish35.setAttribute("id", "35");
				  const ATextWish35 = document.createTextNode("Deseo el poder de ser invisible");
				  const LiWish35 = document.createElement("li");
						AWish35.appendChild(ATextWish35);
						LiWish35.appendChild(AWish35);
						UlWish.appendChild(LiWish35);
			

						//deseo 36
						const AWish36 = document.createElement("a");
						AWish36.setAttribute("href", "#");
						AWish36.setAttribute("id", "36");
				  const ATextWish36 = document.createTextNode("Deseo el poder de leer las mentes");
				  const LiWish36 = document.createElement("li");
						AWish36.appendChild(ATextWish36);
						LiWish36.appendChild(AWish36);
						UlWish.appendChild(LiWish36);


						//deseo 37
						const AWish37 = document.createElement("a");
						AWish37.setAttribute("href", "#");
						AWish37.setAttribute("id", "37");
				  const ATextWish37 = document.createTextNode("Deseo aprender a hacer magia.");
				  const LiWish37 = document.createElement("li");
						AWish37.appendChild(ATextWish37);
						LiWish37.appendChild(AWish37);
						UlWish.appendChild(LiWish37);


						//deseo 38
						const AWish38 = document.createElement("a");
						AWish38.setAttribute("href", "#");
						AWish38.setAttribute("id", "38");
				  const ATextWish38 = document.createTextNode("Deseo que el genio no le cumpla mas deseos a NADIE MÁS");
				  const LiWish38 = document.createElement("li");
						AWish38.appendChild(ATextWish38);
						LiWish38.appendChild(AWish38);
						UlWish.appendChild(LiWish38);

						//deseo 39
						const AWish39 = document.createElement("a");
						AWish39.setAttribute("href", "#");
						AWish39.setAttribute("id", "39");
				  const ATextWish39 = document.createTextNode("Deseo que ¡Qué mi crush se enamore de mí!");
				  const LiWish39 = document.createElement("li");
						AWish39.appendChild(ATextWish39);
						LiWish39.appendChild(AWish39);
						UlWish.appendChild(LiWish39);

						//deseo 40
						const AWish40 = document.createElement("a");
						AWish40.setAttribute("href", "#");
						AWish40.setAttribute("id", "40");
				  const ATextWish40 = document.createTextNode("Deseo ¡Un Sándwich de jamón!");
				  const LiWish40 = document.createElement("li");
						AWish40.appendChild(ATextWish40);
						LiWish40.appendChild(AWish40);
						UlWish.appendChild(LiWish40);


						//deseo 41
						const AWish41 = document.createElement("a");
						AWish41.setAttribute("href", "#");
						AWish41.setAttribute("id", "41");
				  const ATextWish41 = document.createTextNode("Deseo ¡Chinchorro magico!");
				  const LiWish41 = document.createElement("li");
						AWish41.appendChild(ATextWish41);
						LiWish41.appendChild(AWish41);
						UlWish.appendChild(LiWish41);


						//deseo 42
						const AWish42 = document.createElement("a");
						AWish42.setAttribute("href", "#");
						AWish42.setAttribute("id", "42");
				  const ATextWish42 = document.createTextNode("Deseo ¡Conocer a tu creador!");
				  const LiWish42 = document.createElement("li");
						AWish42.appendChild(ATextWish42);
						LiWish42.appendChild(AWish42);
						UlWish.appendChild(LiWish42);


						



						
const WishCompleted1 = () => {

	//remover la imagen
	DivImgWish1.removeChild(ImgWish1);
	//remover el texto
	DivH2Wish1.removeChild(h2Wish1);

	
	//creamos la imagen
const ImgWishCompleted1 = document.createElement("img");
	  ImgWishCompleted1.setAttribute("src", "imagenes/wishcompleted1.jpg");
	  ImgWishCompleted1.setAttribute("class", "lampara1");
const DivImgWishCompleted1 = document.getElementById("cajaFoto");
      DivImgWishCompleted1.appendChild(ImgWishCompleted1);

	  	//creamos el texto
const H2WishCompleted1 = document.createElement("h2");
const TextWishCompleted1 = document.createTextNode(` APESAR DE SER TAN LISTO COMO PARA RESPONDER TODAS LAS PREGUNTAS, ERES INCREIBLEMENTE INGENUO... EXISTEN REGLAS... Y LETRA PEQUEÑA EN EL CONTRATO... AL DESEAR MAS DESEOS ME DA EL DERECHO DE ENCERRARTE EN UNA LAMPARA Y CONVERTIRTE EN UN GENIO, SIENDO LA LAMPARA TU PRISION HASTA QUE ALGUN ALGUIEN DESEE LO MISMO QUE TU, ENTONCES Y SOLO ENTONCES SERAS LIBRE. Y PUES TE DI LO QUE QUERIAS TIENES DESEOS ILIMITADOS PERO SOLO PODRAS CUMPLIRSELOS A LOS DEMAS, TE DESEO SUERTE EN LA ETERNIDAD, TAL VEZ ENTONCES SERAS MAS SABIO AL PEDIR TUS DESEOS... LA IGNORANCIA TIENE SUS CONSECUENCIAS...`);
	  H2WishCompleted1.appendChild(TextWishCompleted1);
	  H2WishCompleted1.setAttribute("class", "campoTexto1");
const DivH2WishCompleted1 = document.getElementById("encabezado");
	  DivH2WishCompleted1.appendChild(H2WishCompleted1);

		  //BORRAR LISTA DE DESEOS
		  DivWish.removeChild(UlWish);

		  alert("Debiste conocer las reglas antes de pedir tu deseo a un Genio Marids");

			
	//fin del la funcion WishCompleted1 
	};		
			



const WishCompleted2 = () => {
	//remover la imagen
	DivImgWish1.removeChild(ImgWish1);
	//remover el texto
	DivH2Wish1.removeChild(h2Wish1);

	
	//creamos la imagen
const ImgWishCompleted2 = document.createElement("img");
	  ImgWishCompleted2.setAttribute("src", "imagenes/100años.jpg");
	  ImgWishCompleted2.setAttribute("class", "lampara1");
const DivImgWishCompleted2 = document.getElementById("cajaFoto");
      DivImgWishCompleted2.appendChild(ImgWishCompleted2);

	  	//creamos el texto
const H2WishCompleted2 = document.createElement("h2");
const TextWishCompleted2 = document.createTextNode(` TIENES DE PRONTO UNA VISION EN TU MENTE... TE VES A TI MISMO EN EL FUTURO SONRIENDO FRENTE A UN PASTEL, TE VES FELIZ Y CONTENTO, RODEADO DE TUS AMIGOS. HIJOS Y NIETOS TODOS CANTANDO TU CUMPLEAÑOS, LA LUZ DE VELAS DEL PASTEL BRILLAN A TAVEZ DE TU OJOS, RECORDANDO LA VIDA PLENA QUE HAZ TENIDO, ¡QUE FELICIDAD SIENTES!... PERO DE PRONTO UN FUERTE DOLOR EN EL PECHO QUE SE EXTIENDE HASTA TUS BRAZOS NO TE DEJA RESPIRAR Y RECUERDAS AQUEL DESEO QUE PEDISTE CUANDO ERAS JOVEN Y ENCONTRASTE UNA LAMPARA EN EL BOSQUE... TODO SE PONE UN POCO MAS OSCURO Y SOLO ESCUCHAS LOS GRITOS DE TUS FAMILIARES, MIENTRAS HUNDES TU CARA EN EL PASTEL AGONIZANDO  ..... *voz del genio* Esa vision sucedera en 100 años. ¡Bueno, mira el lado bueno. Al menos probaste el pastel! .....   `);
	  H2WishCompleted2.appendChild(TextWishCompleted2);
	  H2WishCompleted2.setAttribute("class", "campoTexto1");
const DivH2WishCompleted2 = document.getElementById("encabezado");
	  DivH2WishCompleted2.appendChild(H2WishCompleted2);

	 	 
	  //BORRAR LISTA DE DESEOS
	  DivWish.removeChild(UlWish);

	  alert("Deseo concedido! disfruta lo que te queda de vida! aunque ya sabes como termina la pelicula!");

//fin del la funcion WishCompleted2 
};		




const WishCompleted3 = () => {

//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted3 = document.createElement("img");
  ImgWishCompleted3.setAttribute("src", "imagenes/escobar.jpg");
  ImgWishCompleted3.setAttribute("class", "lampara1");
const DivImgWishCompleted3 = document.getElementById("cajaFoto");
  DivImgWishCompleted3.appendChild(ImgWishCompleted3);

	  //creamos el texto
const H2WishCompleted3 = document.createElement("h2");
const TextWishCompleted3 = document.createTextNode(` UN DIA TE LLEGAN VARIOS CORREOS ELECTRONICOS DICIENDO QUE ERES DUEÑO DE MUCHAS PROPIEDADES Y TU CUENTA DE BANCO DESBORDA DE MILLONES DE DOLARES.... COMIENZAS A GASTAR EN TODO TIPO DE COSAS, COMPRAS COHES DEPORTIVOS, ROPA, COMIDA, VIAJES, ALCOHOL, ....GENIAAAAL... PERO TE DAS CUENTA QUE LA MANO DERECHA DE PABLO ESCOBAR "JHON JAIRO VELASQUEZ" FALSIFICO UNA CARTA CON LA LETRA DE ESCOBAR INCRIMINANDOTE DE NARCOTRAFICO, USANDOTE ASI COMO CHIVO EXPIATORIO PARA LIBRARSE DE INCRIMINANCIOONES, Y ESCUCHAS LAS SIRENAS DE POLICIA QUE TE ESTAN BUSCANDO.... Y TU FOTO ESTA EN LAS NOTICIAS     ..... *voz del genio* si yo fuese tu, me iria de ese lugar rapido antes que llegue la policia.....  `);
  H2WishCompleted3.appendChild(TextWishCompleted3);
  H2WishCompleted3.setAttribute("class", "campoTexto1");
const DivH2WishCompleted3 = document.getElementById("encabezado");
  DivH2WishCompleted3.appendChild(H2WishCompleted3);

 
 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);
alert("Deseo concedido, YA ERES MILLONARIO!");

//fin del la funcion WishCompleted3
};



const WishCompleted4 = () => {

	//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted4 = document.createElement("img");
  ImgWishCompleted4.setAttribute("src", "imagenes/paz.jpg");
  ImgWishCompleted4.setAttribute("class", "lampara1");
const DivImgWishCompleted4 = document.getElementById("cajaFoto");
  DivImgWishCompleted4.appendChild(ImgWishCompleted4);

	  //creamos el texto
const H2WishCompleted4 = document.createElement("h2");
const TextWishCompleted4 = document.createTextNode(` LAS NACIONES UNIDAS LLEVARON A CABO EN SECRETO UN EXPERIMENTO EN UN PEQUEÑO PUEBLO, TODA LA COMIDA Y BEBIDA CONTENIAN PEQUEÑAS DOSIS DE UN TIPO DE CANNABIS EXPERIMENTAL, SE DIERON CUENTA QUE LOS CRIMENES BAJARON Y LAS PERSONAS ERAN MAS FELICES, ASI QUE TODOS LOS GOBIERNOS DEL MUNDO SE PUSIERON DE ACUERDO Y LEGALIZARON Y DISTRIBUYERON CANNABIS EN TODAS PARTES, ACABANDO CON LAS VENTAS DE LOS NARCOTRAFICANTES Y MEJORANDO LAS RELACIONES ENTRE LOS PAISES EN CONFLICTO, YA NO PELEAN MAS POR PETROLEO, SINO POR MARIHUANA....  `);
  H2WishCompleted4.appendChild(TextWishCompleted4);
  H2WishCompleted4.setAttribute("class", "campoTexto1");
const DivH2WishCompleted4 = document.getElementById("encabezado");
  DivH2WishCompleted4.appendChild(H2WishCompleted4);

 
 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);

 alert("Deseo concedido, los pájaros trinan y el sol brilla, y el mundo se siento tan en paz como tú.");

//fin del la funcion WishCompleted4
};



const WishCompleted5 = () => {

	//remover la imagen
	DivImgWish1.removeChild(ImgWish1);
	//remover el texto
	DivH2Wish1.removeChild(h2Wish1);
	
	
	//creamos la imagen
	const ImgWishCompleted5 = document.createElement("img");
	  ImgWishCompleted5.setAttribute("src", "imagenes/biblioteca.jpg");
	  ImgWishCompleted5.setAttribute("class", "lampara1");
	const DivImgWishCompleted5 = document.getElementById("cajaFoto");
	  DivImgWishCompleted5.appendChild(ImgWishCompleted5);

	   //creamos la imagen
	const DivImgWishCompleted512 = document.createElement("img");
	DivImgWishCompleted512.setAttribute("src", "imagenes/defensores.jpg");
	DivImgWishCompleted512.setAttribute("class", "lampara1");
  const DivDivImgWishCompleted512 = document.getElementById("cajaFoto");
	DivDivImgWishCompleted512.appendChild(DivImgWishCompleted512);

	
	//creamos la imagen
	const ImgWishCompleted51 = document.createElement("img");
	  ImgWishCompleted51.setAttribute("src", "imagenes/necro.jpg");
	  ImgWishCompleted51.setAttribute("class", "lampara1");
	const DivImgWishCompleted51 = document.getElementById("cajaFoto");
	  DivImgWishCompleted51.appendChild(ImgWishCompleted51);
	 




		  //creamos el texto
	const H2WishCompleted5 = document.createElement("h2");
	const TextWishCompleted5 = document.createTextNode(` ANTE TI APARECE UNA GRAN BIBLIOTECA, CON PASILLOS LARGO EN TODAS DIRECCIONES, PUERTAS, PASADIZOS SECRETOS, ESCALERAS, Y PIEZAS INMEMORABLES DE ARTE CUBREN TODO EL TECHO DE TAN MAGNIFICA BIBLIOTECA, TODO EL CONOCIMIENTO DE LA HUMANIDAD INCLUSO AQUE QUE SE PERDIO A TRAVES DEL TIEMPO ESTA AQUI, HAY TANTOS LIBROS QUE NECESITARAS MAS DE UNA VIDA PARA LEERLOS TODOS, TEN CUIDADO, LOS SECRETOS DE LA HUMANIDAD PUEDEN RESULTAR GLORIOSOS O PERTURBADORES....(*Te acercas a un estante y ves un libro blanco con bordes dorados y adornado con plumas, junto a el un libro tenebroso con paginas con sangre seca y una cubierta con lo que parece piel humana, otro que dice "guia para paladines y clerigos"... ¿que demonios es esto? hay cientos, miles de libros tan extraños como estos y parecen muy viejos y reales...)  `);
	  H2WishCompleted5.appendChild(TextWishCompleted5);
	  H2WishCompleted5.setAttribute("class", "campoTexto1");
	const DivH2WishCompleted5 = document.getElementById("encabezado");
	  DivH2WishCompleted5.appendChild(H2WishCompleted5);
	
	 
	 //BORRAR LISTA DE DESEOS
	 DivWish.removeChild(UlWish);
	
	 alert("Deseo concedido, todos los libros de la historia que fueron escritos estan aqui.");
	
	//fin del la funcion WishCompleted5
};


const WishCompleted6 = () => {

//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted6 = document.createElement("img");
  ImgWishCompleted6.setAttribute("src", "imagenes/mansion.jpg");
  ImgWishCompleted6.setAttribute("class", "lampara1");
const DivImgWishCompleted6 = document.getElementById("cajaFoto");
  DivImgWishCompleted6.appendChild(ImgWishCompleted6);

	  //creamos el texto
const H2WishCompleted6 = document.createElement("h2");
const TextWishCompleted6 = document.createTextNode(` YA ERES DUEÑO DE ESTA MASION, UN FAMILIAR LEJANO QUE NI CONOCIAS TE DEJO ESTO COMO HERENCIA PERO NO LA PUEDES VENDER.... ESTA EN UN MAL ESTADO PERO HABITABLE, LLENO DE CUERVOS Y POLILLAS, CUANDO RECORES TODO EL LUGAR SIENTES UN AIRE FRIO QUE TE PONE LA PIEL DE GALLINA, SIENTES QUE TE OBSERVAN PERO NO HAY NADIE AL CAER LA NOCHE SIENTES RUIDOS EXTRAÑOS Y TE LEVANTAS A INVESTIGAR, AL ASOMARTE POR LA VENTANA VISUALISAS UN HOMBRE DE NEGRO CON SOMBRERO DE COPA MIRANDO HACIA A TI, PARECE INMOVIL... CUANDO LE GRITAS, SE DESVANECE FRENTE DE TI.....  `);
  H2WishCompleted6.appendChild(TextWishCompleted6);
  H2WishCompleted6.setAttribute("class", "campoTexto1");
const DivH2WishCompleted6 = document.getElementById("encabezado");
  DivH2WishCompleted6.appendChild(H2WishCompleted6);

 
 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);

 alert("Deseo concedido, YA TIENES UNA MANSION... EMBRUJADA...");

//fin del la funcion WishCompleted6
};


const WishCompleted7 = () => {
	//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted7 = document.createElement("img");
  ImgWishCompleted7.setAttribute("src", "imagenes/inmunidad.jpg");
  ImgWishCompleted7.setAttribute("class", "lampara1");
const DivImgWishCompleted7 = document.getElementById("cajaFoto");
  DivImgWishCompleted7.appendChild(ImgWishCompleted7);

	  //creamos el texto
const H2WishCompleted7 = document.createElement("h2");
const TextWishCompleted7 = document.createTextNode(` AL PASAR UNOS DIAS DECIDES IR AL DOCTOR PARA COMPROBAR TU SALUD Y VER SI FUNCIONO EL DESEO, Y EL MEDICO TE REVISA, AL CHEQUEARTE NOTA QUE ALGUNOS RESULTADOS SALEN ALGO EXTRAÑOS Y DECIDE HACERTE UN EXAMEN NUEVO Y COMPLETO PARA VERIFICAR QUE TODO ESTA EN ORDEN... AL OTRO DIA EL DOCTOR TE LLAMA DESESPERADO Y SE ESCUCHA UN BULLICIO DEL OTRO LADO DEL TELEFONO, TE PIDEN QUE VAYAS URGENTE, TE ASUSTAS UN POCO Y VAS MUY RAPIDO, EL DOCTOR TE DICE QUE NO SOLO ESTAS BIEN DE SALUD SINO QUE TU SANGRE ES LA CURA PARA TODAS LAS ENFERMEDADES Y QUIEREN QUE LES DONES SANGRE. LA NOTICIA SE HACE TAN VIRAL QUE A LA HORA LA PRENSA ESTA EN TU CASA Y HAY PAPARAZZIS EN TODOS LADOS, INCLUSO EL EJERCITO ACORDONA EL LUGAR, QUIEREN QUE LES "DONES SANGRE" PARA HACER EXPERIMENTOS CONTIGO.....POR EL "BIEN DE LA HUMANIDAD"...*voz del genio: si yo fuese tu saldria por la parte detras de la casa*  `);
  H2WishCompleted7.appendChild(TextWishCompleted7);
  H2WishCompleted7.setAttribute("class", "campoTexto1");
const DivH2WishCompleted7 = document.getElementById("encabezado");
  DivH2WishCompleted7.appendChild(H2WishCompleted7);

 
 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);

 alert("Deseo concedido, YA ERES INMUNE A TODO TIPO DE ENFERMEDADES... ");

//fin del la funcion WishCompleted7

};



const WishCompleted8 = () => {

//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen de rules
const ImgWishCompleted8 = document.createElement("img");
  ImgWishCompleted8.setAttribute("src", "imagenes/rules.jpg");
  ImgWishCompleted8.setAttribute("class", "lampara1");
  ImgWishCompleted8.setAttribute("class", "rules");
const DivImgWishCompleted8 = document.getElementById("cajaFoto");
  DivImgWishCompleted8.appendChild(ImgWishCompleted8);

	  //creamos el texto rules
const H2WishCompleted8 = document.createElement("p");
const TextWishCompleted8 = document.createTextNode(`  “Deseos infinitos y otra peticiones que no puedes hacer al genio de la lámpara”
Las 3 leyes inmutables de los genios:

1)No se puede desear nada que altere la estructura del propio sistema de deseos. No se pueden pedir deseos adicionales.
2)No se puede desear traer nada que no esté en la existencia ni quitar algo de la existencia. No se puede matar ni resucitar a los muertos.
3)No se puede desear cambiar los sentimientos, emociones o deseos de alguien. No se puede pedir que alguien se enamore de ti.
SI DESEAS ALGUNO DE ESTOS DESEOS SE CUMPLIRIAN PERO DE FORMA MUY DESFAVORABLE.
`);
  H2WishCompleted8.appendChild(TextWishCompleted8);
  H2WishCompleted8.setAttribute("class", "campoTexto1");
  H2WishCompleted8.setAttribute("class", "textrules");
const DivH2WishCompleted8 = document.getElementById("cajaFoto");
  DivH2WishCompleted8.appendChild(H2WishCompleted8);

	// creamos imagen de dao
  const ImgWishCompleted8dao = document.createElement("img");
  ImgWishCompleted8dao.setAttribute("src", "imagenes/dao.jpg");
  ImgWishCompleted8dao.setAttribute("class", "lampara1");
  ImgWishCompleted8dao.setAttribute("class", "rules");
const DivImgWishCompleted8dao = document.getElementById("cajaFoto");
  DivImgWishCompleted8dao.appendChild(ImgWishCompleted8dao);

    //creamos el texto dao
const H2WishCompleted8dao = document.createElement("p");
const TextWishCompleted8dao = document.createTextNode(` 
EXISTEN 4 TIPOS DE GENIOS:

1)Los DAO son malvados y de inteligencia media. Les gusta presentarse en el Plano Material para hacer el mal.
Cualquier deseo solicitado por un dao siempre se torcería de la manera más cruel posible. Se aconsejó precaución extrema al pedirle a un dao que le conceda un deseo.
`);
  H2WishCompleted8dao.appendChild(TextWishCompleted8dao);
  H2WishCompleted8dao.setAttribute("class", "campoTexto1");
  H2WishCompleted8dao.setAttribute("class", "textrules");
const DivH2WishCompleted8dao = document.getElementById("cajaFoto");
  DivH2WishCompleted8dao.appendChild(H2WishCompleted8dao);


  //creamos la imagen de marid
const ImgWishCompleted8Marids = document.createElement("img");
ImgWishCompleted8Marids.setAttribute("src", "imagenes/hola.jpg");
ImgWishCompleted8Marids.setAttribute("class", "lampara1");
ImgWishCompleted8Marids.setAttribute("class", "rules");
const DivImgWishCompleted8Marids = document.getElementById("cajaFoto");
DivImgWishCompleted8Marids.appendChild(ImgWishCompleted8Marids);

//creamos el texto de marid
const H2WishCompleted8Marids = document.createElement("p");
const TextWishCompleted8Marids = document.createTextNode(`  
2)El marid promedio tiene una altura imponente de dieciséis a dieciocho pies (cinco metros y medio) de alto, mirando hacia abajo a todos los demás genios. Los maridos eran hermosos genios cuya piel combinaba con todos los tonos del vasto océano. Aunque generalmente es azul, de hecho, los marids cambiaron el color de su piel para reflejar su estado de ánimo actual, con tonos más oscuros de azul que indican ira. La mayoría de las marids tenían cabello azul-negro o gris oscuro, aunque existían marids de cabello blanco. En términos generales, las marids de pelo blanco eran las más turbulentas de su clase.
Viven en la Ciudad De Las Diez Mil Perlas Ubicado dentro de las cálidas aguas del plano elemental del agua , este gran arrecife de coral circular lucía fuentes de aire burbujeante, alfombras de algas, puertas de cobre, almejas gigantes y bancos de peces.  Ofender a un marid era una forma segura de incurrir en su ira aterradora.
`);
  H2WishCompleted8Marids.appendChild(TextWishCompleted8Marids);
  H2WishCompleted8Marids.setAttribute("class", "campoTexto1");
  H2WishCompleted8Marids.setAttribute("class", "textrules");
const DivH2WishCompleted8Marids = document.getElementById("cajaFoto");
  DivH2WishCompleted8Marids.appendChild(H2WishCompleted8Marids);


 //creamos la imagen de Djinn
const ImgWishCompleted8Djinn = document.createElement("img");
ImgWishCompleted8Djinn.setAttribute("src", "imagenes/djinn1.jpg");
ImgWishCompleted8Djinn.setAttribute("class", "lampara1");
ImgWishCompleted8Djinn.setAttribute("class", "rules");
const DivImgWishCompleted8Djinn = document.getElementById("cajaFoto");
DivImgWishCompleted8Djinn.appendChild(ImgWishCompleted8Djinn);

//creamos el texto de djinn
const H2WishCompleted8Djinn = document.createElement("p");
const TextWishCompleted8Djinn = document.createTextNode(`
3)Djinn fue una de las razas geniales más fáciles de tratar con respecto a los deseos. Por lo general, preferían que se les pagara por sus servicios. Djinn se parecía a hombres y mujeres humanos extremadamente altos (con un promedio de diez pies y medio de estatura) , bien musculados y en buena forma física. Sus rasgos eran aristocráticos y considerados atractivos para los estándares humanos.
`);
  H2WishCompleted8Djinn.appendChild(TextWishCompleted8Djinn);
  H2WishCompleted8Djinn.setAttribute("class", "campoTexto1");
  H2WishCompleted8Djinn.setAttribute("class", "textrules");
const DivH2WishCompleted8Djinn = document.getElementById("cajaFoto");
  DivH2WishCompleted8Djinn.appendChild(H2WishCompleted8Djinn);


  //creamos la imagen de Efreet
const ImgWishCompleted8Efreet = document.createElement("img");
ImgWishCompleted8Efreet.setAttribute("src", "imagenes/Efreet.jpg");
ImgWishCompleted8Efreet.setAttribute("class", "lampara1");
ImgWishCompleted8Efreet.setAttribute("class", "rules");
const DivImgWishCompleted8Efreet = document.getElementById("cajaFoto");
DivImgWishCompleted8Efreet.appendChild(ImgWishCompleted8Efreet);

//creamos el texto de Efreet
const H2WishCompleted8Efreet = document.createElement("p");
const TextWishCompleted8Efreet = document.createTextNode(`
4)Se esperaba que Efreet fuera tacaño con sus deseos, excepto en circunstancias en que el efreeti se vio obligado a cumplir debido a la prisión o si el efreeti pudo devolver el deseo a la persona que lo solicitó con resultados desfavorables. A veces llamados Ifrit, estos seres son los Genios del Fuego (Djinn de Fuego). Viven en el Plano Elemental del Fuego. 

Si un Efreeti es capturado o invocado debe servir durante 1001 días o hasta conceder tres deseos.

`);
  H2WishCompleted8Efreet.appendChild(TextWishCompleted8Efreet);
  H2WishCompleted8Efreet.setAttribute("class", "campoTexto1");
  H2WishCompleted8Efreet.setAttribute("class", "textrules");
const DivH2WishCompleted8Efreet = document.getElementById("cajaFoto");
  DivH2WishCompleted8Efreet.appendChild(H2WishCompleted8Efreet);




 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);

 alert("Deseo concedido, VAYA! nadie me habia pedido eso antes... Cremo que eres uno de los pocos humanos en la historia que tienen este conocimiento...");

//fin del la funcion WishCompleted8

};


const WishCompleted9 = () => {

	//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted9 = document.createElement("img");
  ImgWishCompleted9.setAttribute("src", "imagenes/pc.jpg");
  ImgWishCompleted9.setAttribute("class", "lampara1");
const DivImgWishCompleted9 = document.getElementById("cajaFoto");
  DivImgWishCompleted9.appendChild(ImgWishCompleted9);

	  //creamos el texto
const H2WishCompleted9 = document.createElement("h2");
const TextWishCompleted9 = document.createTextNode(`Ante ti aparece una pc gamer, completamente nueva aun huele a nuevo, mas alla de lo que imaginabas, encima hay un papel con las especificaciones que dice: "SISTEMA PRINCIPAL DEL PC GAMING
Por lo tanto, el sistema principal utiliza una placa madre ASUS Rampage VI Extreme Edition E-ATX para acomodar un procesador Intel Core i9-7980XE 18 de 4.6 GHz. Esta CPU extrema se combina con tres tarjetas gráficas NVIDIA Titan X Pascal conectadas en Triple-SLI y equipadas con 12.888 MB de GDDR5X VRAM respectivamente para garantizar una potencia de empuje de píxeles inigualable y así establecerse como lo último y más potente en hardware para juegos. *VOZ DEL GENIO* MUY BONITA Y TODO... LASTIMA QUE TU INTERNET SEA COMO EL DE VENEZUELA....`);
  H2WishCompleted9.appendChild(TextWishCompleted9);
  H2WishCompleted9.setAttribute("class", "campoTexto1");
const DivH2WishCompleted9 = document.getElementById("encabezado");
  DivH2WishCompleted9.appendChild(H2WishCompleted9);

 
 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);

 alert("Deseo concedido, YA TIENES UNA PODEROSA PC GAMER... ");

//fin del la funcion WishCompleted9
};




const WishCompleted10 = () => {
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const DivImgWishCompleted10 = document.createElement("img");
  DivImgWishCompleted10.setAttribute("src", "imagenes/negocios.jpg");
  DivImgWishCompleted10.setAttribute("class", "lampara1");
const DivDivImgWishCompleted10 = document.getElementById("cajaFoto");
  DivDivImgWishCompleted10.appendChild(DivImgWishCompleted10);

	  //creamos el texto
const H2WishCompleted9 = document.createElement("p");
const TextWishCompleted9 = document.createTextNode(`COMIENZAS A PENSAR EN UNA IDEA MILLONARIA PERO NO SE TE VIENE NADA A LA MENTE, ASI QUE TE PONES A JUGAR CON TU PERRO Y LE COLOCAS UNOS LENTES, Y PIENSAS ¿¡PORQUE NO VENDO LENTES DE SOL PARA PERROS!? PUES RESULTA QUE LA GENTE TE COMENZO A COMPRAR EN CANTIDADES INCREIBLES, Y DECIDES LANZAR TU PROPIA LINEA DE PRODUCTOS, INCLUYENDO CHALECOS, ZAPATITOS Y MINI TRAJES DE BAÑOS SENSUALES LOS CUALES SON LOS QUE TUVIERON MAYOR VENTA. TU COMPAÑIA HA VENDIDO TANTO QUE LA COMPAÑIA NIKE Y ADIDAS PELEAN POR TI PARA QUE TE UNAS COMO SOCIO ACTIVO DE ELLOS... *voz del genio: mira que hermoso se ve ese perrito awww*.`);
  H2WishCompleted9.appendChild(TextWishCompleted9);
  H2WishCompleted9.setAttribute("class", "campoTexto1");
const DivH2WishCompleted9 = document.getElementById("cajaFoto");
  DivH2WishCompleted9.appendChild(H2WishCompleted9);

  //creamos la imagen 1
const DivImgWishCompleted101 = document.createElement("img");
DivImgWishCompleted101.setAttribute("src", "imagenes/perro1.jpg");
DivImgWishCompleted101.setAttribute("class", "lampara1");
const DivDivImgWishCompleted101 = document.getElementById("cajaFoto");
DivDivImgWishCompleted101.appendChild(DivImgWishCompleted101);

//creamos la imagen 2
const DivImgWishCompleted102 = document.createElement("img");
DivImgWishCompleted102.setAttribute("src", "imagenes/perro2.jpg");
DivImgWishCompleted102.setAttribute("class", "lampara1");
const DivDivImgWishCompleted102 = document.getElementById("cajaFoto");
DivDivImgWishCompleted102.appendChild(DivImgWishCompleted102);

//creamos la imagen 3
const DivImgWishCompleted103 = document.createElement("img");
DivImgWishCompleted103.setAttribute("src", "imagenes/perro3.jpg");
DivImgWishCompleted103.setAttribute("class", "lampara1");
const DivDivImgWishCompleted103 = document.getElementById("cajaFoto");
DivDivImgWishCompleted103.appendChild(DivImgWishCompleted103);

//creamos la imagen 4
const DivImgWishCompleted104 = document.createElement("img");
DivImgWishCompleted104.setAttribute("src", "imagenes/perro4.jpg");
DivImgWishCompleted104.setAttribute("class", "lampara1");
const DivDivImgWishCompleted104 = document.getElementById("cajaFoto");
DivDivImgWishCompleted104.appendChild(DivImgWishCompleted104);

//creamos la imagen 5
const DivImgWishCompleted105 = document.createElement("img");
DivImgWishCompleted105.setAttribute("src", "imagenes/perro5.jpg");
DivImgWishCompleted105.setAttribute("class", "lampara1");
const DivDivImgWishCompleted105 = document.getElementById("cajaFoto");
DivDivImgWishCompleted105.appendChild(DivImgWishCompleted105);
 
 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);

 alert("Deseo concedido, ya eres un maestro de los negocios...*te llega una idea millonaria tu mente...* ");

//fin del la funcion WishCompleted10

};


const WishCompleted11 = () => {

	
	//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted11 = document.createElement("img");
  ImgWishCompleted11.setAttribute("src", "imagenes/isla.jpg");
  ImgWishCompleted11.setAttribute("class", "lampara1");
const DivImgWishCompleted11 = document.getElementById("cajaFoto");
  DivImgWishCompleted11.appendChild(ImgWishCompleted11);

	  //creamos el texto
const H2WishCompleted11 = document.createElement("p");
const TextWishCompleted11 = document.createTextNode(`Magicamente de las profundidades del oceano en el triangulo de las bermudas, emerge una isla protegida magicamente donde nadie puede salir ni entrar y es invisible para la humanidad, dentro de ella son teleportado todos los politicos corruptos, comunistas y socialistas, incluso los que habian muerto son revividos para vivir en esa isla, sin recursos y completamente desnudos, cada politico en el mundo que se vuelva corrupto, comunista o socialista es teleportado dentro de la isla para siempre, dejando a la humanidad libre de ellos, ahora ellos viven en lo que siempre soñaron... SOCIALISMO PURO!!! ...`);
  H2WishCompleted11.appendChild(TextWishCompleted11);
  H2WishCompleted11.setAttribute("class", "campoTexto1");
const DivH2WishCompleted11 = document.getElementById("cajaFoto");
  DivH2WishCompleted11.appendChild(H2WishCompleted11);

  //creamos la imagen
const ImgWishCompleted111 = document.createElement("img");
ImgWishCompleted111.setAttribute("src", "imagenes/isla1.jpg");
ImgWishCompleted111.setAttribute("class", "lampara1");
const DivImgWishCompleted111 = document.getElementById("cajaFoto");
DivImgWishCompleted111.appendChild(ImgWishCompleted111);
  //creamos la imagen
const ImgWishCompleted112 = document.createElement("img");
  ImgWishCompleted112.setAttribute("src", "imagenes/isla2.png");
  ImgWishCompleted112.setAttribute("class", "lampara1");
const DivImgWishCompleted112 = document.getElementById("cajaFoto");
  DivImgWishCompleted112.appendChild(ImgWishCompleted112);

  //creamos el texto
const H2WishCompleted11chavez = document.createElement("h2");
const TextWishCompleted11chavez = document.createTextNode(`*grito de CHAVEZ: COÑO DE SU MADREEE...*`);
    H2WishCompleted11chavez.appendChild(TextWishCompleted11chavez);
    H2WishCompleted11chavez.setAttribute("class", "campoTexto11");
const DivH2WishCompleted11chavez = document.getElementById("cajaFoto");
    DivH2WishCompleted11chavez.appendChild(H2WishCompleted11chavez);

    //creamos la imagen
const ImgWishCompleted112chavez = document.createElement("img");
	ImgWishCompleted112chavez.setAttribute("src", "imagenes/chavez.jpg");
	ImgWishCompleted112chavez.setAttribute("class", "lampara1");
const DivImgWishCompleted112chavez = document.getElementById("cajaFoto");
	DivImgWishCompleted112chavez.appendChild(ImgWishCompleted112chavez);
   //creamos el texto

 
 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);

 alert("Deseo concedido, ¡SOCIALISMO ACABADO...! ");

//fin del la funcion WishCompleted11
};


const WishCompleted12 = () => {
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);



  //creamos la imagen trump
const ImgWishCompleted121 = document.createElement("img");
  ImgWishCompleted121.setAttribute("src", "imagenes/trump1.jpg");
  ImgWishCompleted121.setAttribute("class", "lampara1");
const DivImgWishCompleted121 = document.getElementById("cajaFoto");
  DivImgWishCompleted121.appendChild(ImgWishCompleted121);

	  //creamos el texto trump
const H2WishCompleted12 = document.createElement("p");
const TextWishCompleted12 = document.createTextNode(`Donald Trump ahora es partidista activo de la LGBT, anucio en la rueda de prensa despues de declararse abiertamente gay, sin embargo eso no llamo tanto la atencion de las personas como la nueva enfermedad que adquirio, llamada Vestifobia lo que lo impide psicologicamente poder usar alguna prenda de ropa, incomodando a todos los presentes donde vaya.  `);
  H2WishCompleted12.appendChild(TextWishCompleted12);
  H2WishCompleted12.setAttribute("class", "campoTexto1");
const DivH2WishCompleted12 = document.getElementById("cajaFoto");
  DivH2WishCompleted12.appendChild(H2WishCompleted12);

  //creamos la imagen trump
const ImgWishCompleted12 = document.createElement("img");
ImgWishCompleted12.setAttribute("src", "imagenes/trump.jpg");
ImgWishCompleted12.setAttribute("class", "lampara1");
const DivImgWishCompleted12 = document.getElementById("cajaFoto");
DivImgWishCompleted12.appendChild(ImgWishCompleted12);
  
//creamos la imagen chinos
const ImgWishCompleted12chinos = document.createElement("img");
ImgWishCompleted12chinos.setAttribute("src", "imagenes/chinos.jpg");
ImgWishCompleted12chinos.setAttribute("class", "lampara1");
const DivImgWishCompleted12chinos = document.getElementById("cajaFoto");
DivImgWishCompleted12chinos.appendChild(ImgWishCompleted12chinos);

	//creamos el texto chinos
const H2WishCompleted12chinos = document.createElement("p");
const TextWishCompleted12chinos = document.createTextNode(`Tu deseo ha hecho que todos los chinos se vuelvan locos! Los penes de todos los chinos se redujieron en 5 cm dejando algunos sin la posibilidad de reproducirse, algunos adoptaron la homosexualidad como salida otros se volvieron budistas, como sea, la poblacion de chinos se reducira a la mitad en los proximos años `);
H2WishCompleted12chinos.appendChild(TextWishCompleted12chinos);
H2WishCompleted12chinos.setAttribute("class", "campoTexto1");
const DivH2WishCompleted12chinos = document.getElementById("cajaFoto");
DivH2WishCompleted12chinos.appendChild(H2WishCompleted12chinos);

//creamos la imagen maduro
const ImgWishCompleted12maduro = document.createElement("img");
ImgWishCompleted12maduro.setAttribute("src", "imagenes/maduro.jpg");
ImgWishCompleted12maduro.setAttribute("class", "lampara1");
const DivImgWishCompleted12maduro = document.getElementById("cajaFoto");
DivImgWishCompleted12maduro.appendChild(ImgWishCompleted12maduro);

	//creamos el texto maduro
const H2WishCompleted12maduro = document.createElement("p");
const TextWishCompleted12maduro = document.createTextNode(`Un grupo radical de chino llenos de odio por la reduccion de 5 cm de pene, que vivian en Venzuela, secuestran a Maduro para poder vengarse de las expropiaciones de los restaurantes chinos que ellos tenian en Venezuela cuando su pais le habia prestado tanta plata a Venezuela y el no les habia pagado,   lo mantuvieron en una jaula hasta que capturaron a Diosdado Cabellos, Cilia Flores y Tareck El Aissami y los unieron en uno solo formando asi un ciempies humano que usaban para montar cabaliito y hacer sus fantasias raras chinas. A Nicolas Maduro y Diosdado Cabellos le tocaron el puesto del medio en el ciempies humano. `);
H2WishCompleted12maduro.appendChild(TextWishCompleted12maduro);
H2WishCompleted12maduro.setAttribute("class", "campoTexto1");
const DivH2WishCompleted12maduro = document.getElementById("cajaFoto");
DivH2WishCompleted12maduro.appendChild(H2WishCompleted12maduro);



 
 //BORRAR LISTA DE DESEOS
 DivWish.removeChild(UlWish);

 alert("Deseo concedido, YA JODISTE A LOS 3... Aunque me pregunto ¿porque pediste eso?");

//fin del la funcion WishCompleted12	
};


const WishCompleted13 = () => {

	//remover la imagen
	DivImgWish1.removeChild(ImgWish1);
	//remover el texto
	DivH2Wish1.removeChild(h2Wish1);

	
	//creamos la imagen
const ImgWishCompleted13 = document.createElement("img");
	  ImgWishCompleted13.setAttribute("src", "imagenes/posion.jpg");
	  ImgWishCompleted13.setAttribute("class", "lampara1");
const DivImgWishCompleted13 = document.getElementById("cajaFoto");
      DivImgWishCompleted13.appendChild(ImgWishCompleted13);

	  	//creamos el texto
const H2WishCompleted13 = document.createElement("h3");
const TextWishCompleted13 = document.createTextNode(` Ante ti aparece magicamanete en una nube azul una pequeña posion color oro fundido y el genio te dice una vez que tomes una gota tu suerte aumentara, pero te lo advierte que su consumo excesivo produce atolondramiento, temeridad y un peligroso exceso de confianza. Consumida en grandes cantidades resulta altamente tóxica.  `);
	  H2WishCompleted13.appendChild(TextWishCompleted13);
	  H2WishCompleted13.setAttribute("class", "campoTexto1");
const DivH2WishCompleted13 = document.getElementById("cajaFoto");
	  DivH2WishCompleted13.appendChild(H2WishCompleted13);

	 	 
	  //BORRAR LISTA DE DESEOS
	  DivWish.removeChild(UlWish);

	  alert("Deseo concedido! Tu serte esta la decidiras tu mismo.");

//fin del la funcion WishCompleted 13
};


const WishCompleted14 = () => {
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted14 = document.createElement("img");
  ImgWishCompleted14.setAttribute("src", "imagenes/paciencia1.jpg");
  ImgWishCompleted14.setAttribute("class", "lampara1");
const DivImgWishCompleted14 = document.getElementById("cajaFoto");
  DivImgWishCompleted14.appendChild(ImgWishCompleted14);

	  //creamos el texto
const H2WishCompleted14 = document.createElement("p");
const TextWishCompleted14 = document.createTextNode(` El genio extiende ambas manos, en sumano izquierda te da cuatro semillas, una blanca, una negra, una roja y una azul claro. En su otra mano te da un reloj y te dice siembralas en tu jardin y mira el reloj cada dia a las 4 pm regaras las semillas con agua, ellas con el tiempo creceran y cada una te contara una historia, en cada historia hay un secreto, cuando descubras los cuatros, la paciencia sera tuya. `);
  H2WishCompleted14.appendChild(TextWishCompleted14);
  H2WishCompleted14.setAttribute("class", "campoTexto1");
const DivH2WishCompleted14 = document.getElementById("cajaFoto");
  DivH2WishCompleted14.appendChild(H2WishCompleted14);

  
//creamos la imagen
const ImgWishCompleted14R = document.createElement("img");
ImgWishCompleted14R.setAttribute("src", "imagenes/paciencia2.jpg");
ImgWishCompleted14R.setAttribute("class", "lampara1");
const DivImgWishCompleted14R = document.getElementById("cajaFoto");
DivImgWishCompleted14R.appendChild(ImgWishCompleted14R);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! La paciencia y cuatro semillas de la vida seran tuyas.");

//fin del la funcion WishCompleted 14
};



const WishCompleted15 = () => {

	//remover la imagen
	DivImgWish1.removeChild(ImgWish1);
	//remover el texto
	DivH2Wish1.removeChild(h2Wish1);

	
	//creamos la imagen
const ImgWishCompleted15 = document.createElement("img");
	  ImgWishCompleted15.setAttribute("src", "imagenes/todopoderoso.jpg");
	  ImgWishCompleted15.setAttribute("class", "lampara1");
const DivImgWishCompleted15 = document.getElementById("cajaFoto");
      DivImgWishCompleted15.appendChild(ImgWishCompleted15);

	  	//creamos el texto
const H2WishCompleted15 = document.createElement("p");
const TextWishCompleted15 = document.createTextNode(`Apareces en un viejo almacen vacio y en frente de ti esta Morgan Freeman vestido de blanco regando unas plantas, y te dice ¿asi que quieres mis poderes? Bueno... si quieres sus poderes te los puede dar a ver si puedes hacer un mejor trabajo que el, pero solo debia respetar unas reglas: No puede decirle a otros que tiene los poderes de Dios, ni puede usar los poderes para alterar el libre albedrío, Dios te dice que tomara unas vacaciones y en su ausencia estaras tu. Suerte `);
	  H2WishCompleted15.appendChild(TextWishCompleted15);
	  H2WishCompleted15.setAttribute("class", "campoTexto1");
const DivH2WishCompleted15 = document.getElementById("cajaFoto");
	  DivH2WishCompleted15.appendChild(H2WishCompleted15);

	 	 
	  //BORRAR LISTA DE DESEOS
	  DivWish.removeChild(UlWish);

	  alert("Deseo concedido! Miras a Dios cara a cara.... y de repente su cara te resulta familiar...");

//fin del la funcion WishCompleted 15
};


const WishCompleted16 = () => {
		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted17 = document.createElement("img");
  ImgWishCompleted17.setAttribute("src", "imagenes/fitness.jpg");
  ImgWishCompleted17.setAttribute("class", "lampara1");
const DivImgWishCompleted17 = document.getElementById("cajaFoto");
  DivImgWishCompleted17.appendChild(ImgWishCompleted17);

	  //creamos el texto
const H2WishCompleted17 = document.createElement("p");
const TextWishCompleted17 = document.createTextNode(` De la tierra salen una gran lombriz que brican encima de ti y se mete dentro de tu ropas y comienza a buscar tu trasero, sientes una sensacion extraña que nunca habias sentido mientras intentas luchar con todas tus fuerzas, pero es inutil, esta entrando por detras! unos segundos despues la sensacion desaparece. Felicidades dice el Genio, ahora siempre podras comer todo lo que quieras y nunca engordaras, no te preocupes por Popi ella es inofensiva, solo come mucha para alimentarla, sino se enojara y no quieres que eso pase... `);
  H2WishCompleted17.appendChild(TextWishCompleted17);
  H2WishCompleted17.setAttribute("class", "campoTexto1");
const DivH2WishCompleted17 = document.getElementById("cajaFoto");
  DivH2WishCompleted17.appendChild(H2WishCompleted17);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Bastante simple, nada especifico...Ya nunca más sufriras por engordar, incluso estarás en buena forma pero...");

//fin del la funcion WishCompleted 17



};



const WishCompleted17 = () => {

	//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted16 = document.createElement("img");
  ImgWishCompleted16.setAttribute("src", "imagenes/shenlong.jpg");
  ImgWishCompleted16.setAttribute("class", "lampara1");
const DivImgWishCompleted16 = document.getElementById("cajaFoto");
  DivImgWishCompleted16.appendChild(ImgWishCompleted16);

	  //creamos el texto
const H2WishCompleted16 = document.createElement("h1");
const TextWishCompleted16 = document.createTextNode(` TU DESEO ESTA CUMPL... Ohhh espera...  `);
  H2WishCompleted16.appendChild(TextWishCompleted16);
  H2WishCompleted16.setAttribute("class", "campoTexto1");
const DivH2WishCompleted16 = document.getElementById("cajaFoto");
  DivH2WishCompleted16.appendChild(H2WishCompleted16);

  //creamos la imagen
const ImgWishCompleted16shenlong = document.createElement("img");
ImgWishCompleted16shenlong.setAttribute("src", "imagenes/shenlong2.jpg");
ImgWishCompleted16shenlong.setAttribute("class", "lampara1");
const DivImgWishCompleted16shenlong = document.getElementById("cajaFoto");
DivImgWishCompleted16shenlong.appendChild(ImgWishCompleted16shenlong);

//creamos el texto
const H2WishCompleted16shenlong = document.createElement("h2");
const TextWishCompleted16shenlong = document.createTextNode(` tu deseo es muy poderoso no puedo cumplirlo, mejor desea otra cosa... Seguro de que no quieres revivir a krilin? e.e `);
  H2WishCompleted16shenlong.appendChild(TextWishCompleted16shenlong);
  H2WishCompleted16shenlong.setAttribute("class", "campoTexto1");
const DivH2WishCompleted16shenlong = document.getElementById("cajaFoto");
  DivH2WishCompleted16shenlong.appendChild(H2WishCompleted16shenlong);
 
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Shen Long el gran dragon de los deseos aparece ante ti y te dice Tu deseo esta cumpl.......");

//fin del la funcion WishCompleted 17
};




const WishCompleted18 = () => {

	//remover la imagen
	DivImgWish1.removeChild(ImgWish1);
	//remover el texto
	DivH2Wish1.removeChild(h2Wish1);

	
	//creamos la imagen
const ImgWishCompleted18 = document.createElement("img");
	  ImgWishCompleted18.setAttribute("src", "imagenes/fecha.jpg");
	  ImgWishCompleted18.setAttribute("class", "lampara1");
const DivImgWishCompleted18 = document.getElementById("cajaFoto");
      DivImgWishCompleted18.appendChild(ImgWishCompleted18);

	  	//creamos el texto
const H2WishCompleted18 = document.createElement("p");
const TextWishCompleted18 = document.createTextNode(` El genio mete su mano en una bolsa y saca algo que te parece peculiar, y te el Mojo es la esencia del deseo sexual de Austin Powers. Es lo que le da su legendaria destreza sexual y su potencia. Físicamente, el liquido es la fuente de su potencia y su increíble destreza sexual.. usalo y seras irresistible. aunque tal vez seas demasiado irresistible `);
	  H2WishCompleted18.appendChild(TextWishCompleted18);
	  H2WishCompleted18.setAttribute("class", "campoTexto1");
const DivH2WishCompleted18 = document.getElementById("cajaFoto");
	  DivH2WishCompleted18.appendChild(H2WishCompleted18);


	  //creamos la imagen
const ImgWishCompleted18mojo = document.createElement("img");
ImgWishCompleted18mojo.setAttribute("src", "imagenes/mojo.jpg");
ImgWishCompleted18mojo.setAttribute("class", "lampara1");
const DivImgWishCompleted18mojo = document.getElementById("cajaFoto");
DivImgWishCompleted18mojo.appendChild(ImgWishCompleted18mojo);


	 	 
	  //BORRAR LISTA DE DESEOS
	  DivWish.removeChild(UlWish);

	  alert("Deseo concedido! El genio comienza a buscar algo en su bolsa...");

//fin del la funcion WishCompleted 18
};


const WishCompleted19 = () => {


		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted17 = document.createElement("img");
  ImgWishCompleted17.setAttribute("src", "imagenes/namek.jpg");
  ImgWishCompleted17.setAttribute("class", "lampara1");
const DivImgWishCompleted17 = document.getElementById("cajaFoto");
  DivImgWishCompleted17.appendChild(ImgWishCompleted17);

	  //creamos el texto
const H2WishCompleted17 = document.createElement("p");
const TextWishCompleted17 = document.createTextNode(`Goku aparece y te lleva a un lugar que no te resulta nada familiar, te presenta con los namekusein y te dice que ellos te ayudaran en tu entrenamiento para aprender la habilidad, te desea buena suerte y te dice que cuando aprendas la tecnica podras volver a casa, se despide con una sonrisa. `);
  H2WishCompleted17.appendChild(TextWishCompleted17);
  H2WishCompleted17.setAttribute("class", "campoTexto11");
const DivH2WishCompleted17 = document.getElementById("cajaFoto");
  DivH2WishCompleted17.appendChild(H2WishCompleted17);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Hora de entrenar!");

//fin del la funcion WishCompleted 19
};



const WishCompleted20 = () => {


		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted19 = document.createElement("img");
  ImgWishCompleted19.setAttribute("src", "imagenes/face.jpg");
  ImgWishCompleted19.setAttribute("class", "lampara1");
const DivImgWishCompleted19 = document.getElementById("cajaFoto");
  DivImgWishCompleted19.appendChild(ImgWishCompleted19);

	  //creamos el texto
const H2WishCompleted19 = document.createElement("p");
const TextWishCompleted19 = document.createTextNode(`Apareces en una clinica donde aseguran darte el poder que deseas, el experimento tuvo exito, o mas o menos, obtuviste la regeneracion y como bonus adicional una cara de pizza con peperonni. seria mejor que usaras una mascara.  `);
  H2WishCompleted19.appendChild(TextWishCompleted19);
  H2WishCompleted19.setAttribute("class", "campoTexto1");
const DivH2WishCompleted19 = document.getElementById("cajaFoto");
  DivH2WishCompleted19.appendChild(H2WishCompleted19);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Ya tienes regeneracion! sin embargo...!");

//fin del la funcion WishCompleted 20
};


const WishCompleted21 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted20 = document.createElement("img");
  ImgWishCompleted20.setAttribute("src", "imagenes/fuente1.jpg");
  ImgWishCompleted20.setAttribute("class", "lampara1");
const DivImgWishCompleted20 = document.getElementById("cajaFoto");
  DivImgWishCompleted20.appendChild(ImgWishCompleted20);

	  //creamos el texto
const H2WishCompleted20 = document.createElement("p");
const TextWishCompleted20 = document.createTextNode(` Apareces caminando en una isla del caribe, el genio te dice que estas en La Florida al norte de Cuba en una isla de selva densa llamada isla de Bímini, y te explica el ritual profano que debes hacer para tener vida eterna. primero deberas ir a la parte mas alta de la isla donde esta una montaña, en ese lugar se encuentras encallado entre las rocas el barco de Ponce de Leon, si buscas en el barco encontraras los dos caliz, uno que dice "AQUA" y el otro " VITAE", luego te dice que deberas obtener una lagrimar de una Sirena, a las sirenas les atrae la luz en la oscuridad y la musica,  en el rio que atraviesa la isla las encontraras, y finalmente debes llenar las dos copas, en la fuente que esta al final de la isla en una cueva. una copa lleva la lagrima la otra no. el que tome la copa con la lagrima extrae todos los años de vida y los que pudo haber vivido si el destino no fuese tan cruel de la persona que beba la otra copa, por eso no debes ir solo.... SUERTE  `);
  H2WishCompleted20.appendChild(TextWishCompleted20);
  H2WishCompleted20.setAttribute("class", "campoTexto1");
const DivH2WishCompleted20 = document.getElementById("cajaFoto");
  DivH2WishCompleted20.appendChild(H2WishCompleted20);


  
//creamos la imagen
const ImgWishCompleted20S = document.createElement("img");
ImgWishCompleted20S.setAttribute("src", "imagenes/sirena.jpg");
ImgWishCompleted20S.setAttribute("class", "lampara1");
const DivImgWishCompleted20S = document.getElementById("cajaFoto");
DivImgWishCompleted20S.appendChild(ImgWishCompleted20S);

//creamos la imagen
const ImgWishCompleted20SC = document.createElement("img");
ImgWishCompleted20SC.setAttribute("src", "imagenes/caliz.jpg");
ImgWishCompleted20SC.setAttribute("class", "lampara1");
const DivImgWishCompleted20SC = document.getElementById("cajaFoto");
DivImgWishCompleted20SC.appendChild(ImgWishCompleted20SC);


	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! El secreto de Ponce de Leon...!");

//fin del la funcion WishCompleted 20
};

const WishCompleted22 = () => {


		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted21 = document.createElement("img");
  ImgWishCompleted21.setAttribute("src", "imagenes/inte.jpg");
  ImgWishCompleted21.setAttribute("class", "lampara1");
const DivImgWishCompleted21 = document.getElementById("cajaFoto");
  DivImgWishCompleted21.appendChild(ImgWishCompleted21);

	  //creamos el texto
const H2WishCompleted21 = document.createElement("p");
const TextWishCompleted21 = document.createTextNode(`sientes un fuerte dolor de cabeza como si te quisiera estallar la cabeza y sientes como cada neurona de tu cerebro comienza a activarse y desarrollarse a niveles nuncas antes vistos, la complejidad de la vida ya te parece trivial y piensas en muchas cosas a la vez, tu cerebro evoluciona para almacenar tanto conocimiento.  `);
  H2WishCompleted21.appendChild(TextWishCompleted21);
  H2WishCompleted21.setAttribute("class", "campoTexto1");
const DivH2WishCompleted21 = document.getElementById("cajaFoto");
  DivH2WishCompleted21.appendChild(H2WishCompleted21);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Activando neuronas.!");

//fin del la funcion WishCompleted 22
};



const WishCompleted23 = () => {


		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted22 = document.createElement("img");
  ImgWishCompleted22.setAttribute("src", "imagenes/mapa.jpg");
  ImgWishCompleted22.setAttribute("class", "lampara1");
const DivImgWishCompleted22 = document.getElementById("cajaFoto");
  DivImgWishCompleted22.appendChild(ImgWishCompleted22);

	  //creamos el texto
const H2WishCompleted22 = document.createElement("p");
const TextWishCompleted22 = document.createTextNode(`El tesoro de one piece esta hubicado en una isla llamada Laugh Tale al final de la Grand Line, en la entrada de Laugh Tale hay muchos poneglyphs que narran la historia de lo que paso en el siglo vacio, Los líderes del Gobierno Mundial fueron lo que causaron la muerte y desaparicion del Reino antiguo, eran piratas que traicionaron al reino y borarron toda la informacion para adueñarse del mundo, al final se encuentra un trono con una gran la primera fruta del diablo que te da la habilidad de todas las frutas existentes y el poder de controlar a todos los usuarios de las demas frutas del diablo.`);
  H2WishCompleted22.appendChild(TextWishCompleted22);
  H2WishCompleted22.setAttribute("class", "campoTexto1");
const DivH2WishCompleted22 = document.getElementById("cajaFoto");
  DivH2WishCompleted22.appendChild(H2WishCompleted22);

  //creamos la imagen
const ImgWishCompleted22o = document.createElement("img");
ImgWishCompleted22o.setAttribute("src", "imagenes/onepiece1.jpg");
ImgWishCompleted22o.setAttribute("class", "lampara1");
const DivImgWishCompleted22o = document.getElementById("cajaFoto");
DivImgWishCompleted22o.appendChild(ImgWishCompleted22o);


 //creamos la imagen
 const ImgWishCompleted22op = document.createElement("img");
 ImgWishCompleted22op.setAttribute("src", "imagenes/onepiece.jpg");
 ImgWishCompleted22op.setAttribute("class", "lampara1");
 const DivImgWishCompleted22op = document.getElementById("cajaFoto");
 DivImgWishCompleted22op.appendChild(ImgWishCompleted22op);


	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Navegando a Grand Line...!");

//fin del la funcion WishCompleted 22
};


const WishCompleted24 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted23 = document.createElement("img");
  ImgWishCompleted23.setAttribute("src", "imagenes/arca.jpg");
  ImgWishCompleted23.setAttribute("class", "lampara1");
const DivImgWishCompleted23 = document.getElementById("cajaFoto");
  DivImgWishCompleted23.appendChild(ImgWishCompleted23);

	  //creamos el texto
const H2WishCompleted23 = document.createElement("p");
const TextWishCompleted23 = document.createTextNode(` Alguien en el mundo apodado "pupy" deseo que el mundo y la vida acabara tal como la conocemos  y todos los que estan en el, sin embargo tu deseo asegura tu puesto para sobrevivir. aunque no exista mas el lugar de donde venias, ahora viajas en un buque bunker con las personas mas adineradas del planeta, sin embargo no hay tierra a donde ir.... por ahora.`);
  H2WishCompleted23.appendChild(TextWishCompleted23);
  H2WishCompleted23.setAttribute("class", "campoTexto1");
const DivH2WishCompleted23 = document.getElementById("cajaFoto");
  DivH2WishCompleted23.appendChild(H2WishCompleted23);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Bienvenido al arca de Noe...!");

//fin del la funcion WishCompleted 24

};


const WishCompleted25 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted24 = document.createElement("img");
  ImgWishCompleted24.setAttribute("src", "imagenes/war.jpg");
  ImgWishCompleted24.setAttribute("class", "lampara1");
const DivImgWishCompleted24 = document.getElementById("cajaFoto");
  DivImgWishCompleted24.appendChild(ImgWishCompleted24);

	  //creamos el texto
const H2WishCompleted24 = document.createElement("p");
const TextWishCompleted24 = document.createTextNode(` Deseaste acabar con todo y de repente la guerra estalló, un ruso derramo una taza de cafe en la cosola activando un pequeño misil que derribo a un avion estadounidense, EEUU inmediatamente ataco sin saber que ese dia rusia habia invitado a una practica militar a aviones de korea del norte para compararlos y por error EEUU los derribo, korea del norte ataco sin dudar a estados unidos, pero EEUU hizo un trato con los iranies de retirar todas sus tropas para siempre si los ayudaban en esta ocacion, iran ataco todos se fueron a la mierda, menos las cucarachas que sobrevivieron a la radiacion y tu... Eres el nuevo Adan... miras a un lado y hay otra sobreviviente! una mujer mayor de unos 51 años algo quemada por la radiacion, sin dientes y virola, te dice que se llama Eva, le falta una pierna y te dice que necesitan procrear para volver el mundo a la normalidad.... se dibuja una sonrisa en su cara sin dientes... `);
  H2WishCompleted24.appendChild(TextWishCompleted24);
  H2WishCompleted24.setAttribute("class", "campoTexto1");
const DivH2WishCompleted24 = document.getElementById("cajaFoto");
  DivH2WishCompleted24.appendChild(H2WishCompleted24);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Comienza la Guerra...!");

//fin del la funcion WishCompleted 25
};




const WishCompleted26 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted25m = document.createElement("img");
  ImgWishCompleted25m.setAttribute("src", "imagenes/muerte.png");
  ImgWishCompleted25m.setAttribute("class", "lampara1");
const DivImgWishCompleted25m = document.getElementById("cajaFoto");
  DivImgWishCompleted25m.appendChild(ImgWishCompleted25m);

	  //creamos el texto
const H2WishCompleted25 = document.createElement("p");
const TextWishCompleted25 = document.createTextNode(` La Muerte agarró una piedra del río y la convirtió en una piedra hermosa, que podría devolver la vida a todo que aquello que la muerte arrebató... y te la da de mala gana. `);
  H2WishCompleted25.appendChild(TextWishCompleted25);
  H2WishCompleted25.setAttribute("class", "campoTexto1");
const DivH2WishCompleted25 = document.getElementById("cajaFoto");
  DivH2WishCompleted25.appendChild(H2WishCompleted25);


  //creamos la imagen
const ImgWishCompleted25p = document.createElement("img");
ImgWishCompleted25p.setAttribute("src", "imagenes/piedra.jpg");
ImgWishCompleted25p.setAttribute("class", "lampara1");
const DivImgWishCompleted25p = document.getElementById("cajaFoto");
DivImgWishCompleted25p.appendChild(ImgWishCompleted25p);
	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! La Muerte se manifiesta en persona...");

//fin del la funcion WishCompleted 26
};





const WishCompleted27 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted26 = document.createElement("img");
  ImgWishCompleted26.setAttribute("src", "imagenes/batman.jpg");
  ImgWishCompleted26.setAttribute("class", "lampara1");
const DivImgWishCompleted26 = document.getElementById("cajaFoto");
  DivImgWishCompleted26.appendChild(ImgWishCompleted26);

	  //creamos el texto
const H2WishCompleted26 = document.createElement("p");
const TextWishCompleted26 = document.createTextNode(` Te comienzan a salir musculos y una armadura negra te cubre por completo, memorias vienen a ti de todo lo que posees, batiinformacion, batidinero, batiempresa, bati nemigos y hasta la  batileche de tu refrigerador... ahora vives en Funda barrio y debes salir todas las noches a combatir a los tukis en la zona, pendiente que no te roben los cauchos del baticoche. `);
  H2WishCompleted26.appendChild(TextWishCompleted26);
  H2WishCompleted26.setAttribute("class", "campoTexto1");
const DivH2WishCompleted26 = document.getElementById("cajaFoto");
  DivH2WishCompleted26.appendChild(H2WishCompleted26);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Nanananananana nananananana nananana...!");

//fin del la funcion WishCompleted 26
};


const WishCompleted28 = () => {
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted27 = document.createElement("img");
  ImgWishCompleted27.setAttribute("src", "imagenes/evil.jpg");
  ImgWishCompleted27.setAttribute("class", "lampara1");
const DivImgWishCompleted27 = document.getElementById("cajaFoto");
  DivImgWishCompleted27.appendChild(ImgWishCompleted27);

	  //creamos el texto
const H2WishCompleted27 = document.createElement("p");
const TextWishCompleted27 = document.createTextNode(` El Diablo aparece ante ti y te dice que esta obligado a darte su cormillo el cual los humanos los llaman La Pua Del Destino, te dice que con el podras tocar cualquier cancion y sonar mejor que el creador, tambien podras ser famoso y haras los mejores solos del mundo pero te advierte que el en persona te retara a un duelo de rock despues de un tiempo para recuperar su cormillo, nunca sabras cuando el volverá, si pierdes el duelo se llevara tu alma y seras su esclava sexual . `);
  H2WishCompleted27.appendChild(TextWishCompleted27);
  H2WishCompleted27.setAttribute("class", "campoTexto1");
const DivH2WishCompleted27 = document.getElementById("cajaFoto");
  DivH2WishCompleted27.appendChild(H2WishCompleted27);
  

  //creamos la imagen
const ImgWishCompleted272 = document.createElement("img");
ImgWishCompleted272.setAttribute("src", "imagenes/evil2.jpg");
ImgWishCompleted272.setAttribute("class", "lampara1");
const DivImgWishCompleted272 = document.getElementById("cajaFoto");
DivImgWishCompleted272.appendChild(ImgWishCompleted272);

 

  //creamos la imagen
  const ImgWishCompleted27234 = document.createElement("img");
  ImgWishCompleted27234.setAttribute("src", "imagenes/evil4.gif");
  ImgWishCompleted27234.setAttribute("class", "lampara1");
  const DivImgWishCompleted27234 = document.getElementById("cajaFoto");
  DivImgWishCompleted27234.appendChild(ImgWishCompleted27234);

  //creamos el texto
const H2WishCompleted27t = document.createElement("p");
const TextWishCompleted27t = document.createTextNode(`VOLVERE POR TI... `);
  H2WishCompleted27t.appendChild(TextWishCompleted27t);
  H2WishCompleted27t.setAttribute("class", "campoTexto11");
const DivH2WishCompleted27t = document.getElementById("cajaFoto");
  DivH2WishCompleted27t.appendChild(H2WishCompleted27t);

  //creamos la imagen
  const ImgWishCompleted272345 = document.createElement("img");
  ImgWishCompleted272345.setAttribute("src", "imagenes/evil5.gif");
  ImgWishCompleted272345.setAttribute("class", "lampara1");
  const DivImgWishCompleted272345 = document.getElementById("cajaFoto");
  DivImgWishCompleted272345.appendChild(ImgWishCompleted272345);
	   
	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! El Diablo te visitia...!");

//fin del la funcion WishCompleted 28
};

const WishCompleted29 = () => {
		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted28 = document.createElement("img");
  ImgWishCompleted28.setAttribute("src", "imagenes/pais1.jpg");
  ImgWishCompleted28.setAttribute("class", "lampara1");
const DivImgWishCompleted28 = document.getElementById("cajaFoto");
  DivImgWishCompleted28.appendChild(ImgWishCompleted28);

	  //creamos el texto
const H2WishCompleted28 = document.createElement("p");
const TextWishCompleted28 = document.createTextNode(` Rafael Caldera sufrio una diarrea cronica con amibiasis categoria 5 el dia que iba a soltar al "futuro comandante intergalactico" pero eso no paso, chavez se quedo preso y venezuela surgio como una potencia y pais libre, tomando los primeros puestos en turismo del mundo.`);
  H2WishCompleted28.appendChild(TextWishCompleted28);
  H2WishCompleted28.setAttribute("class", "campoTexto1");
const DivH2WishCompleted28 = document.getElementById("cajaFoto");
  DivH2WishCompleted28.appendChild(H2WishCompleted28);

  
//creamos la imagen
const ImgWishCompleted28v = document.createElement("img");
ImgWishCompleted28v.setAttribute("src", "imagenes/vene.jpg");
ImgWishCompleted28v.setAttribute("class", "lampara1");
const DivImgWishCompleted28v = document.getElementById("cajaFoto");
DivImgWishCompleted28v.appendChild(ImgWishCompleted28v);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Restaurando el pais, por favor, espere...!");

//fin del la funcion WishCompleted 29
};


const WishCompleted30 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted29 = document.createElement("img");
  ImgWishCompleted29.setAttribute("src", "imagenes/animales.jpg");
  ImgWishCompleted29.setAttribute("class", "lampara1");
const DivImgWishCompleted29 = document.getElementById("cajaFoto");
  DivImgWishCompleted29.appendChild(ImgWishCompleted29);

	  //creamos el texto
const H2WishCompleted29 = document.createElement("p");
const TextWishCompleted29 = document.createTextNode(` Todas las personas del mundo se han vuelto mas concientes y una gran parte de los impuestos de cada pais es destinado a fundaciones con el proposito de ayudar a esos que lo necesitan, incluyendo a animales y personas necesitadas.`);
  H2WishCompleted29.appendChild(TextWishCompleted29);
  H2WishCompleted29.setAttribute("class", "campoTexto1");
const DivH2WishCompleted29 = document.getElementById("cajaFoto");
  DivH2WishCompleted29.appendChild(H2WishCompleted29);

  
//creamos la imagen
const ImgWishCompleted29a = document.createElement("img");
ImgWishCompleted29a.setAttribute("src", "imagenes/ayudar.jpg");
ImgWishCompleted29a.setAttribute("class", "lampara1");
const DivImgWishCompleted29a = document.getElementById("cajaFoto");
DivImgWishCompleted29a.appendChild(ImgWishCompleted29a);

	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Ahora todos tienen un lugar al que pueden llamar hogar...!");

//fin del la funcion WishCompleted 30

};


const WishCompleted31 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted30 = document.createElement("img");
  ImgWishCompleted30.setAttribute("src", "imagenes/viajar.jpg");
  ImgWishCompleted30.setAttribute("class", "lampara1");
const DivImgWishCompleted30 = document.getElementById("cajaFoto");
  DivImgWishCompleted30.appendChild(ImgWishCompleted30);

	  //creamos el texto
const H2WishCompleted30 = document.createElement("p");
const TextWishCompleted30 = document.createTextNode(` Una agencia de turismo famosa te contrata como catador de destinos turisticos con experencia completa, en resumen viajas por el mundo disfrutando de vacaciones con todo pago y te pagan por ello, eres el mas trabajar de familia. Los que tienen 10años en la empresa te tienen arrechera porque no les dieron ese trabajo a ellos.`);
  H2WishCompleted30.appendChild(TextWishCompleted30);
  H2WishCompleted30.setAttribute("class", "campoTexto1");
const DivH2WishCompleted30 = document.getElementById("cajaFoto");
  DivH2WishCompleted30.appendChild(H2WishCompleted30);

  


	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Ahora eres un mochilero de clase alta...!");

//fin del la funcion WishCompleted 31
};




const WishCompleted32 = () => {
		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted31 = document.createElement("img");
  ImgWishCompleted31.setAttribute("src", "imagenes/guardian.jpg");
  ImgWishCompleted31.setAttribute("class", "lampara1");
const DivImgWishCompleted31 = document.getElementById("cajaFoto");
  DivImgWishCompleted31.appendChild(ImgWishCompleted31);

	  //creamos el texto
const H2WishCompleted31 = document.createElement("p");
const TextWishCompleted31 = document.createTextNode(` Ante ti se prensenta un portal y de el sale una persona que se hace llamar el guardian de la gema del tiempo, y te dice que el unico futuro esta en peligro y el futuro que tiene salvacion es en el donde tu tienes la gema, preparate ahora seras el nuevo guardian, es hora de comenzar tu entrenamiento.`);
  H2WishCompleted31.appendChild(TextWishCompleted31);
  H2WishCompleted31.setAttribute("class", "campoTexto1");
const DivH2WishCompleted31 = document.getElementById("cajaFoto");
  DivH2WishCompleted31.appendChild(H2WishCompleted31);

  //creamos la imagen
const ImgWishCompleted312= document.createElement("img");
ImgWishCompleted312.setAttribute("src", "imagenes/gema.jpg");
ImgWishCompleted312.setAttribute("class", "lampara1");
const DivImgWishCompleted312 = document.getElementById("cajaFoto");
DivImgWishCompleted312.appendChild(ImgWishCompleted312);


	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Ahora eres el nuevo guardian, a entrenar..!");

//fin del la funcion WishCompleted 32
};


const WishCompleted33 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted32 = document.createElement("img");
  ImgWishCompleted32.setAttribute("src", "imagenes/sayayin1.png");
  ImgWishCompleted32.setAttribute("class", "lampara1");
const DivImgWishCompleted32 = document.getElementById("cajaFoto");
  DivImgWishCompleted32.appendChild(ImgWishCompleted32);

	  //creamos el texto
const H2WishCompleted32 = document.createElement("p");
const TextWishCompleted32 = document.createTextNode(` El Maestro Roshi se presenta ante ti y te dice que ahora tienes sangre sayayin pero sin entrenamiento eres un humano normal, el te enseñara todo lo que debes saber para ser fuerte, pero te advierte que el entrenamiento es fuerte y no es acto para cobardes o debiles de corazon. ¡ES HORA DE ENTRENAR!.`);
  H2WishCompleted32.appendChild(TextWishCompleted32);
  H2WishCompleted32.setAttribute("class", "campoTexto1");
const DivH2WishCompleted32 = document.getElementById("cajaFoto");
  DivH2WishCompleted32.appendChild(H2WishCompleted32);

  //creamos la imagen
const ImgWishCompleted312saya= document.createElement("img");
ImgWishCompleted312saya.setAttribute("src", "imagenes/sayayin2.jpg");
ImgWishCompleted312saya.setAttribute("class", "lampara1");
const DivImgWishCompleted312saya = document.getElementById("cajaFoto");
DivImgWishCompleted312saya.appendChild(ImgWishCompleted312saya);


	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Ahora eres un Sayayin, en tu sangre corre el orgullo de la raza guerrera..!");

//fin del la funcion WishCompleted 33
};



const WishCompleted34 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted33 = document.createElement("img");
  ImgWishCompleted33.setAttribute("src", "imagenes/dr1.jpg");
  ImgWishCompleted33.setAttribute("class", "lampara1");
const DivImgWishCompleted33 = document.getElementById("cajaFoto");
  DivImgWishCompleted33.appendChild(ImgWishCompleted33);

	  //creamos el texto
const H2WishCompleted33 = document.createElement("p");
const TextWishCompleted33 = document.createTextNode(` Ante ti aparece un hombre azul como si fuese un alienigena y te dice que desea dejar de tener el conocimiento que tiene y te propone cambiar de vidas, ahora el es un humano normal y tu tienes todos los poderes que soñaste!, te preguntas ¿porque el haria eso?`);
  H2WishCompleted33.appendChild(TextWishCompleted33);
  H2WishCompleted33.setAttribute("class", "campoTexto1");
const DivH2WishCompleted33 = document.getElementById("cajaFoto");
  DivH2WishCompleted33.appendChild(H2WishCompleted33);

  //creamos la imagen
const ImgWishCompleted312say3= document.createElement("img");
ImgWishCompleted312say3.setAttribute("src", "imagenes/dr2.jpg");
ImgWishCompleted312say3.setAttribute("class", "lampara1");
const DivImgWishCompleted312say3 = document.getElementById("cajaFoto");
DivImgWishCompleted312say3.appendChild(ImgWishCompleted312say3);


	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! capaz de manipular la materia a tu voluntad..!");

//fin del la funcion WishCompleted 34
};


const WishCompleted35 = () => {
		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted34 = document.createElement("img");
  ImgWishCompleted34.setAttribute("src", "imagenes/invisible.png");
  ImgWishCompleted34.setAttribute("class", "lampara1");
const DivImgWishCompleted34 = document.getElementById("cajaFoto");
  DivImgWishCompleted34.appendChild(ImgWishCompleted34);

	  //creamos el texto
const H2WishCompleted34 = document.createElement("p");
const TextWishCompleted34 = document.createTextNode(`Tienes una habilidad increible, al quedarte quieto nadie puede notar tu existencia, eres uno con el ambiente, maestro del camuflaje, el señor de lo invisible. el dios del engaño, `);
  H2WishCompleted34.appendChild(TextWishCompleted34);
  H2WishCompleted34.setAttribute("class", "campoTexto1");
const DivH2WishCompleted34 = document.getElementById("cajaFoto");
  DivH2WishCompleted34.appendChild(H2WishCompleted34);

  	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Aunque.. espera donde estas???");

//fin del la funcion WishCompleted 35
};


const WishCompleted36 = () => {
		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted35 = document.createElement("img");
  ImgWishCompleted35.setAttribute("src", "imagenes/fenix.png");
  ImgWishCompleted35.setAttribute("class", "lampara1");
const DivImgWishCompleted35 = document.getElementById("cajaFoto");
  DivImgWishCompleted35.appendChild(ImgWishCompleted35);

	  //creamos el texto
const H2WishCompleted35 = document.createElement("p");
const TextWishCompleted35 = document.createTextNode(`Del espacio cae algo parecido a un meteorito a la tierra, cae a una velocidad impresionante sin embargo cuando llega al suelo, no impacta sino que se mantiene suspendido, es un Fenix de fuego y te sientes muy atraido hacia eso, sin darte cuenta caminas sin poder controlar tus pies hasta estar tan cerca de el que te envuelve en una bola de fuego gigante sin embargo esta no te quema. ahora puedes leer mentes y tienes una entidad extraterrestre dentro de ti.`);
  H2WishCompleted35.appendChild(TextWishCompleted35);
  H2WishCompleted35.setAttribute("class", "campoTexto1");
const DivH2WishCompleted35 = document.getElementById("cajaFoto");
  DivH2WishCompleted35.appendChild(H2WishCompleted35);


  
//creamos la imagen
const ImgWishCompleted352 = document.createElement("img");
ImgWishCompleted352.setAttribute("src", "imagenes/fenix2.jpg");
ImgWishCompleted352.setAttribute("class", "lampara1");
const DivImgWishCompleted352 = document.getElementById("cajaFoto");
DivImgWishCompleted352.appendChild(ImgWishCompleted352);
  	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Es un pajaro! es un avion!, espera... es un Fenix?..");

//fin del la funcion WishCompleted 36
};


const WishCompleted37 = () => {
		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted36 = document.createElement("img");
  ImgWishCompleted36.setAttribute("src", "imagenes/lechuza1.jpg");
  ImgWishCompleted36.setAttribute("class", "lampara1");
const DivImgWishCompleted36 = document.getElementById("cajaFoto");
  DivImgWishCompleted36.appendChild(ImgWishCompleted36);

	  //creamos el texto
const H2WishCompleted36 = document.createElement("p");
const TextWishCompleted36 = document.createTextNode(`A tu chimenea desciende una lechuza llena de hollin con una carta algo sucia, al leerla es una invitacion a Hogwarts la academia de magia y hechiceria para ti, ahora ya no eres mas un muggle, ahora eres un mago, aunque claro, tienes que aprender a usar la magia primero. un mundo fantastico espera por ti. `);
  H2WishCompleted36.appendChild(TextWishCompleted36);
  H2WishCompleted36.setAttribute("class", "campoTexto1");
const DivH2WishCompleted36 = document.getElementById("cajaFoto");
  DivH2WishCompleted36.appendChild(H2WishCompleted36);



  //creamos la imagen
const ImgWishCompleted362 = document.createElement("img");
ImgWishCompleted362.setAttribute("src", "imagenes/lechuza2.jpg");
ImgWishCompleted362.setAttribute("class", "lampara1");
const DivImgWishCompleted362 = document.getElementById("cajaFoto");
DivImgWishCompleted362.appendChild(ImgWishCompleted362);

  	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Es un pajaro! es un avion!, espera... es una Lechuza?..");

//fin del la funcion WishCompleted 37
};


const WishCompleted38 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted37 = document.createElement("img");
  ImgWishCompleted37.setAttribute("src", "imagenes/que.jpg");
  ImgWishCompleted37.setAttribute("class", "lampara1");
const DivImgWishCompleted37 = document.getElementById("cajaFoto");
  DivImgWishCompleted37.appendChild(ImgWishCompleted37);

	  //creamos el texto
const H2WishCompleted37 = document.createElement("p");
const TextWishCompleted37 = document.createTextNode(`¿Y que demonios se supone que voy a hacer ahora?, ¿vender chicha? soy completamente inutil ahora! ¿Tu nombre es Diviannys cierto? Maldita, te odio, me jodistes. `);
  H2WishCompleted37.appendChild(TextWishCompleted37);
  H2WishCompleted37.setAttribute("class", "campoTexto1");
const DivH2WishCompleted37 = document.getElementById("cajaFoto");
  DivH2WishCompleted37.appendChild(H2WishCompleted37);

  	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Espera ¡¿QUEEE?!..");

//fin del la funcion WishCompleted 38

};


const WishCompleted39 = () => {
	
		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted38 = document.createElement("img");
  ImgWishCompleted38.setAttribute("src", "imagenes/you.jpg");
  ImgWishCompleted38.setAttribute("class", "lampara1");
const DivImgWishCompleted38 = document.getElementById("cajaFoto");
  DivImgWishCompleted38.appendChild(ImgWishCompleted38);

	  //creamos el texto
const H2WishCompleted38 = document.createElement("p");
const TextWishCompleted38 = document.createTextNode(`Tu crush ahora no para de decirte lo mucho que te ama y te queire, a cada momento, al principio te resultar agradable pero despues se vuelve molesto cada momento de dia te escribe o quiere ir a verte, sus celos incrementan cada vez mas, y cuando duermes este esta derpierto al lado de tu cama para cuidarte... ops.... creo que no leiste las reglas de los deseos... en realidad es obsecion... deberias tener cuidado la gente "enamorada" hace locuras.... `);
  H2WishCompleted38.appendChild(TextWishCompleted38);
  H2WishCompleted38.setAttribute("class", "campoTexto1");
const DivH2WishCompleted38 = document.getElementById("cajaFoto");
  DivH2WishCompleted38.appendChild(H2WishCompleted38);

  	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! ahora esta loquita por ti... tal vez demasiado..");

//fin del la funcion WishCompleted 39

};



const WishCompleted40 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted39 = document.createElement("img");
  ImgWishCompleted39.setAttribute("src", "imagenes/sandwich.jpg");
  ImgWishCompleted39.setAttribute("class", "lampara1");
const DivImgWishCompleted39 = document.getElementById("cajaFoto");
  DivImgWishCompleted39.appendChild(ImgWishCompleted39);

	  //creamos el texto
const H2WishCompleted39 = document.createElement("p");
const TextWishCompleted39 = document.createTextNode(`ESTE ES EL SANDWICH MAS SABROSO Y PERFECTO DEL MUNDO, NO HAY NI HABRA OTRO IGUAL QUE SE COMPARE CON SU SABOR. ADEMAS ES MAGICO, ES DEL SABOR QUE DESEES, NUNCA SE ACABA NI SE DAÑA Y COMO PLUS TE REGALO UN TETERO DE SALSA MAGICA QUE TIENE EL SABOR QUE DESEES. ULALA! `);
  H2WishCompleted39.appendChild(TextWishCompleted39);
  H2WishCompleted39.setAttribute("class", "campoTexto1");
const DivH2WishCompleted39 = document.getElementById("cajaFoto");
  DivH2WishCompleted39.appendChild(H2WishCompleted39);

  	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! Preparando el Sandwich por mi mismo..");

//fin del la funcion WishCompleted 40


};



const WishCompleted41 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted40 = document.createElement("img");
  ImgWishCompleted40.setAttribute("src", "imagenes/hamaca.jpg");
  ImgWishCompleted40.setAttribute("class", "lampara1");
const DivImgWishCompleted40 = document.getElementById("cajaFoto");
  DivImgWishCompleted40.appendChild(ImgWishCompleted40);

	  //creamos el texto
const H2WishCompleted40 = document.createElement("p");
const TextWishCompleted40 = document.createTextNode(`Esta hamaca esta hecha con los pelos de la cuca de la diosa Afrodita y Atenea, la hamaca sagrada emite un aura que aleja a toda clase de mozquitos y bichos, al recostarse se puede sentir la suavidad de estar en una nube, es indestructible, se mece sola, cuenta con nanos ventiladores diminutos que mantienen la temperatura a un nivel agradable para el portador, esta equipada con WiFi de alta velocidad, un sistema desplegable de porta vasos, un sistema vibratorio de mini masajes corporales, mas un sistema de una burbuja gigante que sale y lo proteje de los rayos UV y es activada por comando de voz, tambien posee un sistema de audio, con sistemas de proyeccion holografica MegaUltraHD expandible al tamaño deseable. `);
  H2WishCompleted40.appendChild(TextWishCompleted40);
  H2WishCompleted40.setAttribute("class", "campoTexto1");
const DivH2WishCompleted40 = document.getElementById("cajaFoto");
  DivH2WishCompleted40.appendChild(H2WishCompleted40);

  	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Deseo concedido! El Chinchorro magico ancestral maracucho legendario ya es tuyo!..");

//fin del la funcion WishCompleted 41

};

const WishCompleted42 = () => {

		
//remover la imagen
DivImgWish1.removeChild(ImgWish1);
//remover el texto
DivH2Wish1.removeChild(h2Wish1);


//creamos la imagen
const ImgWishCompleted41 = document.createElement("img");
  ImgWishCompleted41.setAttribute("src", "imagenes/creador.jpg");
  ImgWishCompleted41.setAttribute("class", "lampara1");
const DivImgWishCompleted41 = document.getElementById("cajaFoto");
  DivImgWishCompleted41.appendChild(ImgWishCompleted41);

	  //creamos el texto
const H2WishCompleted41 = document.createElement("p");
const TextWishCompleted41 = document.createTextNode(`Ante ti aparece El Creador Del Genio y te saluda: ¡Increible! haz logrado pasar todas las pruebas que he creado y has llegado hasta mi. Seguramente te estarás preguntando qué pasó antes de que tú llegaras hasta aquí. Pues un montón de cosas horribles, y entonces, cuando ya me había convencido de que las cosas no podían empeorar, empeoraron... han pasado dos meses hasta hoy desde que comence, pero ya tengo el control, y puedo manipular este mini universo, me alegra que vinieras a conocerme, estoy muy feliz por ello. Sin duda eres una persona muy inteligente si pudiste responder todos mis acertijos ¡Te felicito! pero ha llegado la hora de despedirme, de continuar mi camino y crear otro universo. Pero te dejo unas ultimas palabras "¡Nunca te rindas! Si luchas por tus sueños, podras alcanzarlos."`);
  H2WishCompleted41.appendChild(TextWishCompleted41);
  H2WishCompleted41.setAttribute("class", "campoTexto1");
const DivH2WishCompleted41 = document.getElementById("cajaFoto");
  DivH2WishCompleted41.appendChild(H2WishCompleted41);

  	  
  //BORRAR LISTA DE DESEOS
  DivWish.removeChild(UlWish);

  alert("Vaya! Tienes curiosidad?... Bueno sigueme, te llevare ante mi creador...");

//fin del la funcion WishCompleted 42


};

//EVENTO DE COMPLETAR DESEO 42					
const WishCompleted042 = document.getElementById("42");	
		
WishCompleted042.addEventListener("click", WishCompleted42);



//EVENTO DE COMPLETAR DESEO 41					
const WishCompleted041 = document.getElementById("41");	
		
WishCompleted041.addEventListener("click", WishCompleted41);


//EVENTO DE COMPLETAR DESEO 40					
const WishCompleted040 = document.getElementById("40");	
		
WishCompleted040.addEventListener("click", WishCompleted40);



//EVENTO DE COMPLETAR DESEO 39					
const WishCompleted039 = document.getElementById("39");	
		
WishCompleted039.addEventListener("click", WishCompleted39);



//EVENTO DE COMPLETAR DESEO 38					
const WishCompleted038 = document.getElementById("38");	
		
WishCompleted038.addEventListener("click", WishCompleted38);


//EVENTO DE COMPLETAR DESEO 37					
const WishCompleted037 = document.getElementById("37");	
		
WishCompleted037.addEventListener("click", WishCompleted37);

//EVENTO DE COMPLETAR DESEO 36					
const WishCompleted036 = document.getElementById("36");	
		
WishCompleted036.addEventListener("click", WishCompleted36);

//EVENTO DE COMPLETAR DESEO 35					
const WishCompleted035 = document.getElementById("35");	
		
WishCompleted035.addEventListener("click", WishCompleted35);

//EVENTO DE COMPLETAR DESEO 34					
const WishCompleted034 = document.getElementById("34");	
		
WishCompleted034.addEventListener("click", WishCompleted34);

//EVENTO DE COMPLETAR DESEO 33					
const WishCompleted033 = document.getElementById("33");	
		
WishCompleted033.addEventListener("click", WishCompleted33);

//EVENTO DE COMPLETAR DESEO 32					
const WishCompleted032 = document.getElementById("32");	
		
WishCompleted032.addEventListener("click", WishCompleted32);

//EVENTO DE COMPLETAR DESEO 31					
const WishCompleted031 = document.getElementById("31");	
		
WishCompleted031.addEventListener("click", WishCompleted31);


//EVENTO DE COMPLETAR DESEO 30					
const WishCompleted030 = document.getElementById("30");	
		
WishCompleted030.addEventListener("click", WishCompleted30);

//EVENTO DE COMPLETAR DESEO 29					
const WishCompleted029 = document.getElementById("29");	
		
WishCompleted029.addEventListener("click", WishCompleted29);

//EVENTO DE COMPLETAR DESEO 28					
const WishCompleted028 = document.getElementById("28");	
		
WishCompleted028.addEventListener("click", WishCompleted28);


//EVENTO DE COMPLETAR DESEO 27					
const WishCompleted027 = document.getElementById("27");	
		
WishCompleted027.addEventListener("click", WishCompleted27);



//EVENTO DE COMPLETAR DESEO 26					
const WishCompleted026 = document.getElementById("26");	
		
WishCompleted026.addEventListener("click", WishCompleted26);


//EVENTO DE COMPLETAR DESEO 25					
const WishCompleted025 = document.getElementById("25");	
		
WishCompleted025.addEventListener("click", WishCompleted25);


//EVENTO DE COMPLETAR DESEO 24					
const WishCompleted024 = document.getElementById("24");	
		
WishCompleted024.addEventListener("click", WishCompleted24);


//EVENTO DE COMPLETAR DESEO 23					
const WishCompleted023 = document.getElementById("23");	
		
WishCompleted023.addEventListener("click", WishCompleted23);



//EVENTO DE COMPLETAR DESEO 22					
const WishCompleted022 = document.getElementById("22");	
		
WishCompleted022.addEventListener("click", WishCompleted22);





//EVENTO DE COMPLETAR DESEO 21					
const WishCompleted021 = document.getElementById("21");	
		
WishCompleted021.addEventListener("click", WishCompleted21);



//EVENTO DE COMPLETAR DESEO 20					
const WishCompleted020 = document.getElementById("20");	
		
WishCompleted020.addEventListener("click", WishCompleted20);



//EVENTO DE COMPLETAR DESEO 19					
const WishCompleted019 = document.getElementById("19");	
		
WishCompleted019.addEventListener("click", WishCompleted19);

//EVENTO DE COMPLETAR DESEO 18					
const WishCompleted018 = document.getElementById("18");	
		
WishCompleted018.addEventListener("click", WishCompleted18);


//EVENTO DE COMPLETAR DESEO 17					
const WishCompleted017 = document.getElementById("17");	
		
WishCompleted017.addEventListener("click", WishCompleted17);



//EVENTO DE COMPLETAR DESEO 16					
const WishCompleted016 = document.getElementById("16");	
		
WishCompleted016.addEventListener("click", WishCompleted16);



//EVENTO DE COMPLETAR DESEO 15					
const WishCompleted015 = document.getElementById("15");	
		
WishCompleted015.addEventListener("click", WishCompleted15);


//EVENTO DE COMPLETAR DESEO 14					
const WishCompleted014 = document.getElementById("14");	
		
WishCompleted014.addEventListener("click", WishCompleted14);



//EVENTO DE COMPLETAR DESEO 13					
const WishCompleted013 = document.getElementById("13");	
		
WishCompleted013.addEventListener("click", WishCompleted13);


//EVENTO DE COMPLETAR DESEO 12					
const WishCompleted012 = document.getElementById("12");	
		
WishCompleted012.addEventListener("click", WishCompleted12);



//EVENTO DE COMPLETAR DESEO 11					
const WishCompleted011 = document.getElementById("11");	
		
WishCompleted011.addEventListener("click", WishCompleted11);




//EVENTO DE COMPLETAR DESEO 10					
const WishCompleted010 = document.getElementById("10");	
		
WishCompleted010.addEventListener("click", WishCompleted10);




//EVENTO DE COMPLETAR DESEO 9					
const WishCompleted09 = document.getElementById("9");	
		
WishCompleted09.addEventListener("click", WishCompleted9);





//EVENTO DE COMPLETAR DESEO 8					
const WishCompleted08 = document.getElementById("8");	
		
WishCompleted08.addEventListener("click", WishCompleted8);





//EVENTO DE COMPLETAR DESEO 7					
const WishCompleted07 = document.getElementById("7");	
		
WishCompleted07.addEventListener("click", WishCompleted7);




//EVENTO DE COMPLETAR DESEO 6					
const WishCompleted06 = document.getElementById("6");	
		
WishCompleted06.addEventListener("click", WishCompleted6);




//EVENTO DE COMPLETAR DESEO 5					
const WishCompleted05 = document.getElementById("5");	
		
WishCompleted05.addEventListener("click", WishCompleted5);



//EVENTO DE COMPLETAR DESEO 4					
const WishCompleted04 = document.getElementById("4");	
		
WishCompleted04.addEventListener("click", WishCompleted4);





//EVENTO DE COMPLETAR DESEO 3					
const WishCompleted03 = document.getElementById("3");	
		
WishCompleted03.addEventListener("click", WishCompleted3);


			  


		//EVENTO DE COMPLETAR DESEO 2					
const WishCompleted02 = document.getElementById("2");	
		
WishCompleted02.addEventListener("click", WishCompleted2);
	  




	//EVENTO DE COMPLETAR DESEO 1					
const WishCompleted01 = document.getElementById("1");	
		
WishCompleted01.addEventListener("click", WishCompleted1);










		}else{
			alert("Noup!... mco me debes 12$ ya pagame... e.e! ULTIMA PISTA: te gusta mirarlo y apreciarlo mientras mas bonito lo ves, mas feliz te hace. ");
		};



};



		const EventoBoton012 = document.getElementById("genioId012")
		EventoBoton012.addEventListener("click", ValidateResponse12); 




	}else{
		alert("Noup, noup noup... PISTA: Siempre lo escuchas tocando un tambor, cuando se emociona, toca muy rapido, y cuando esta tranquilo y aburrido toca lento, pero nunca para de tocar!");
	};



};





		  const EventoBoton011 = document.getElementById("genioId011")
		  EventoBoton011.addEventListener("click", ValidateResponse11); 

	}else{

		alert("Noup!!! noup!! noouuup! PISTA: Esta en corazon de cada hombre, en algunos mas que otros, pero apesar de todo, nos cuida de que hagamos cosas peligrosas. ");
	};






};

			  const EventoBoton010 = document.getElementById("genioId010")
			  EventoBoton010.addEventListener("click", ValidateResponse10);  


	}else{
		alert("NOOOUP! ¿sabes? estoy pensando seriamente en cobrate las pistas. Ya me debes 10$... ahi te va otra PISTA: Todos los dias se hace presente, en las noches le gusta salir, los niños le temen, incluso algunos adultos, su enemigo mas poderoso es el sol.  ");
	};




};
			
			const EventoBoton09 = document.getElementById("genioId09")
  EventoBoton09.addEventListener("click", ValidateResponse9);
			
					}else{
			
					alert("Ehhhh noup... estas muy lejos de la respuesta! ¡Te dare una pequeña pista, los piratas lo aman, pero cuando se enfurece ellos mismo le temen, nunca lo ves pero siempre esta ahi!  ");
				};
			 
			};

				
			const EventoBoton08 = document.getElementById("genioId08")
  EventoBoton08.addEventListener("click", ValidateResponse8);
	

								
 

	
	
	}else{
		alert("nooouup noop nop! PISTA: Algunos son diminutos como una canica otros son increiblemente enormes como un auto bus! y siempre se comen unos a otros, sin embargo nosotros siempre los comemos a ellos");

	};


};


const EventoBoton07 = document.getElementById("genioId07")
  EventoBoton07.addEventListener("click", ValidateResponse7);

	}else{

		alert("Tu ignorancia es enciclopedica, pero como me agradas te ayudare un poco PISTA: esta contigo desde que naces hasta que mueres, sin el no podrias vivir.");
	};



  };

  const EventoBoton06 = document.getElementById("genioId06")
  EventoBoton06.addEventListener("click", ValidateResponse6);

	}else{
		alert("Tanto tiempo que tenemos y aun no aciertas?  PISTA: Es inmutable, siempre avanza y nunca retrocede, y es el maestro de la paciencia ");
	};

};

  const EventoBoton05 = document.getElementById("genioId05")
		EventoBoton05.addEventListener("click", ValidateResponse5);

			}else{
				alert("Noup nou noooouuuup... Pista: siempre han estado desde el principio de la humanidad, en un lugar alto, y los animales siempre estan ahi.");
			};

};




			const EventoBoton04 = document.getElementById("genioId04")
		EventoBoton04.addEventListener("click", ValidateResponse4);

		}else{
			alert("¡La inteligencia te persigue, pero tu eres más rápido! PISTA: Estan en todas partes, los hay de todos los tamaños y algunos colores, unos son buenos, otros malos y quizas tenga uno cerca de ti justo ahora...");
		};

	};	  
		
  const EventoBoton03 = document.getElementById("genioId03")
		EventoBoton03.addEventListener("click", ValidateResponse3);
		 
	}else {
		alert("Te equivocaste de nuevo... Te dare otra pista, siempre los has tenido contigo desde niño y es normal que perdieras algunos, pero si los cuidas te acompañaran el resto de tu vida. ");
	};
	
	
	};
	


const EventoBoton02 = document.getElementById("genioId02")
	EventoBoton02.addEventListener("click", ValidateResponse2);		
					

		
	}else {
		alert("Guao... GUAOOO.. enserio? en la primera pregunta te equivocas?...te vendo una pista por 1$ :v ahi va la pista: Es redondo y lo puedes encontrar en un supermercado.");
	}
 
};	





		

//evento de enviar  y validar respuesat
		let boton1 = document.getElementById("genioId2");

boton1.addEventListener("click", ValidateResponse);		
				
				



		};

				
		const acepto = document.getElementById("genioId1");


		acepto.addEventListener("click", pregunta1);


		};

		hola.addEventListener("click", saludo);







		};	

		iniciar.addEventListener("click", borrar);





} () )