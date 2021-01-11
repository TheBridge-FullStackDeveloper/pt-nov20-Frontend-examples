/*
	Cuando necesitas en un string concatenar varios datos acabo siendo un proceso
	tedioso todo el rato cerrando comillas y poniendo el más, para ello surgen
	las template strings.

	Te permiten intercalar strings y variables tan fácil como usar las comillas ` y
	meter los valores de variables entre ${}

*/

// Abro un scope nuevo para evitar problemas de variables
{
	//Console.group abre una agrupación en la consola para guardar mensajes
	//en su interior
	console.group("Template Strings");


	// Método antiguo
	let valor = 1;
	let valor2 = 25;
	let msg = "El valor 1 es: " + valor + ", el valor 2 es: " + valor2;
	// Template strings
	let msgTS = `El valor 1 es: ${valor}, el valor 2 es: ${valor2}`;
	console.log("msg normal strings:", msg);
	console.log(`msg template strings: ${msgTS}`);

	// También se pueden usar arrays u objetos
	// Los template strings respetan los saltos de línea
	msg = `El resultado es
${[1, 2, 3]}`;
	console.log(msg);
	console.log("el resultado es\n" + [1, 2, 3]);


	//Console.groupEnd termina la agrupación
	console.groupEnd();
}






{
	console.group("Redireccionamientos y rutas con el objeto window");

	console.group("window.location");
	/*
		window.location

		Puedo hacer muchas cosas:
			* Ver la url
			* Ver el pathname (/login, /contacto...)
			* Redireccionar al usuario
	*/

	/*
		Redirección del usuario a google en la misma pestaña sin necesidad de su interacción


		Descomentar línea de abajo para probarlo
	*/
	// window.location.href = "https://google.com";


	/*
		Leer la ruta completa en la que está el usuario https://google.com/login
		Obtendríamos "https://google.com/login"
	*/
	console.log(window.location.href);


	/*
		Leer la ruta en la que está el usuario https://google.com/login
		Obtendríamos el "/login"
	*/
	console.log(window.location.pathname);


	console.groupEnd();
	/*
		window.open()


		Hacer una redirección:
			* En la misma página
			* En una página en blanco
			* ...
	*/

	// Es necesario lanzarlo con la acción del usuario, puesto que si no, el navegador
	// bloquea el window.open

	// Seleccionamos un botón
	let button = document.querySelector("#openGoogle");

	// Le añadimos un onClick
	button.addEventListener("click", function () {
		window.open("https://google.com");
	});

	console.groupEnd();

}

{
	console.group("webStorage");
	/*
		LocalStorage es una base de datos no relacional
		Es una base de datos "documental"
			(documental significa que se pueden meter JSONs, pero en este caso se pueden
			meter strings, aunque esto nos permite meter JSONs en forma de string)

		localStorage:
			* Crear una entrada               (C)
			* Leerla                          (R)
			* [No la tiene] Actualizar        (U)
			* Eliminarla                      (D)
	*/

	// Establezco el valor de 'myFirstEntry' a 100 en el localStorage
	localStorage.setItem("myFirstEntry", 100);
	console.log("El valor de 'myFirstEntry' en el localStorage es: ", localStorage.getItem("myFirstEntry"));

	// Elimino 'myFirstEntry' del localStorage
	localStorage.removeItem("myFirstEntry");
	console.log("Si elimino 'myFirstEntry' el valor es:", localStorage.getItem("myFirstEntry"))



	/*
		Ejemplo LocalStorage
	*/
	console.log("%cEl localStorage es persistente aunque reiniciemos el ordenador", "color: green");
	console.group("localStorage");
	console.log("%c'persistentValue' = %c%s", "color: blue", "color: violet", localStorage.getItem("persistentValue"));
	// Mensaje si existe 'persistentValue'
	if (localStorage.getItem("persistentValue"))
	{
		console.log("Si elimino 'persistentValue' del localStorage y recargas la página, aparece como null");
		// Elimino 'persistentValue' del localStorage
		localStorage.removeItem("persistentValue");
	}
	//Mensaje si no existe 'persistentValue'
	else {
		console.log("el valor no existe, pero si lo establecemos, por mucho que reiniciemos el ordenador, seguirá apareciendo");
		// Establezco 'persistentValue' en el localStorage
		localStorage.setItem("persistentValue", "Sigo aquí ^^");
	}
	console.log("Valor actualizado: %c'persistentValue' = %c%s", "color: blue", "color: violet", localStorage.getItem("persistentValue"));
	console.groupEnd();



	/*
		Ejemplo SessionStorage
	*/
	console.log("%cEl sessionStorage es persistente aunque reiniciemos el ordenador", "color: green");
	console.group("sessionStorage");
	console.log("%c'nonPersistentValue' = %c%s", "color: blue", "color: violet", sessionStorage.getItem("nonPersistentValue"));
	// Mensaje si existe 'persistentValue'
	if (sessionStorage.getItem("nonPersistentValue"))
	{
		console.log("Si elimino 'nonPersistentValue' del sessionStorage y recargas la página, aparece como null");
		// Elimino 'nonPersistentValue' del sessionStorage
		sessionStorage.removeItem("nonPersistentValue");
	}
	//Mensaje si no existe 'nonPersistentValue'
	else {
		console.log("el valor no existe, pero si lo establecemos, si recargamos, sigue apareciendo, pero si reiniciamos el navegador no");
		// Establezco 'nonPersistentValue' en el sessionStorage
		sessionStorage.setItem("nonPersistentValue", "Sigo aquí ^^");
	}
	console.log("Valor actualizado: %c'nonPersistentValue' = %c%s", "color: blue", "color: violet", sessionStorage.getItem("nonPersistentValue"));
	console.groupEnd();

	console.groupEnd();
}

{
	console.group("Example with DOM and localStorage")

	let body = document.querySelector("body");

	let score = 0;

	let btnIncrement = document.createElement("button");
	btnIncrement.innerText = "Incrementar puntuación";

	let btnGetHighScore = document.createElement("button");
	btnGetHighScore.innerText = "Ver máxima puntuación";

	let btnSaveScore = document.createElement("button");
	btnSaveScore.innerText = "Guardar puntuación";

	let currentScore = document.createElement("p");
	currentScore.innerText = score;


	body.appendChild(btnIncrement);
	body.appendChild(btnGetHighScore);
	body.appendChild(btnSaveScore);
	body.appendChild(currentScore);


	btnIncrement.addEventListener("click", function () {
		score += 10;
		currentScore.innerText = score;
	});

	btnGetHighScore.addEventListener("click", function () {
		let highScore = localStorage.getItem("highScore");
		console.log(highScore);
	});

	btnSaveScore.addEventListener("click", function () {
		let highScore = localStorage.getItem("highScore");
		if (score > highScore)
			localStorage.setItem("highScore", score);
	});


	localStorage.setItem("storedObject", JSON.stringify({ nombre: "Miguel" }))

	let objectFromLocalStorage = localStorage.getItem("storedObject");
	let convertedToObject = JSON.parse(objectFromLocalStorage);
	console.log(convertedToObject);

	// console.log(JSON.stringify({ nombre: "Miguel" }) + "Hola")
	// console.log(JSON.stringify([1, 2, 3]));

	console.groupEnd();
}