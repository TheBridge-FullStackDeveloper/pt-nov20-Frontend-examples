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

	constructor(name) {
		super(name, "Perro");
		this.timeToDeath = Math.random() * 10000000000;
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


class Termometro {
	constructor(temperatura) {
		// K
		this.temperatura = temperatura;
		this.count = 0;
		this.changes = 0;
		this._color = "inherit";
	}

	/*
		getters
			Métodos que se comportan como propiedades
				2 diferencias:
					1) Que a la hora de llamarlo no pongo los ()
					2) No puede tener parámetros
	*/
	get temperaturaCelsius() {
		this.count++;
		return this.temperatura - 273;
	}

	get temperaturaFarenheit() {
		return this.temperaturaCelsius * 1.8 + 32;
	}

	/*
		setters
			Métodos que se comportan como propiedades
				2 diferencias:
					1) Que a la hora de llamarlo no pongo los ()
					2) Solo pueden tener 1 parámetro, se va a dar con un =
	*/
	set setTemperatura(nuevaTemperatura) {
		this.changes++;
		this.temperatura = nuevaTemperatura;
	}

	get color() {
		return this._color;
	}

	set color(newColor) {
		this._color = newColor	;
	}
}

let termometro = new Termometro(295);
console.log(termometro.temperaturaCelsius);
console.log(termometro.temperaturaFarenheit);

termometro.setTemperatura = 100;

console.log(termometro.temperaturaCelsius);
console.log(termometro.temperaturaFarenheit);

console.log(termometro.count);
console.log(termometro.changes);


console.log(termometro.color);
termometro.color = "red";
console.log(termometro.color);



const person = {
	fechaNacimiento: 2001,
	get edad() {
		return new Date().getFullYear() - this.fechaNacimiento;
	},
	set edad(nuevaEdad) {
		this.fechaNacimiento = new Date().getFullYear() - nuevaEdad;
	},

	crecer: () => {

	}
}

console.log(person.edad);
person.edad = 22;
console.log(person.fechaNacimiento);
