const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
console.log(formulario, nombre, apellido, email, telefono);

const validarCampoVacio = (e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.trim().length === 0) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = "Obligatorio";
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
};

nombre.addEventListener("blur", validarCampoVacio);

apellido.addEventListener("blur", validarCampoVacio);

email.addEventListener("blur", validarCampoVacio);

telefono.addEventListener("blur", validarCampoVacio);
