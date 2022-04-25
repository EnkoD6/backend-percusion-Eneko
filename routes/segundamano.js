const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    let db = req.app.locals.db
    db.collection("segundamano").find().toArray(function(err, result){
        if (err != undefined) {
            console.log(err)
        } else {
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send('error')
            }
        }
    })
});

router.post('/', function(req, res){
    console.log(req);
    let db = req.app.locals.db
    db.collection("segundamano").insertOne(req.body, function(err, result){
        if (err != undefined) {
            console.log(err)
        } else {
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send('error')
            }
        }
    })
});

router.put('/', function(req, res){
    let db = req.app.locals.db
    db.collection("segundamano").updateOne(req.body, function(err, result){
        if (err != undefined) {
            console.log(err)
        } else {
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send('error')
            }
        }
    })
});

router.delete('/', function(req, res){
    let db = req.app.locals.db
    db.collection("segundamano").deleteOne(req.body, function(err, result){
        if (err != undefined) {
            console.log(err)
        } else {
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send('error')
            }
        }
    })
});

module.exports = router;