/*
	Hasta ahora, siempre habíamos declarado las funciones igual, con la estructura completa:
		function func_name (parameter1, parameter2, ...) {
			// Body of the function
		}
	Ejemplo:
*/
{

	function sum (a, b) {
		console.log(a + b);
	}

/*
	Pero existe una forma más rápida de declarar funciones: las funciones flecha, la cual tiene alguna ventaja más
	como que mantiene el this del objeto en el que se declaró.

	Su estructura es:
		(parameter1, parameter2, ...) => {
			// Body of the function
		}

	Ejemplo:
*/
	const suma = (a, b) => (a + b)

	console.group("function sum(a, b)");
		sum(1, 2);
	console.groupEnd();
	console.group("const suma = (a, b) => {}");
		console.log(suma(1, 2));
	console.groupEnd();

	// Cuando solo existe 1 parámetro, puedo eliminar los paréntesis
	// Cuando el cuerpo de la función solo hace 1 cosa, se pueden quitar las llaves
	// Si no existen llaves, la función retorna el resultado del body
	const multiply = a => a * 3;

	// La función multiply retorna (a * 3)


}

// Las funciones flecha, son especialmente útiles como callback
addEventListener("click", () => {

})



// Otros ejemplos
console.group("Otros ejemplos");

let p1 = (a, b) => {
	for(let i = 0; i < b; i++)
		a *= b;
	return a;
}

let p2 = (j) => "Hola " + j + "\n";


let msg = p2("Humano");

console.log(msg);

console.groupEnd();