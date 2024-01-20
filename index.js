import express from "express";

const app = express();

//Middleware: Capa que se ejecuta antes de las rutas
app.use(express.json());


const port = 4000; 
const data = [
  { id: 1, name: "Claudia" },
  { id: 2, name: "Andrea" },
  { id: 3, name: "Antonio" },
  { id: 4, name: "Baltazar" },
];

// PRINCIPIOS SOLID
// 1. Responsabilidad Unica

app.get("/student", (req, res) => {
  res.send(data);
});

app.get("/student/:id", (req, res) => {
   res.send(data.filter(student=>student.id==req.params.id));
});

app.listen(port, () => {
  console.log("Servidor escuchando al puerto:" + port);
});
