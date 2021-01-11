const BODY = document.querySelector("body");

/*
	Tengo que pintar una cuadrícula de 3 X 3

	Varios divs (9 divs)
		un Div es de tipo bloque -> ocupa el 100% del ancho del padre
			Soluciones:
				1) Que sea inline-block
				2) flex

		tengo una fila
			tiene diferentes datos
		tengo otra fila
			con más datos
*/
function drawGrid(size = 3) {
	const board = document.createElement("section");
	board.className = "board";

	for (let i = 0; i < size; i++) {
		const row = document.createElement("div");
		row.className = "row"

		for (let i = 0; i < size; i++) {
			const cell = document.createElement("div");
			cell.className = "cell";

			row.appendChild(cell);
		}

		board.appendChild(row);
	}

	BODY.appendChild(board);
}


/*
	Generar 2 inputs
	Pintar un botón

	que cuando se pulse un botón
		si ambos inputs están rellenos
			se pinte la cuadrícula
		si no
			Mostrar un error
*/

function getPlayerNames() {
	//Declaraciones
	const wrapper = document.createElement("section");

	const label1 = document.createElement("label");
	const label2 = document.createElement("label2");

	const name1Input = document.createElement("input");
	const name2Input = document.createElement("input");

	const button = document.createElement("button");

	//Declaración de contenido
	label1.innerText = "Nombre primer jugador";
	label2.innerText = "Nombre segundo jugador";

	name1Input.placeholder = "Ingrese un nombre";
	name2Input.placeholder = "Ingrese un nombre";

	button.innerText = "Comenzar a jugar"

	// name1
	wrapper.appendChild(label1);
	wrapper.appendChild(name1Input);

	//name2
	wrapper.appendChild(label2);
	wrapper.appendChild(name2Input)

	//button
	wrapper.appendChild(button);

	//Añado el contenedor al body
	BODY.appendChild(wrapper);


	// Interacción del usuario
	button.addEventListener("click", () => {
		const name1 = name1Input.value;
		const name2 = name2Input.value;

		/*
			"" === false
			"con cosas dentro" === true
		*/
		if (name1 && name2) {
			wrapper.remove();
			drawGrid();
		}
		else
			console.log("No has introducido ambos nombres");
	});

}




// Lo primero que se va a ejecutar
getPlayerNames();