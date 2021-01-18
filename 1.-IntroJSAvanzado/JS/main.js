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

	// Seleccionamos el body para crear en su interior los elementos que crearemos a continuación
	let body = document.querySelector("body");
	console.log("Tenemos el body:", body);

	// Declaramos la puntuación y la inicializamos a 0
	let score = 0;

	// Creamos un botón con el texto "Incrementar puntuación"
	let btnIncrement = document.createElement("button");
	btnIncrement.innerText = "Incrementar puntuación";

	// Creamos un botón con el texto "Ver máxima puntuación"
	let btnGetHighScore = document.createElement("button");
	btnGetHighScore.innerText = "Ver máxima puntuación";

	// Creamos un botón con el texto "Guardar puntuación"
	let btnSaveScore = document.createElement("button");
	btnSaveScore.innerText = "Guardar puntuación";

	// Cremos un párrafo con el texto ${score} (El valor de la variable score)
	let currentScore = document.createElement("p");
	currentScore.innerText = score;

	// Agregamos todos los elementos al body
	body.appendChild(btnIncrement);
	body.appendChild(btnGetHighScore);
	body.appendChild(btnSaveScore);
	body.appendChild(currentScore);


	// Una vez se hace click en el botón de incrementar se suma 10 a la puntuación
	// Y se actualiza el innerText del párrafo
	btnIncrement.addEventListener("click", function () {
		score += 10;
		currentScore.innerText = score;
	});

	// Cuando se hace click ene el botón de obtener la máxima puntuación, lo obtenemos del localStorage
	btnGetHighScore.addEventListener("click", function () {
		console.group("Acción del botón getHighScore");

		let highScore = localStorage.getItem("highScore");
		console.log("HighScore del localStorage: %c%s", "color:purple", highScore);

		console.groupEnd();
	});

	// Cuando se hace click en el botón de guardar puntuación lo guardamos en el localStorage si es mayor
	// que el que estaba previamente guardado
	btnSaveScore.addEventListener("click", function () {
		console.group("Acción del botón btnSaveScore");
		let highScore = localStorage.getItem("highScore");
		console.log("Obtenemos el valor del actual highScore %c%s", "color:purple", highScore);
		if (score > highScore) {
			localStorage.setItem("highScore", score);

			console.log("Como la puntuación actual es mayor que la guardada, guardamos esta nueva puntuación");
			// Imprimimos la puntuación del localStorage para que se vea que se ha cambiado
			console.log("La nueva puntuación es: %c%s", "color:green", localStorage.getItem("highScore"));
		}
		else {
			console.log("Como la puntuación es menor, no la guardamos");
			console.log("Tienes %c%s%c puntos, pero la puntuación sigue siendo %c%s", "color:red", score, "color:black", "color:green", localStorage.getItem("highScore"));
		}
		console.groupEnd();
	});

	console.groupEnd();
}

{
	console.group("Guardando objetos en el webStorage")

	// Para guardar un objeto en el localStorage o sessionStorage es necesario stringificarlo (convertirlo a string)
	// Para ello usamos el método JSON.stringify();
	localStorage.setItem("storedObject", JSON.stringify({ nombre: "Miguel" }))

	// Vamos a ver que valor se ha guardado
	let objectFromLocalStorage = localStorage.getItem("storedObject");
	console.log("El valor guardado es un string: %c%s", "color:orange", objectFromLocalStorage);

	// El objeto, no es un objeto, es un string, por ello debemos convertirlo a JSON parseandolo:
	// JSON.parse(string);
	console.log("Para verlo como JSON, debemos parsarlo");
	let convertedToObject = JSON.parse(objectFromLocalStorage);
	console.log("Una vez parseado queda como:", convertedToObject);

	console.log("También se pueden parsear arrays: %o => %c%s", [1, 2, 3], "color: orange", JSON.stringify([1, 2, 3]));

	console.groupEnd();
}