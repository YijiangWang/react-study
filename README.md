# react-study
  - React、redux学习。

## 脚手架使用：
  - 使用 create-react-app。

## 后台：
  - 服务使用 node；
  - 数据库使用 ‘非关系型数据库’ MongoDB；
  - 每次修改 server，都要重新启动 `node server.js`，这样感觉很麻烦；安装 `nodemon`，然后通过 `nodemon server.js` 启动，当再修改 `server.js` 文件时，会自动重新启动，不需再进行手动操作；
  
    - app.get、app.post 分别开发 get 和 post 接口；
    - app.use 使用模块；
    - 使用 res.send、res.json、res.sendfile 响应不同的内容。

## 数据库：MongoDB
  - 官网下载安装 MongoDB；
  - 然后再安装 mongoose：`npm install mongoose --save`；
  - 通过 mongoose 操作 mongodb，存储的就是 json，相对 mysql 来说，要容易很多；

  - connect 链接数据库；
  - 定义文档模型，schema 和 model 新建模型；
  - 一个数据库文档对应一个模型，通过模型对数据库进行操作；
  - 分别使用 create、remove、update、find 来进行增、删、改、查等操作；
  - 后台启动：`mongod --config /usr/local/etc/mongod.conf`；

  ```
    // 类似于 mysql 的表，mongo 里有文档、字段的概念
    const User = mongoose.model('user', new mongoose.Schema({
      name: {type: String, require: true},
      age: {type: Number, require: true},
    }));
  ```  
#### 新增数据
  ```
    User.create({
      name: 'yijiang',
      age: 18
    }, (err, data) => {
      if(!err){
        console.log('data: ', data);
      }else{
        console.log('err: ', err);
      }
    });
  ```
#### 查询数据
  ```
    User.find({age: 20}, (err, data) => {
      if(data){
        res.send(data);
      }else{
        res.send('<h1>嘿嘿嘿，你干嘛呐。。</h1>');
      }
    });
  ```
#### 删除数据
  ```
    User.remove({}, (err, data) => {
      if(!err){
        res.json(data);
        console.log('remove: ', data);
      }else{
        console.log('err: ', err);
      }
    });
  ```
#### 修改数据
  ```
    User.update({age: 20},{name: '来啦，老弟'},(err, data) => {
      if(!err){
        res.json(data);
      }else{
        console.log('err: ',err);
      }
    });
  ```

## 组件库使用 antd-mobile
  - 按需加载第一步：安装 `babel-plugin-import`；
  - 按需加载第二步：在 package.json 中进行配置：
  ```
    "babel": {
      "plugins": [
        ["import", { "libraryName": "antd-mobile", "style": "css" }]
      ]
    }
  ```
  * 注：json 文件中的所有单引号要改为双引号。
