import { Pelicula } from "./pelicula.js";
const pelicula = new Pelicula(1, "Pulp Fiction", "Quentin Tarantino", 1994);
console.log(`ID: ${pelicula.id}`);
console.log(`Título: ${pelicula.titulo}`);
console.log(`Director: ${pelicula.director}`);
console.log(`Año: ${pelicula.anio}`);
console.log("---------------------------");
const peliculaInfoDiv = document.getElementById("peliculaInfo");
const idParrafo = document.createElement("p");
idParrafo.textContent = `ID: ${pelicula.id}`;
const tituloParrafo = document.createElement("p");
tituloParrafo.textContent = `Título: ${pelicula.titulo}`;
const directorParrafo = document.createElement("p");
directorParrafo.textContent = `Director: ${pelicula.director}`;
const anioParrafo = document.createElement("p");
anioParrafo.textContent = `Año: ${pelicula.anio}`;
const separadorParrafo = document.createElement("p");
separadorParrafo.textContent = "---------------------------";
if (peliculaInfoDiv !== null) {
    peliculaInfoDiv.appendChild(idParrafo);
    peliculaInfoDiv.appendChild(tituloParrafo);
    peliculaInfoDiv.appendChild(directorParrafo);
    peliculaInfoDiv.appendChild(anioParrafo);
    peliculaInfoDiv.appendChild(separadorParrafo);
}
