let mongoose = require('mongoose')
let typesSchema = new mongoose.Schema({
    type: String, // 试卷类型：正式考试、模拟考试、每日一测
}
)

mongoose.model('types', typesSchema, 'types')