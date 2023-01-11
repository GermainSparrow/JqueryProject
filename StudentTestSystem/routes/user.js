var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let { uploadFiles } = require('./util/handleFile');

//拿到渲染的用户数据
router.post('/find', async function (req, resp) {
    let studentId = req.body.studentId
    console.log(studentId);
    let re = await mongoose.model('students').find({
        _id: studentId
    })
    resp.send(re)
})


//修改头像
router.post('/alter', async function (req, resp) {
    let method = uploadFiles({
        path: './public/images/icon',//上传文件保存位置，路径参照当前项目
        key: 'myPic',//上传文件数据名称，与前端表单对象中设置的名称保持一致
        size: 30//上传文件最大尺寸限制，单位为KB
    });

    method(req, resp, async function (err) {

        if (!err) {
            console.log(req.body);
            let studentId = req.body.studentId;
            let gender = req.body.gender;
            let name = req.body.name;
            let file = req.files[0];
            console.log(req.files[0]);
            console.log(studentId);
            await mongoose.model('students').updateMany({
                _id: studentId
            }, {
                // name: '李四',
                gender,
                name,
                avatar: `http://127.0.0.1:3000/images/icon/${file.filename}`
            })
            let re = await mongoose.model('students').find({
                _id: studentId
            })
            resp.send({
                code: 1,
                message: '查询成功',
                data: re
            })

        } else {
            console.log(1);
            resp.send({
                code: 2,
                message: '上传失败!'
            });
        }
    })


})
//修改用户的基本信息
router.post('/changeInfo', async function (req, resp) {
    let data = req.body;
    console.log(data);
    await mongoose.model('students').updateMany({
        _id:data.studentId
    },{name:data.name,gender:data.gender})
    data = await mongoose.model('students').find({_id:data.studentId})
    resp.send(data)
})
// 排行
router.post('/reorder', async function (req, resp) {
    let studentId = req.body.studentId
    // let studentId='63358398631a000056002e23'
    let res = await mongoose.model('tested').find({
        studentId: studentId
    }).populate('testId')
    console.log(res);
    let re = res.map((item) => {
        return { score: item.score, testName: item.testId.title }

    })
    for (let i = 0; i < re.length - 1; i++) {
        for (let j = 0; j < re.length - 1 - i; j++) {
            if (re[j].score < re[j + 1].score) {
                // console.log(1);
                let temp = re[j]
                re[j] = re[j + 1]
                re[j + 1] = temp

            }
        }
    }
    // console.log(re);
    resp.send(re)
})

//注册
router.post('/register', async function (req, resp) {
    let data = req.body;
    let newStudent = {
        phone: data.accountNumber, // 使用手机作为登录账户s
        name: '默认名字', // 姓名
        gender: '男', // 性别
        avatar: '../public/images/默认头像.png', // 头像路径
        password: data.password // 密码
    }
    await mongoose.model('students').create(newStudent)
    resp.send('success')
})
//登录
router.post('/login', async function (req, resp) {
    let data = req.body;
    let studentArray = await mongoose.model('students').find({})
    let x = ''
    if (studentArray.some(items => {
        if (items.phone == data.accountNumber && items.password == data.password) {
            x = items._id
        }
        return items.phone == data.accountNumber && items.password == data.password
    })) {
        resp.send(x)
    } else {
        resp.send()
    }
})
//获取首页传来的id 传回去学生的基本信息
router.post('/index', async function (req, resp) {

    let studentId = req.body.x;
    console.log(studentId);

    //获取练习题数 平均分数 最近考试数 
    let student = await mongoose.model('testeds').find({ studentId: studentId })
    console.log(student);
    //平均分数
    let temp = 0
    student.map(items => {
        temp += items.score;
    })
    let averageScores = temp / student.length;

    //总练习题数
    let exerciseNumber = student.length;

    //最近考试数
    temp = [];
    student.map(item => { temp.push(item.testId) })

    let testedNumber = new Set(temp).size;

    console.log(averageScores, exerciseNumber, testedNumber);

    student = await mongoose.model('students').find({ _id: studentId })
    let data = {
        averageScores: averageScores,
        exerciseNumber: exerciseNumber,
        testedNumber: testedNumber,
        student: student
    }
    //学生的成员信息


    resp.send(data)
})

//收藏
router.post('/collection', async function (req, resp) {
    let temp = {
        studentId: req.body.studentId,
        exerciseId: req.body.exerciseId
    }
    await mongoose.model('collections').create(temp);
    resp.send('收藏成功')
})
//取消收藏
router.post('/collectionD', async function (req, resp) {
    let temp = req.body.exerciseId
    await mongoose.model('collections').deleteMany({
        exerciseId: temp
    });
    resp.send('取消收藏成功')
})
//查询收藏
router.post('/getCollections', async function (req, resp) {
    let studentId = req.body.id
    console.log(studentId, '0000000');
    let temp = await mongoose.model('collections').find({ studentId: studentId }).populate('exerciseId');
    // console.log(temp);
    resp.send(temp)
})
module.exports = router;

