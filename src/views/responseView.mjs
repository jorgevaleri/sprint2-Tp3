//MODULO PARA FORMATEAR LA RESPUESTA DE SUPERHEROES

export function renderizarSuperheroe(superheroe) {
    return {
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos,
        "Cargado Por": superheroe.nombrePersonaCargo  //Agregar el nombre de la persona que lo cargo
    };
}

export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}