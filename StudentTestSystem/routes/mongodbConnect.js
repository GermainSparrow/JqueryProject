let mongoose = require('mongoose');
let url='mongodb://127.0.0.1:27017/exam';
mongoose.connect( url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',function(){
    console.log('exam数据库连接成功');
})