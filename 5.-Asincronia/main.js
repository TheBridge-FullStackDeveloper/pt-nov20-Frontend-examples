{
	/*
		Hasta ahora, tan solo habíamos utilizado código síncrono, el cual se ejecutaba en el mismo orden de
		declaración.
	*/
	console.group("Código síncrono");

	// El siguiente código siempre imprimirá: 1 2 3
	console.log(1);
	console.log(2);
	console.log(3);

	console.groupEnd();

}
{
	console.group("Código síncrono con funciones");
	/*
		Como mucho, nos hemos podido encontrar con código que se ejecute en un orden diferente, pero
		siga un orden lógico
	*/
	function saludar(nombre) {
		console.log(`Hola ${nombre}`)
	}

	/*
		Estamos seguros de que el siguiente código siempre imprimirá:
			Saludando a Clara
			Hola Clara
			Clara ha sido saludada
		a pesar de que la función haya sido declarada antes
	*/
	console.log("Saludando a Clara")
	saludar("Clara");
	console.log("Clara ha sido saludada");

	console.groupEnd();
}
{
	/*
		Pero entonces aparecen los eventos, los cuales no hacen el código asíncrono, pero no podemos
		preveer cuando se ejecutará dicho código
	*/
	const button = document.createElement("button");

	/*
		En este caso estamos seguros de que existen solo 2 opciones:
			El usuario puede presionar el botón
			El usuario puede o puede que no haya presionado el botón
			[Cuando el usuario presione el botón:]
				El botón ha sido presionado
		o:
			El usuario puede presionar el botón
			[El usuario presiona el botón:]
				El botón ha sido presionado
			El usuario puede o puede que no haya presionado el botón
	*/
	console.log("El usuario puede presionar el botón");
	button.addEventListener("click", () => console.log("El botón ha sido presionado"));
	console.log("El usuario puede o puede que no haya presionado el botón")
}
{
	/*
		La primera forma de asincronía, son las llamadas por callback.


		Con la asincronía, no se puede saber cual es el orden, porque son funciones
		NO BLOQUEANTES las cuales no interfieren con el resto del código, por lo cual, pueden imprimirse
		en cualquier orden
	*/

	// ! Imprimo por delante "setTimeOuts" en azul para se que vea cual es cual

	// Un ejemplo básico sería el setTimeOut
	console.log("%csetTimeOuts:%c Pre setTimeOut", "color: blue", "color: inherit");
	setTimeout(() => {
		console.log("%csetTimeOuts:%c Inside setTimeOut", "color: blue", "color: inherit");
	}, Math.random() * 100);
	console.log("%csetTimeOuts:%c Post setTimeOut", "color: blue", "color: inherit");
}
{
	// Otro ejemplo podrían ser varios setTimeOuts

	setTimeout(() => {
		console.log("%csetTimeOuts2%c A", "color: green", "color: inherit");
	}, Math.random() * 10);

	setTimeout(() => {
		console.log("%csetTimeOuts2%c B", "color: green", "color: inherit");
	}, Math.random() * 10);

	setTimeout(() => {
		console.log("%csetTimeOuts2%c C", "color: green", "color: inherit")
	}, Math.random() * 10)
}
{
	/*
		Debido al callback hell surgen las promesas, un objeto que "nos hará la vida más fácil"

		La teoría es simple, la promesa es una función asíncrona que tiene 3 estados:
			* No resuelta
			* Resuelta
			* Rechazada
		Mientras se encuentra sin resolver el código continua sin importarle la promesa, y en el momento
		en el que se resuelve, se ejecuta el método:
			.then(data => {
				// The function body
			});
		Si la promesa se rechaza, se ejecuta el método:
			.catch(error => {
				// The error function body
			});
	*/

	// Definimos la promesa
	let promise = new Promise((resolve, reject) => { // En este caso no se rechaza nunca
		setTimeout(() => {
			resolve("Promise finished");
		}, 1000);
	});

	// Cuando la promesa se resuelve (en este caso cuando termine el timeOut)
	promise.then(message => {
		console.log("%cFirstPromise%c La promesa ha sido resuelta con %c%s", "color: yellow", "color: inherit", "color: green", message);
	})
}

{
	// Vamos a hacer una función que retorne una promesa
	function promiseGenerator() {
		return new Promise((resolve, reject) => {
			let time1 = Math.random() * 1000;
			let time2 = Math.random() * 1000;
			// Si el time1 es menor que el time2, se ejecutará el resolve primero, por lo que la promesa resuelve
			setTimeout(() => resolve(`Resuelto en ${time1}ms`), time1);

			// Si el time2 es menor que el time1, se ejecutará el reject primero, por lo que la promesa rechaza
			setTimeout(() => reject(`Rechazado en ${time2}ms`), time2);
		});
	}

	promiseGenerator()
	.then((msg) => { // Si la promesa se resuelve, se ejecuta esta función
		console.log("%cPromise Generator%c Resuelto: %s", "color: cyan", "color: green", msg)
	})
	.catch((msg) => { // Si la promesa se rechaza, se ejecuta esta otra función
		console.log("%cPromise Generator%c Rechazado: %s", "color: cyan", "color: red", msg)
	});
}
{
	/*
		De momento no hemos encontrado una explicación para usar promesas
		la encontraremos cuando hagamos peticiones a APIs, mientras tanto
		vamos a poner el ejemplo de una función que consuma muchos recursos (tiempo)

		En este caso, una función que genere un array inmensamente grande, la cual
		bloquearía el hilo (thread) para generar el array.

		Sin embargo, si hacemos que esta función sea asíncrona no se bloqueará
		el monohilo y ganaremos en eficiencia.
	*/
	function generateArray(n, value) {
		// Retornamos una promesa que resolverá cuando se complete el bucle
		return new Promise((resolve) => {
			const arr = [];
			for (let i = 0; i < n; i++) {
				arr.push(value(i));
			}
			resolve(arr);
		})
	}

	/*
		Si quisieramos convertir la asincronía por promesa en una
		por callback, sería tan fácil como el siguiente ejemplo:
	*/

	// Pedimos una función de callback
	function generateArray2(n, value, callback) {
		// Una vez se resuelve la promesa, llamamos a la función de callback
		generateArray(n, value).then(callback);
	}

	// Si quisiesemos volver a una función de promesa
	// Para aprender a hacer funciones con promesas en lugar de callbacks
	function generateArray3(n, value) {
		// Retornamos una promesa que
		return new Promise(resolve => {
			// Resuelve una vez se llama a la función de callback
			generateArray2(n, value, (arr) => {
				resolve(arr);
			});
		});
	}

	console.log("%cGenerate array%c Generar array:", "color: fuchsia", "color: inherit");
	generateArray3(5000, (i) => i ** 2).then(arr => console.log("%cGenerate array%c %o", "color: fuchsia", "color: inherit", arr));
	console.log("%cGenerate array%c Array Generado (mentira, la anterior es asíncrona)", "color: fuchsia", "color: inherit");
}