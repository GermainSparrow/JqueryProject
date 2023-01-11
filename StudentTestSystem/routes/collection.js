let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')


router.post('/collect',async function(req,resp){
    // let studentId='63358398631a000056002e23'
    let studentId = req.body.studentId
    let re=await mongoose.model('collections').find({
        studentId:studentId
    }).populate('exerciseId');
    // console.log(re);

    // let re = await mongoose.model('collections').find({
    //     studentId:studentId
    // }).populate('exerciseId')
    resp.send({
        count:1,
        message:'查询成功',
        data:re
    })
})
module.exports = router