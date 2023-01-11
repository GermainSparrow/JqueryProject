let mongoose = require('mongoose')
async function test(rep) {
    let data = rep
    let examData = {
        studentId: data.studentId,
        testId: data.testId,
        typeId: data.typeId,
        answers: data.answers,
        score: data.score,
        accuracy: data.accuracy,
        duration: data.duration,
    }
    console.log(examData);
    await mongoose.model('testeds').create(examData);
}
let rep = {
    studentId: '63358398631a000056002e23',
    testId: '633588a6dd0e000089000c40',
    typeId: '63358410dd0e000089000c34',
    answers: [[1],[2]],
    score: 5,
    accuracy: 6,
    duration: 7,
}
//test(rep)

async function temp(){
    let tempData= await mongoose.model('testeds').find({}).populate('studentId').populate('testId').populate('typeId')
    console.log(tempData)
}
//