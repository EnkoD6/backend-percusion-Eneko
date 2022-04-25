const express = require('express');
const router = express.Router();
const cifrado = require("./cifrado")
const bcrypt = require("bcrypt");

router.post('/',cifrado, function(req, res){
    let db = req.app.locals.db
    db.collection("clientes").find({'username' : req.body.username}).toArray(function(err, result){
        if (err != undefined) {
            console.log(err)
        } else {
            if (result.length > 0) {
                res.send({message: 'El usuario introducido ya existe'})
            } else {
                db.collection("clientes").insertOne({'username' : req.body.username, 'password' : req.body.password}, function(error, result){
                    if (error != undefined) {
                        console.log(error)
                        res.send({message: 'Error al registrar usuario, intentelo de nuevo'})
                    } else {
                        res.send({message: 'Usuario registrado con exito'})
                    }
            })}
        }
    })
});

router.post("/Login", function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let db = req.app.locals.db
    db.collection("clientes").find({ username: username }).toArray(function (err, result) {
        if (err !== undefined) {
            console.log(err)
            res.send({ message: "Ha habido un error" });
        } else {
            if (result.length > 0) {
                if (bcrypt.compareSync(password, result[0].password)){
                    res.send({ message: "Logueado correctamente" });
                } else {
                    res.send({ message: "Contraseña incorrecta" });
                    }
            } else {
                res.send({ message: "El usuario no existe, registrese por favor" });
            }
        }
    });
});

module.exports = router;