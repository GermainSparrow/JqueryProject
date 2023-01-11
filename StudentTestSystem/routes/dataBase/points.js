let mongoose = require('mongoose')
let pointsSchema = new mongoose.Schema({
    knowledge: String // 知识点名称，例如 HTML、CSS... // 考试持续时间
    }
)

mongoose.model('points', pointsSchema, 'points')