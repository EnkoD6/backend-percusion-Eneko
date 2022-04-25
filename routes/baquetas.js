const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    let db = req.app.locals.db
    db.collection("baquetas").find().toArray(function(err, result){
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