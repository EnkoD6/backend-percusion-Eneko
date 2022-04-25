const express = require('express');
const mongodb = require("mongodb");
const cors = require("cors");
const app = express();
app.listen(3001 || process.env.PORT);
app.use(express.static("public"))
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
const baterias = require('./routes/baterias');
const platos = require('./routes/platos');
const hardware = require('./routes/hardware');
const baquetas = require('./routes/baquetas');
const segundamano = require('./routes/segundamano');
const clientes = require('./routes/clientes');
const stripe = require('./routes/stripe');

let MongoClient = mongodb.MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client){
    if (err !== undefined) {
        console.log(err)
    } else {
        app.locals.db = client.db('percusion')
    }
})

app.use('/Baterias', baterias);
app.use('/Platos', platos);
app.use('/Hardware', hardware);
app.use('/Baquetas', baquetas);
app.use('/SegundaMano', segundamano);
app.use('/Clientes', clientes);
app.use('/Stripe', stripe);