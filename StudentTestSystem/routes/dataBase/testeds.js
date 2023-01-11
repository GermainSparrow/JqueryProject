let mongoose = require('mongoose')
let testedsSchema = new mongoose.Schema({
    studentId: { // 所属学员 _id
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'students'
    },
    testId: { // 关联试卷 _id
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'tests'
    },
    typeId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'types'
    },
    answers: [[String]], // 学生考试答案
    score: Number, // 成绩
    accuracy: String, // 正确率
    durations: String // 答题时长
    }
)

mongoose.model('testeds', testedsSchema, 'testeds')