import express from "express";

const app = express();
app.use(express.json());
const port = 4000;
const data = [
  { id: 1, name: "Claudia" },
  { id: 2, name: "Andrea" },
  { id: 3, name: "Antonio" },
  { id: 4, name: "Baltazar" },
];

app.get("/student", (req, res) => {
  res.send(data);
});

app.get("/student/:id", (req, res) => {
  console.log(req.params.id);
});

app.listen(port, () => {
  console.log("Servidor escuchando al puerto:" + port);
});
