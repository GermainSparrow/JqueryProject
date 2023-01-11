let mongoose = require('mongoose')
let exercisesSchema = new mongoose.Schema({
    topics: String, // 题目、题干
    options: Array, // 选项 ['HTML', 'CSS', 'JS', 'Nodejs']

    answer: [String], // 正确答案的下标 [1] 或者 [0, 1] 一个元素为单选题答案，多个元素则是多选题答案
    analysis: String, // 解析
    type: 0, // 考题是单选还是多选: 0 为单选 ,1 为多选
    score: Number,

    pointId: { // 题目所属知识点
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'points'
    }
}
)

mongoose.model('exercises', exercisesSchema, 'exercises')