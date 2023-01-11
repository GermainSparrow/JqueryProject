let mongoose = require('mongoose')
let errorsSchema = new mongoose.Schema({
    studentId: { // 学员 _id
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'students'
    },
    exerciseId: { // 试题 _id
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'exercises'
    },
    errorAnswer: String // 错误答案
}
)

mongoose.model('errors', errorsSchema, 'errors')