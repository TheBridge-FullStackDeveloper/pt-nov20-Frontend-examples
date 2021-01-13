// let json = {
// 	nombre: "Pancho",
// 	edad: 3,
// 	caminar: () => {}
// }

// let perro1 = una copia de un perro y este se llama Pancho, tiene 4 años
// let perro2 = una copia de un perro y este se llame Lola, tiene 8 años

// JavaScript Object Notation

class Animal {
	constructor(name, type) {
		console.log("Esto es el constructor");
		// this es la referencia al objeto
		// this.
		// self.
		this.name = name;
		this.type = type;
	}

	walk() {
		console.log(this.name, "está caminando");
	}
}

class Perro extends Animal {
	#timeToDeath;

	constructor(name) {
		super(name, "Perro");
		this.#timeToDeath = Math.random() * 10000000000;
	}

	bark() {
		console.log("Woof Woof");
	}
}

// Instanciación del objeto
let perro = new Animal("Juan", "Perro");

console.log("Perro", perro);
console.log("Nombre del Perro", perro.name);


let perro2 = new Animal("Juana", "Perro");

console.log("Perro", perro2);
console.log("Tipo del Perro2", perro2.type);

perro2.walk();

let perro3 = new Perro("Sultán");
perro3.walk();
perro3.bark();
console.log("Perro3", perro3);

// let perroJSON = {
// 	nombre: "Juan"
// }
// console.log("PerroJSON", perroJSON);
// let perroJSON2 = {
// 	nombre: "Juana"
// }
// console.log("PerroJSON2", perroJSON2);


// console.log(a);
// let a = 1;
// hoisting()
// function hoisting() {
// 	console.log("Me he ejecutado")
// }