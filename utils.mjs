import fs from 'fs';

//clase para representar un superheroe 

class superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }

}

//funcion para leer y ordenar los superheroes 

export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    const superheroes = superheroesArray.map(
        hero => new superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)

    );

    //ordarnar por nombre de superheroe
    superheroes.sort((a, b) => a.nombreSuperheroe.localeCompare(
        b.nombreSuperheroe));

    return superheroes;

}



//nueva funcion para agregar superheroes

export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevoSuperheroes = JSON.parse(datosNuevos);


    //conver los nuevos superheroes a instancias de Superheroe
    const instanciasNuevos = nuevoSuperheroes.map(
        hero => new superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)

    );


    // Combinar listar

    const listaActualizada = [...superheroesOriginales, ...instanciasNuevos];

    //Guardar la lista actualizada

    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2), 'utf8');
    console.log('Lista de superheroes actualizada con exito.');
}
