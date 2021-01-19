/*
	Array Methods:

	.map
	.filter
	.reduce
	.sort
*/

{
	console.group("typeof");

	/*
	Hay veces en las que necesitamos no solo comprobar el valor de una variable, si no que también
	puede llegar a ser imprescindible saber su tipo, para ello existe un operador especial

	typeof

	typeof es un operador que nos da el tipo de dato de dicha variable, veamos su uso:
	*/

	// Strings
	const str = "Hola"
	console.log("typeof str = %c%s", "color: orange", typeof str);

	// Numbers
	const nbr = 1;
	console.log("typeof nbr = %c%s", "color: orange", typeof nbr);

	// Objects
	const json = {a: 1};
	console.log("typeof json = %c%s", "color: orange", typeof json);

	const array = [1, 2, 3];
	console.log("typeof array = %c%s", "color: orange", typeof array);

	// Como podemos ver, para las estructuras complejas no nos sirve el typeof
	console.info("Como podemos ver, para las estructuras complejas no nos sirve el typeof");

	console.log("Ejemplo útil:")

	function suma(a, b) {
		// Comprobamos si a y b son números
		if (typeof a === "number" && typeof b === "number")
			return a + b;
		// Si no, retornamos Not a Number
		return NaN;
	}

	console.log("suma(1, 2) =", suma(1, 2));
	console.log("suma(2, 'a') =", suma(2, "a"));
	console.log("suma('a', 2) =", suma("a", 2));

	console.groupEnd();
}

{
	console.group("Check if is array");

	// Solo podemos saber si un objeto es un array, para ello usamos un método de la clase Array
	console.info("Solo podemos saber si un objeto es un array, para ello usamos un método de la clase Array");

	const array = [1, 2, 3];
	console.log("Array.isArray(array) = %c%s", "color: orange", Array.isArray(array));

	console.groupEnd();
}


{
	console.group("Array methods");
	/*
		Trabajar con arrays es muy cómodo, al menos si conoces los métodos adecuados, aquí tienes
		un ejemplo de unos pocos:
	*/

	{
		console.group("includes");
			/*
				[].includes permite buscar si un elemento dentro del array

				Su uso sería igual dentro de un string, para buscar strings
			*/
			const json = {a: 1}
			const array = ["hola", 3, json, [], "adios"];

			console.log(array);

			console.log("array.includes('hola') =", array.includes("hola"));
			console.log("array.includes(3) =", array.includes(3));
			console.log("array.includes({a: 1}) =", array.includes({a: 1}));
			console.info("No incluye al json, porque son diferentes, si buscamos el mismo, dará true");
			console.log("array.includes(json) =", array.includes(json));

		console.groupEnd();
	}

	{
		console.group("indexOf");
			/*
				[].indexOf permite buscar donde se encuentra un elemento en un array
				Si no encuentra al elemento, devuelve -1

				Su uso sería igual dentro de un string, para buscar strings
			*/
			const json = {a: 1}
			const array = ["hola", 3, json, [], "adios"];

			console.log(array);

			console.log("array.indexOf('hola') =", array.indexOf("hola"));
			console.log("array.indexOf(3) =", array.indexOf(3));
			console.log("array.indexOf({a: 1}) =", array.indexOf({a: 1}));
			console.info("No incluye al json, porque son diferentes, si buscamos el mismo, dará su posición");
			console.log("array.indexOf(json) =", array.indexOf(json));

		console.groupEnd();
	}

	{
		console.group("join");

		/*
			Habrá ocasiones en las que quieras formar un string con el contenido del array,
			para ello podrás usar [].join

			[].join acepta como parámetro un separador para el string resultante
		*/

		const array = ["Hola", "Qué", "Tal", 42];
		console.log(array);

		console.log("array.join() = %c%s", "color: orange", array.join());
		console.log("array.join(' ') = %c%s", "color: orange", array.join(" "));
		console.log("array.join(', ') = %c%s", "color: orange", array.join(", "));
		console.log("array.join(';') = %c%s", "color: orange", array.join(";"));

		console.groupEnd();
	}

	{
		console.group("split");

		/*
			Puedes tener el caso contrario, un string que quieras partir en un array

			[].split une un string en un array, para ello puedes dar un delimitador
		*/

		const string = "Hola, ¿qué tal estás?; yo bien"
		console.log(string);

		console.log("string.split() = %c%s", "color: orange", string.split());
		console.log("string.split(' ') = %c%s", "color: orange", string.split(" "));
		console.log("string.split(', ') = %c%s", "color: orange", string.split(", "));
		console.log("string.split(';') = %c%s", "color: orange", string.split(";"));

		console.groupEnd();
	}


	console.groupEnd();
}

