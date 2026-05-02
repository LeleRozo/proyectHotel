//función para capturar los datos y guardarlos en el localStorage
let indiceEditando = null;

document.addEventListener("DOMContentLoaded", () => {

  let indexGuardado = localStorage.getItem("indiceEditando");

  if (indexGuardado !== null) {

    indiceEditando = parseInt(indexGuardado);

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    let cliente = clientes[indiceEditando];

    // llenar formulario
    document.getElementById("nombresReg").value = cliente.nombres;
    document.getElementById("apellidosReg").value = cliente.apellidos;
    document.getElementById("numDoc").value = cliente.numDocumento;
    document.getElementById("tlf").value = cliente.telefono;
    document.getElementById("fEntrada").value = cliente.fechaEntrada;
    document.getElementById("fSalida").value = cliente.fechaSalida;
    document.getElementById("tipoHab").value = cliente.numeroHab;
  }
});

function guardar() {
  //capturar los valores 
    const nombres = document.getElementById("nombresReg").value.trim();
    const apellidos = document.getElementById("apellidosReg").value.trim();
    const tipoDocumento = document.getElementById("tipDocumento").value.trim();
    const numDocumento = document.getElementById("numDoc").value.trim();
    const telefono = document.getElementById("tlf").value.trim();
    const ocupacion = document.getElementById("ocupacion").value.trim();
    const fechaEntrada= document.getElementById("fEntrada").value.trim();
    const fechaSalida = document.getElementById("fSalida").value.trim();
    const numeroHab = document.getElementById("tipoHab").value.trim();
  
  //2. validar los datos antes de crear el 
  //si hay campos obligatorios vacíos
  if (!nombres || !apellidos || !numDocumento || !telefono || !fechaEntrada || !numeroHab) {
    alert("⚠️ Debes completar todos los campos obligatorios*");
    return; //se detiene y no guarda nada.
  }
  //si el documento tiene menos de 8 o mas de 10 dígitos
  if
(!/^\d{8,10}$/.test(numDocumento) || isNaN(numDocumento)) {
    alert("⚠️ El documento debe tener entre 8 y 10 dígitos y deben ser solo números");
    return;
  }
  //si el numero de telefono tiene una cantidad de digitos difetente de 10 o tiene letras
if(telefono.length !== 10 || isNaN(telefono)){
  alert("El número de telefono no tiene los 10 dígitos requeridos o no es número");
  return;
}
  //si no hay errores, crea el objeto de clientes
  let clientes = JSON.parse(localStorage.getItem("clientes")) || []; //esta linea de codigo dice, si ya hay clientes guardados, conviertelos de texto json a un arreglo y si no hay nada, crea el arreglo vacío.

  const cliente = {
    nombres, apellidos, tipoDocumento, numDocumento, telefono, ocupacion, fechaEntrada, fechaSalida, numeroHab
  };

  if (indiceEditando !== null) {
  clientes[indiceEditando] = cliente;
} else {
  clientes.push(cliente);
}
 
 

  //4.guarda el arreglo actualizado con el nuevo cliente en el localStorage.
  localStorage.setItem("clientes", JSON.stringify(clientes)); //convierte el arreglo completo a texto json, guardalo bajo el nombre (clientes); entonces se sobreescribe sobre el que ya está.

  //5.confirmación en consola
  console.log("cliente guardado:", cliente);
  console.log("lista completa de clientes:", clientes); //muestrame en la consola, el cliente que acabo de guardar y la lista completa.
  document.getElementById("formClientes").reset();
  //6.recargar la pagina para limpiar el formulario

  indiceEditando = null; //deja de editar clientes para luego finalizar y quedar listo para ingresar un nuevo cliente.

  location.reload();
};