import 'dotenv/config';
import express from "express";
import router from "./router/router.js";

const port = process.env.APP_PORT; //Archivo de entorno .env
const app = express();
app.use(express.json());
app.use(router);
app.listen(port);

console.log(`Corriendo mi servidor en http://localhost:${port}`);  // lo dejo aca, no me esta tomando el puerto .env
