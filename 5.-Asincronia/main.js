// setTimeout(() => {
// 	console.log("a");
// }, 1000);

// setTimeout(() => {
// 	console.log("B");
// }, 800);

// setInterval(() => {
// 	console.log("Llamada al intervalo")
// }, 800)



// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise finished");
// 	}, 1000);
// });


// promise.then((str) => {
// 	console.log("dentro del .then:", str);
// 	return (".then finalizado correctamente")
// }).then((msg) => {
// 	console.log(msg)
// 	console.log("Que el anterior .then se ha resuelto")
// }).catch((error) => {
// 	console.error(error);
// })

function generateArray(n, value) {
	return new Promise((resolve) => {
		const arr = [];

		for (let i = 0; i < n; i++) {
			arr.push(value(i));
		}

		resolve(arr);

	})
}

function generateArray2(n, value, callback) {
	generateArray(n, value).then(callback);
}

function generateArray3(n, value) {
	return new Promise(resolve => {
		generateArray2(n, value, (arr) => {
			resolve(arr);
		});
	});
}



console.log("Generar array:");
generateArray3(5, (i) => i ** 2).then(arr => console.log(arr));
console.log("Array Generado");



function promiseGenerator() {
	return new Promise((resolve, reject) => {
		let time1 = Math.random() * 1000;
		let time2 = Math.random() * 1000;
		setTimeout(() => resolve(`Resuelto en ${time1}`), time1);
		setTimeout(() => reject(`Rechazado en ${time2}`), time2);
	});
}

promiseGenerator()
.then((msg) => console.log("Resuelto:", msg))
.catch((msg) => console.log("Rechazado:", msg));