const express = require("express");
const app = express();

// Para que Express entienda datos de formularios HTML y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let usuarios = [];
// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor corriendo correctamente 🚀");
});

//metodo post para crear(create)
app.post("/registro", (req, res) => {
  const nuevoUsuario = req.body;
  usuarios.push(nuevoUsuario);
  console.log("Usuario registrado");
  res.send("Usuario registrado con éxito.");
});
//para poner a andar el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en: http://localhost:3000");
});

//metodo get(leer o mostrar lo que esta dentro de la lista)
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});
