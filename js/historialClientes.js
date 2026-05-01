//mostrar el la vista de historial de clientes los clientes que se van guardando.
document.addEventListener("DOMContentLoaded",  mostrarClientes); //va de primero porque dice, espera que se cargue el html y luego si ejecuta el codigo.

//creo la función que uso arriba (mostrarclientes)
function mostrarClientes (){
//1. recupero el array o lista de clientes desde el localStorage.
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

//2.selección el body de la tabla donde van a ir los datos
let tbody = document.querySelector("#tablaClientes");
tbody.innerHTML = ""; //limpia la tabla antes de llenarla.

//3.recorrer cada cliente y crear una fila por cada uno
clientes.forEach(cliente => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
    <td>${cliente.nombres}</td>
    <td>${cliente.apellidos}</td>
    <td>${cliente.numDocumento}</td>
    <td>${cliente.telefono}</td>
    <td>${cliente.fechaEntrada}</td>
    <td>${cliente.fechaSalida}</td>
    <td>${cliente.numeroHab}</td>
    `
//especifico los campos y el orden de las columnas de la fila

//4.inserto la fila en la tabla
tbody.appendChild(fila);
});
}

