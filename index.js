//importar las librerias necesarias 
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemon = require('nodemon');


//datos de la conexion
const config = {
    host:'127.0.0.1',
    user:'root',
    password:'40020111',
    database:'proyecto',
}

//conexion a la base de datos 
const db = mysql.createConnection(config);

//Verificar la conexion 
db.connect((err) => {
    if (err) {
        console.log('Error de conexion', err);
        return;
    }
    console.log('Conexion exitosa');
});


//crear el servidor con express
const app = express()

app.get('/',function(req, res){
    res.send('hello world')
})
//Ruta para obtener todos los proyectos 
app.get('/proyectos', (req, res)=>{
    db.query('SELECT * FROM proyecto', (err, result)=>{
        if (err){
            console.log('Error al obtener los proyeto', err);
            return;
        }
        res.json(result);
    })
})


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})
