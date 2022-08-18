const personajes = {
  capi: { nombre: "Capitan America", poder: "Escudo" },
  iron: { nombre: "Ironman", poder: "Dinero" },
  spider: { nombre: "Spiderman", poder: "Telaraña" },
};

const heroeId = "capi";


//Funcion de promesa

const promesas = (id) => {

  const heroe = personajes[id];

  return new Promise((resolve, reject) => {
    if (heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un heroe con el id ${heroe}`);
    }
  });
};


//Llamado de la funcion
promesas(heroeId).then((heroe)=>{
    console.log(`Enviando a ${heroe.nombre} a la mision`)
})




