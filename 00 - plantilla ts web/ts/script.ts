/*import AllPokemon from "./lib/pokemons/all-pokemon.js";
import ButtonEvents from "./lib/buttons/buttons-event.js";

const fetchPokemon: AllPokemon = new AllPokemon("https://pokeapi.co/api/v2/pokemon");
const buttonEvents: ButtonEvents = new ButtonEvents();
*/
import { Pelicula } from "./pelicula.js";
// tsc watch
const pelicula = new Pelicula(1, "Pulp Fiction", "Quentin Tarantino", 1994);
console.log(`ID: ${pelicula.id}`);
console.log(`Título: ${pelicula.titulo}`);
console.log(`Director: ${pelicula.director}`);
console.log(`Año: ${pelicula.anio}`);
console.log("---------------------------");
