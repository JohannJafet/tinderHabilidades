import Router from "express";
import {hola, suma, apiBody, obtenerPerson} from '../controllers/controllers.js';

const router = Router();

router.get("/", (request, response)=>{
    response.json({
        hola: "mundo"
    })
})

router.get("/hola", hola)

router.post("/suma/:x/:y", suma)

router.put("/api/body", apiBody) //quede aqui video 22 ago 29:58  no me funciono put, pq no he creado nada

router.get("/persona", obtenerPerson)



export default router;