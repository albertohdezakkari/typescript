import { Pelicula } from "./pelicula.js";
// tsc watch
const pelicula = new Pelicula(1, "Pulp Fiction", "Quentin Tarantino", 1994);
console.log(`ID: ${pelicula.id}`);
console.log(`Título: ${pelicula.titulo}`);
console.log(`Director: ${pelicula.director}`);
console.log(`Año: ${pelicula.anio}`);
console.log("---------------------------");

// Obtén una referencia al elemento div
const peliculaInfoDiv = document.getElementById("peliculaInfo");

// Crea un elemento de párrafo para cada detalle de la película
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

// Agrega los elementos de párrafo al div
if(peliculaInfoDiv!== null){
    peliculaInfoDiv.appendChild(idParrafo);
    peliculaInfoDiv.appendChild(tituloParrafo);
    peliculaInfoDiv.appendChild(directorParrafo);
    peliculaInfoDiv.appendChild(anioParrafo);
    peliculaInfoDiv.appendChild(separadorParrafo);
}
