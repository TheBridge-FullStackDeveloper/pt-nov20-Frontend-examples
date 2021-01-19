// console.log("Antes")
// fetch("https://pokeapi.co/api/v2/pokemon").then(response => {
// 	console.log(response);
// 	return response.json();
// }).then(data => {
// 	const {results} = data;

// 	results.map(pokemon => {
// 		fetch(pokemon.url).then(response => response.json()).then(data => console.log("Pokemon:", data));
// 	})
// });
// console.log("Después");

// // Cross Origin Resources Sharing

// // Application Programming Interface

// /*
// 	Es un servidor el cual es capaz de atender a peticiones

// 	*GET		protocolo de petición de datos se piden a través de parametros (query params, rest params)
// 	POST	Añadir datos (se mandan en el body (está encriptado))

// 	PUT		Actualizar datos (se mandan en el body (está encriptado))
// 	DELETE	Eliminar datos (se mandan en el body (está encriptado))

// 	Query params:
// 		url/?form=2 => Para todo lo demás
// 		url/ditto/2 => Cuando siempre van a estar todos los datos en el mismo orden
// */



// const cityName = "Madrid";
// const API_KEY = "289db213072c5d6b80129983aae9b570";
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
// .then(response => response.json())
// .then(weatherData => {
// 	console.log(weatherData);
// })


// // http 1.1 Una petición por get con body no se debe realizar

// // http /2014 Toda petición por get que contenga un body debe ser rechazada

// fetch("/rest/params", {
// 	method: "get",
// 	body: JSON.stringify({
// 		key1: 1
// 	}),
// 	headers: {
// 		"Content-Type": "application/json"
// 	}
// })

function paintWeatherData(name, weather) {
	const body = document.querySelector("body");

	// Crear un contenedor para la información
	const container = document.createElement("div");

	// Crear un parrafo para el nombre
	const nameP = document.createElement("p");
	// Poner innertText de nameP
	nameP.innerText = name;
	// container contenga a nameP
	container.appendChild(nameP)

	// Crear un div con cada uno de los elementos de weather y un p con su información
	weather.map(weatherInfo => {
		// Crees el contenedor
		const weatherContainer = document.createElement("div");
		const description = document.createElement("p");

		// Escribir la descripción
		description.innerText = weatherInfo.description;
		// Meter el párrafo dentro del contenedor
		weatherContainer.appendChild(description);

		// container contenga a weatherContainer
		container.appendChild(weatherContainer);

		return weatherContainer;
	});

	body.appendChild(container);
}

function getWeatherData(query) {
	const apiKey = "289db213072c5d6b80129983aae9b570";

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metrics&lang=es`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		const {name, weather} = data;
		paintWeatherData(name, weather);
	});
}

getWeatherData("Chipre");