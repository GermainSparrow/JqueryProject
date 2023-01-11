let mongoose = require('mongoose')
let testsSchema = new mongoose.Schema({
    title: String, // 试卷标题
    date: String, // 考卷创建时间
    durations: String, // 答题时长，单位分钟
    startTime: String, // 开始时间
    endTime: String, // 结束时间
    form: Number, // 当前试卷状态1: 有效 0，无效。默认 1
    pointId: { // 知识点 _id
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'points'
    },
    exerciseId: [ // 当前试卷关联的所有题目 _id
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'exercises'
        }
    ]
}
)

mongoose.model('tests', testsSchema, 'tests')