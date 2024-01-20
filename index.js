import express from "express";

const app = express();

//Middleware: Capa que se ejecuta antes de las rutas
app.use(express.json());


const port = 4000; 
const data = [
  { id: 40, name: "Claudia",age:20 },
  { id: 20, name: "Andrea",age:18 },
  { id: 30, name: "Antonio",age:21 },
  { id: 10, name: "Baltazar",age:22 },
];

// PRINCIPIOS SOLID
// 1. Responsabilidad Unica

app.get("/student", (req, res) => {
  res.send(data);
});

app.get("/student/:id", (req, res) => {

   const studentFilter = data.filter(student=>student.id==req.params.id);
   if (studentFilter.length > 0){
    return res.send(studentFilter);
   }
   return res.status(200).send({ data: 'El Id ' + req.params.id + ' de Estudiante no ha sido encontrado' });

});

app.delete('/student/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const index = (data.findIndex(student => student.id==studentId));

  console.log(index);
  if (index >= 0 )
  {
    data.splice(index, 1);
    console.log(data);
    return res.send('Estudiante eliminado');
  }
  console.log(data);
  return res.status(200).send({ data: 'El Id ' + req.params.id + ' de Estudiante no ha sido encontrado' });
})

app.patch('/student/:id',(req,res) => {
  const id = parseInt(req.params.id);
  const {name} = req.body;
  const {age} = req.body;
  
  const student = data.find(item => item.id === id);
  if(student){
    student.name = name;
    student.age = age;
    return res.send({message:'Proceso realizado',data:student})
  }
  else{
    return res.status(404).send({ data: 'El Id ' + req.params.id + ' de Estudiante no ha sido encontrado' });
  }
  
})

app.listen(port, () => {
  console.log("Servidor escuchando al puerto:" + port);
});
