import express from "express";
import cors from "cors";
import swaggerDocs from './swagger.js';
import studentController from './controllers/studentController.js';
import teachersController from './controllers/teachersController.js';


const app = express();
app.use(express.json());
app.use(cors());

app.use('/students',studentController)
app.use('/teachers',teachersController)

const port = 4000;

app.listen(port, () => {
  console.log("Servidor escuchando al puerto:" + port);
  swaggerDocs(app,port);
});
