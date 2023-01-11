let mongoose = require('mongoose')
let studentsSchema = new mongoose.Schema({
    phone: String, // 使用手机作为登录账户s
    name: String, // 姓名
    gender: String, // 性别
    avatar: String, // 头像路径
    password: String // 密码
})

mongoose.model('students', studentsSchema, 'students')