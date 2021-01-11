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

