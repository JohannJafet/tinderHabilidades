import conexion from "../config/db.js"

//funtion hola (request, response){   esta es otra forma de usar la funcion
const hola = (request, response)=>{
    response.json({
        hola: "mundo"
    })
}

const suma = (request, response)=>{
    const x = parseInt(request.params.x);
    const y = parseInt(request.params.y);
    response.json({
        resultado: x + y
    })
}

const apiBody = (request, response)=>{
    const nombre = request.body.nombre
    const ocupacion = request.body.ocupacion

    response.json({
        "mensaje": `Hola ${nombre} de ocupacion ${ocupacion}`
    })
}

const obtenerPerson = async (request, response)=>{
    const person = await conexion.query("SELECT * FROM person")
    response.json(person.rows)
}

export {hola, suma, apiBody, obtenerPerson}