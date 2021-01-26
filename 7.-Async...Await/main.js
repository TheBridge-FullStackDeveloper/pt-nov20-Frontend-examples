// function getPokemon() {
// 	return new Promise((resolve, reject) => {
// 		fetch("https://pokeapi.co/api/v2/pokemon")
// 		.then(response => response.json())
// 		.then(data => resolve(data))
// 		.catch(error => reject(error));
// 	});
// }

// async...await

// try...catch
// try...catch...finally
async function getPokemon() {
		try {
			const response = await fetch("https://pokeapi.co/api/v2/pokemonn");
			const data = await response.json();

			// for (let i = 0; i < data.results.length; i++) {
			// 	const response = await fetch(data.results[i].url) //.then(response => response.json()).then(data => console.log(data));
			// 	const data2 = await response.json();
			// 	console.log(data);

			// }
			console.log("Datos pedidos")
			return data;
		} catch (error) {
			throw "Datos no encontrados"
		}
}

async function printPokemon() {
	try {
		console.log(await getPokemon());
	}
	catch(e) {
		console.log("Error:", e);
	}
}

console.log("Antes");
printPokemon();
console.log("Después");
// getPokemon().then(pokemons => console.log(pokemons)).catch(error => console.error(error));