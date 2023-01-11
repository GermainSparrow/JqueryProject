let mongoose = require('mongoose');
let express = require('express');
let router = express.Router()

//当学生开始考试时 将打包好的试题信息发送到前端
router.post('/examBegin',async function(req,rsp){
    let testId = req.body
    let examData= await mongoose.model('exercises').find({}).populate('pointId');
    rsp.send(examData)
    console.log('examData already sent')
})
router.post('/examBegin2',async function(req,rsp){
    let testId = req.body.id
    console.log(testId,123);
    let examData= await mongoose.model('tests').find({_id:testId});
    rsp.send(examData)
    console.log('examData already sent')
})

router.get('/test',function(req,rsp){rsp.send('success')})

//考试结束时发出信息并存储到数据库-testeds中  前端发回一个完整的对象
router.post('/examEnd', async function(req,rsp){
    let data = req.body
    data.answers = JSON.parse(data.answers)
    let examData = {
        //学生id 试卷id 答案数组 分数 正确率 持续时间
        studentId:data.studentId,   
        testId:data.testId,
        answers:data.answers,
        score:data.score,
        accuracy:data.accuracy,
        durations:data.durations,
        typeId:data.typeId
    }
    let errors = JSON.parse(data.errors);
    // _id: '63368907912000004100663e',
    // analysis: '这是答案解析',
    // answer: '',
    // options: [ 'HTML', 'CSS', 'JS', 'Node.js' ],
    // pointId: { _id: '63358759dd0e000089000c39', knowledge: 'javaScript基础考试' },
    // score: 3,
    // topics: '题干 请选择正确答案( )',
    // type: 1
    errors.map(async items=>{
        let temp = {
            errorAnswer:items.answer,
            exerciseId:items._id,
            studentId:data.studentId
        }
        await mongoose.model('errors').create(temp)
    })
   await mongoose.model('testeds').create(examData);

})


//提交答案后 把考试的结果提交进 testeds数据库

async function temp(){
    let tempData= await mongoose.model('testeds').find({}).populate('studentId').populate('testId').populate('typeId')
}
//temp()
module.exports = router