// // /*
// // 	["Hola", "Mundo", "Cruel"]
// // 	tiene el string "Bonito"?
// // */
// // let arr = ["Hola", "Mundo", "Bonito", "Y", "Bonito", "Cruel"];

// // // // Encontrar la posición en la que se encuentra
// // // // Si no lo encuentra retorna -1
// // // // Si lo encuentra retorna su posición
// // // console.log(arr.lastIndexOf("Bonito"));
// // // console.log("Hola Bonito".indexOf("Bonito"));

// // // /*
// // // 	Determina si existe o no en el "array"
// // // */
// // // console.log(arr.includes("Mundo"));
// // // console.log("Hola Mundo bonito y Cruel".includes("Mundo"));



// // // "Hola clase del Part Time" => ["Hola", "Clase", "Del", "Part", "Time"];
// // let str = "Hola clase del Part Time";
// // console.log(str.split(" "));

// // console.log(["Hola", "Clase", "Del", "Part", "Time"].join(" "));


// // //  NO FUNCIONA
// // // for (let i = 0; i < arr.length; i++) {
// // // 	if (arr[i] === "Bonito")
// // // 		console.log("Contiene bonito");
// // // 	else if (i === arr.length - 1)
// // // 		console.log("No contiene bonito");

// // // }

// // console.log([5,4,3,6,8,7,1,2, 12].sort((a, b) => {
// // 	return a - b;
// // }));

// // let people = [{
// // 	"name": "Pepe",
// // 	"age": 2
// // }, {
// // 	"name": "Jaime",
// // 	"age": 8
// // }, {
// // 	"name": "Gema",
// // 	"age": 5
// // }];

// // console.log(people.sort((a, b) => a.age - b.age));

// // /*
// // 	Ordenar array de forma aleatoria
// // */


// /*
// 	[].map
// 		es un método que itera sobre un array
// 		efectua una función sobre cada elemento
// 		retorna un array resultante de dicha función
// */

// let arr = [1, 2, 3, 4, 5];

// let result = arr.map((element, position, arr) => {
// 	console.log("element:", element, "position:", position, "arr:", arr);
// 	return "El elemento es: " + element;
// })
// console.log("result:", result);

// let resultX2 = arr.map((element) => element * 2)
// console.log("resultX2:", resultX2);





// let people = [
// 	{
// 		name: "Pepe",
// 		age: 12,
// 		favourite: "English"
// 	},
// 	{
// 		name: "Gema",
// 		age: 15,
// 		favourite: "French"
// 	},
// 	{
// 		name: "Sara",
// 		age: 8,
// 		favourite: "Maths"
// 	},
// 	{
// 		name: "José",
// 		age: 19,
// 		favourite: "Maths"
// 	}
// ]

// const PeopleElements = people.map((person) => {
// 	const div = document.createElement("div");
// 	const pName = document.createElement("p");
// 	const pAge = document.createElement("p");
// 	const pFavourite = document.createElement("p");

// 	pName.innerText = person.name;
// 	pAge.innerText = person.age;
// 	pFavourite.innerText = person.favourite;

// 	div.appendChild(pName);
// 	div.appendChild(pAge);
// 	div.appendChild(pFavourite);
// 	document.querySelector("body").appendChild(div);

// 	return div;
// });

// console.log(PeopleElements);



// /*
// 	[].filter
// 		Va a recibir una función como parámetro
// 		Y va a obtener un array resultante con los elementos que retornaron true
// */

// const agedPeople = people.filter((person) => person.age >= 18);
// console.log(agedPeople);


// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((element) => {
// 	return (element % 2 === 0);
// }));


/*
	[].reduce
		dado un array itera sobre cada elemento y almacena entre llamada y llamada (entre cada elemento) un valor, siendo este
		el retornado por cada elemento
*/
// let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = values.reduce((accum, element, position, array) => {
// 	console.log("accum:", accum, "element:", element, "position:", position, "array:", array);
// 	return accum + element;
// }, 0);

// let resultX = values.reduce((acum, element) => acum * element);




let people = [
	{
		name: "Pepe",
		age: 12,
		favourite: "English",
	},
	{
		name: "Gema",
		age: 15,
		favourite: "French"
	},
	{
		name: "Sara",
		age: 8,
		favourite: "Maths"
	},
	{
		name: "José",
		age: 19,
		favourite: "Maths"
	}
]

const result = people.filter(person => person.age < 18).map(person => {
	return {
		...person,
		underAged: true
	}
}).reduce((totalAges, person) => totalAges + person.age, 0);
console.log(result);


