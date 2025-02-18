import { leerSuperheroes, agregarSuperheroes } from './utils.mjs';

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

// Agregar nuevos superhéroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista de superhéroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);


console.log('superheroes:');

superheroes.forEach((heroe, index) => {
    console.log(`${index + 1}. ${heroe.nombreSuperheroe}`);
});
