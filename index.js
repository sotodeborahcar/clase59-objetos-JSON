// {
// obtejo
// }

const fantasma = {
  nombre: "Casper",
  edad: 250,
  leGustaAsustar: true,
};

// fantasma.esElDeGosh = false; //me permite acceder a ese dato en especifico.

// console.log(fantasma);

// // "DELETE "=> elimina el array

// delete fantasma.edad;

// console.log(fantasma);

// // para chequear si existen esas propiedades propiedades => "in"
// operador como + o -

// "nombre" in fantasma; // "true"

// // con ello me permite chequear si existe una propiedad o no con false o true
// console.log("edad" in fantasma);

// // if ("edad" in fantasma) {
// ejemplo de pregunta dentro del if
// // }

// const edades = [1, 2, 3, 4, 5];
// console.log(edades);
// const copiaDeEdades = edades;

// copiaDeEdades.push(9999);

// console.log(edades);
// console.log(copiaDeEdades);

// const copiaDeFantasma = { ...fantasma }; //🧚‍♀️ 🧚‍♀️  => "..." 🧚‍♀️ 🧚‍♀️  permite hacer una copia segura, sin modificar el array u objeto original

// copiaDeFantasma.lugarParaAsustar = "espejo";

// console.log(copiaDeFantasma);
// console.log(fantasma);

/////// => dos maneras de acceder a propiedades dentro de un objeto ////////

// notaciones de puntos:
fantasma.nombre; // "casper"

//notacion de corchetes:
fantasma["nombre"]; // "casper"

//la notacion de corchetes permite variables, sin necesidad de conocer la propiedad

const varianbleCualquiera = "nombre";
console.log(fantasma[varianbleCualquiera]); //se llaman propiedad computadas

///// for // sirve para arrays
///// for in //sirve para objetos

//🧚‍♀️ 🧚‍♀️  ESTE TIPO DE "FOR" NO SE PUEDE HACER EN OBJETOS: 🧚‍♀️ 🧚‍♀️

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

for (let propiedad in fantasma) {
  console.log(propiedad); // me da: nombre-edad-leGustaAsustar...que son las claves del objeto
  console.log(fantasma[propiedad]);

  console.log(`"la propiedad" ${propiedad} "vale" ${fantasma[propiedad]}`);
}

// EJERCICIO:

console.log("EJERCICIO-1");

var producto = {
  id: "ADA-020",
  title: "Gubergren sed est amet voluptua",
  price: 123.75,
  picture:
    "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
  condition: "nuevo",
  free_shipping: true,
  location: "Capital Federal",
};

// recorrer el objeto con un for in
// mostrar en consola el mensaje "la propiedad ___vale___"

// recuerden utilizar notacion de corchetes.

for (let propiedad in producto) {
  console.log(propiedad, "😀"); // recorre cada propiedad del objeto y me lo muestra ("clave")
  console.log(`la propiedad ${propiedad} vale ${producto[propiedad]}`); //recorre cada propiedad del objeto y me da la propiedad ("clave") con su respectivo "valor"

  // si hago ${producto.prop} ==> busca dentro de producto la propiedad "prop"
}

//// EJERCICIO 2 //////

// Crear la funcion hasProperty que recibe dos parametros: un objeto y un string. Si el string es una propiedad dentro del objeto, la funcion retorna true. Si no, retorna false.

// Podes chequear tu codigo con los siguientes ejemplos:

console.log("EJERCICIO 2");

const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

const user2 = {
  username: "grace_hopper",
  password: "1234567890!",
  email: "grace@hopper.com",
};

const hasProperty = (objeto, propiedad) => {
  // for in no retorna una funcion
  if (propiedad in objeto) {
    return true;
  } else {
    return false;
  }
};
console.log(hasProperty(user, "email")); // false
console.log(hasProperty(user, "password")); // true
console.log(hasProperty(user, "id")); // false

//⚪⚪⚪ la forma mas abreviada de escribir el codigo anterior:
const hasProperty2 = (objeto, propiedad) => {
  return propiedad in objeto;
};

console.log(hasProperty2(user2, "email")); // true
console.log(hasProperty2(user2, "password")); // true
console.log(hasProperty2(user2, "id")); // false

///// 😀 JSON: su uso //////////

// json es un texto y no es lo mismo que js, pero lo convierte a texto para su facil subida.

/////// localStorage ==> guarda en el navegador mio, dura mas
////// sessionStorage ==> dura mientras dure la seccion de la pagina

////// para acceder al localStorage de una pagina en internet:

//window.localStorage

/// 😀 para convertir un objeto de JS a JSON usamos un metodo que se llama "JSON.stringify"

/// 😀 para convertir un JSON  a un objeto de JS usamos el metodo "JSON.parse"

// const user3 = {
//   nombre: "debo",
//   edad: 33,
//   profesion: "estudiante",
// };
// console.log(user3);

// const usuarioJSON = JSON.stringify(user3);

// console.log(usuarioJSON);

// localStorage.setItem("usuario", usuarioJSON); // ==> 😀 "setItem" permite guardar informacion

// // console.log(localStorage.getItem("usuario"));  // ==> 😀 "getItem" me permite obtener esa informacion guardada

// const usuarioJSON = localStorage.getItem("usuario");
// console.log(usuarioJSON);

// const usuario = JSON.parse(usuarioJSON); // con "parse" convierto un JSON en un objeto

// console.log(usuario);
//localStorage.clear(); // elimina el json completo del servidor

// 🌺 🌺 🌺 EJEMPLO DEL USO DE LAS PROPIEDADES DE "JSON": 🌺 🌺 🌺

// SELECCION DE ELEMENTOS DE HTML =>

const botonModo = document.querySelector("button");
const mensajeModo = document.querySelector("#modo");
const container = document.querySelector(".container");
const mensajeNombre = document.querySelector("#nombre");

botonModo.onclick = () => {
  // le agrega a container el modo oscuro
  container.classList.toggle("oscuro");
  if (container.classList.contains("oscuro")) {
    mensajeModo.textContent = "claro";
  } else {
    mensajeModo.textContent = "oscuro";
  }
};

// primero me fijo si tengo algo guardado en el "localStorage" con getItem

const usuarioGuardado = localStorage.getItem("usuario");
//localStorage.clear(usuarioGuardado); ==> con esto elimino si tengo info en la localStorage
//console.log(usuarioGuardado); // me muestra lo que tengo guardado en el localStorage

if (usuarioGuardado) {
  const user = JSON.parse(usuarioGuardado);
  console.log(user);
  mensajeNombre.textContent = user.nombre;
} else {
  const nombre = prompt("decime tu nombre");
  mensajeNombre.textContent = nombre;

  const usuario = {
    nombre: nombre,
  };
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

// const modoGuardado = localStorage.getItem("modo");
// if (modoGuardado) {
//   const tipoDeModo = JSON.parse(modoGuardado);
//   console.log(tipoDeModo);

//   localStorage.setItem("modo", JSON.stringify(modo));
// }
