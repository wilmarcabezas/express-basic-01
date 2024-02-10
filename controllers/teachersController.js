import express from 'express';
const router = express.Router();

/**
 * @swagger
 * paths:
 *   /teachers:
 *     get:
 *       tags: 
 *         - Profesores
 *       summary: Obtiene los datos de los profesores
 *       description: Este endpoint retorna una lista de datos con toda la información de todos los profesores de Ibaktor.
 *       responses:
 *         200:
 *           description: Consulta ejecutadada con exito
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   id: 
 *                    type: integer
 *                    description: El Id del Profesor en Cuestion.
 *                    example: 1
 *                   name:
 *                    type: string
 *                    description: El Nombre del Profesor
 *                    example: Pierre Huguet
 *         500:
 *           description: Existe un problema con el servidor.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error: 
 *                    type: string
 *                    example: No fue posible obtener la lista de los profesores.     
 * 
 */
const dataProfesores = [{id: 1, name: 'Pierre Huguet'}, {id:2, name:'Scott Mitchel'}]

router.get('/',(req,res)=>{
    try {
        res.status(200).send(dataProfesores);
    } catch (error) {
        res.status(500).send({error: error});
    }
})

router.get('/:id',(req,res)=>{
    try {
        const idProfesor = req.params.id;
        const resultado = dataProfesores.filter(profesor => profesor.id == idProfesor);
        if (resultado.length <= 0){
            return res.status(404).send({error: 'Profesor no encontrado'})
        }
        return res.status(200).send(resultado);
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})



export default router;