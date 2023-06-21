import { Persona } from "./modelo.js";

const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputCorreo = document.getElementById("inputCorreo");

const confirmarButton = document.getElementById("confirmarButton");

const enviarDatos = () => {
  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const correo = inputCorreo.value;

  const persona = new Persona(nombre, apellido, correo);

  Persona.nombre = nombre;
  Persona.apellido = apellido;
  Persona.correo = correo;

  console.log(Persona);
};

confirmarButton.addEventListener("click", enviarDatos);