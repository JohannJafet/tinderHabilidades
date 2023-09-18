/*El pg es el driver a donde nos conectamos, aqui postgress */
import pg from 'pg'
const { Pool } = pg //nos proporciona un objeto que nos deja conectar a la bd

const conexion = new Pool({ //este objeto lleva todas las propiedades
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "Tinder",
    port: 5433
})

export default conexion