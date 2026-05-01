//función para capturar los datos y guardarlos en el localStorage
function guardar() {
  //capturar los valores dentro de un objeto
  const cliente = {
    nombres: document.getElementById("nombresReg").value.trim(),
    apellidos: document.getElementById("apellidosReg").value.trim(),
    tipoDocumento: document.getElementById("tipDocumento").value.trim(),
    numDocumento: document.getElementById("numDoc").value.trim(),
    telefono: document.getElementById("tlf").value.trim(),
    ocupacion: document.getElementById("ocupacion").value.trim(),
    fechaEntrada: document.getElementById("fEntrada").value.trim(),
    fechaSalida: document.getElementById("fSalida").value.trim(),
    numeroHab: document.getElementById("tipoHab").value.trim(),
  
  
  };
  //2. recupero la lista actual de clientes (si existe)
  let clientes = JSON.parse(localStorage.getItem("clientes")) || []; //esta linea de codigo dice, si ya hay clientes guardados, conviertelos de texto json a un arreglo y si no hay nada, crea el arreglo vacío.

  //3.agrega el nuevo cliente que se introduzca al arreglo creado
  clientes.push(cliente); //al arreglo recien creado (clientes) insertale debajo, un nuevo (cliente).

  //4.guarda el arreglo actualizado con el nuevo cliente en el localStorage.
  localStorage.setItem("clientes", JSON.stringify(clientes)); //convierte el arreglo completo a texto json, guardalo bajo el nombre (clientes); entonces se sobreescribe sobre el que ya está.

  //5.confirmación en consola
  console.log("cliente guardado:", cliente);
  console.log("lista completa de clientes:", clientes); //muestrame en la consola, el cliente que acabo de guardar y la lista completa.
  document.getElementById("formClientes").reset();
  //6.recargar la pagina para limpiar el formulario
  location.reload();
}
