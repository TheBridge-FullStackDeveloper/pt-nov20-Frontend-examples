const API_KEY = "pk.eyJ1IjoibWlndWVsZXoxMSIsImEiOiJja2tmbXA4cHExY3E0Mm5vYzhlMGRqc3dlIn0.3qkHyNBAjdjzVIxlASMfTg";

const myMap = L.map("mapId").setView([40, -3], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);


navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	myMap.setView([position.coords.latitude, position.coords.longitude], 9);
	const positionMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(myMap);
	positionMarker.on("click", () => {
		console.log("Click");
	})
	positionMarker.bindPopup("Tu posición");

}, (error) => console.error(error));



const polygon = L.polygon([
	[40.45, -3.27],
	[40.40, -3.5],
	[40.8, -3.62]
]).addTo(myMap);

polygon.bindPopup("Una zona aleatoria");

fetch("https://nominatim.openstreetmap.org/search.php?q=Catalunya&polygon_geojson=1&format=json").then(r => r.json()).then(([data]) => {
	L.geoJSON(data.geojson).addTo(myMap);

});