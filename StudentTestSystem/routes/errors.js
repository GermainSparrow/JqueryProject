var express = require('express');
const { data } = require('jquery');
var router = express.Router();
let mongoose = require('mongoose')
router.post('/show', async function (req, resp) {
    console.log('errors查询开始');
    let studentId = req.body.id;
    console.log(studentId);
    let temp = await mongoose.model('errors').find({ studentId: studentId }).populate('exerciseId')

    resp.send(temp)
})

router.post('/delete', async function (req, resp) {

    console.log('删除开始');
    let exerciseId = req.body.id;
    let studentId = req.body.studentId

    await mongoose.model('errors').deleteMany({
        exerciseId: exerciseId
    })
    let data = await mongoose.model('errors').find({ studentId: studentId }).populate('exerciseId')
    resp.send(data)

})

module.exports = router;