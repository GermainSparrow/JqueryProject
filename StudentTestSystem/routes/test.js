var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

router.get('/showTest',async function(req,rsp){
    let tests =await  mongoose.model('tests').find({})
    console.log(tests);
    rsp.send(tests)
})

module.exports = router;