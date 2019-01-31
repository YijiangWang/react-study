const express = require('express');
const mongoose = require('mongoose');
// 链接 mongo
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);

// 检测是否链接成功
mongoose.connection.on('connected', () => {
  console.log('connect to mongodb ...');
});
// 类似于 mysql 的表，mongo 里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  name: {type: String, require: true},
  age: {type: Number, require: true},
}));

// 新增数据
// User.create({
//   name: 'yijiang',
//   age: 18
// }, (err, data) => {
//   if(!err){
//     console.log('data: ', data);
//   }else{
//     console.log('err: ', err);
//   }
// });

const app = express();

app.get('/', function(req, res){
  User.find({}, (err, data) => {
    if(data){
      res.send(data);
    }else{
      res.send('<h1>嘿嘿嘿，你干嘛呐。。</h1>');
    }
  });
});
app.get('/data', (req, res) => {
  res.send('<h2>你这人真有意思，我干嘛关你什么事啊，你脑子不好吧，神经病。。。</h2>');
});
app.get('/remove', (req, res) => {
  User.remove({name: 'yijiang', age: 18}, (err, data) => {
    if(!err){
      res.json(data);
      console.log('remove: ', data);
    }else{
      console.log('err: ', err);
    }
  });
});
app.get('/update', (req, res) => {
  User.update({age: 20},{name: '来啦，老弟'},(err, data) => {
    if(!err){
      res.json(data);
    }else{
      console.log('err: ',err);
    }
  });
});
app.listen(9003, function(){
  console.log('server run on 9003');
});