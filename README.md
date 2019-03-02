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

## Redux 处理异步，这里使用 redux-thunk 插件
  - npm install redux-thunk --save；
  - 使用 applyMiddleware 开启 thunk 中间件；
  - action 可以返回函数，使用 dispatch 提交 action。
  ```js
    export const join = () => {
      return {type: JOINCLASS};
    };
    export const leave = () => {
      return {type: LEAVECLASS};
    };
    //异步事件
    export const joinAsync = () => {
      return dispatch => {
        setTimeout(() => {
          //dispatch({type: JOINCLASS})
          dispatch(join());
        },2000);
      }; 
    };
  ```
## 调试工具使用：npm install redux-devtools-extension，并且需要开启
  - 新建 store 的时候判断 window.devToolsExtension；
  - 使用 compose 结合 thunk 和 window.devToolsExtension；
  - 通过调试窗的 redux 选项卡，实时查看 state。
  ```js
    const store = createStore(reducer, compose(
        applyMiddleware(thunk),
        // 判断 devToolsExtension 是否存在，如果存在就获取 devToolsExtension()，否则就是用一个空函数
        window.devToolsExtension ? window.devToolsExtension() : () => {}
      )
    );
  ```
## 使用 react-redux 更加优雅的链接 react 和 redux
  - 首先进行安装：`npm install react-redux --save`；
  - 以后不必再使用 subscribe，只需使用 reducer、action 和 dispatch 即可；
  - react-redux 中提供了 Provider 和 connect 两个接口。
    - Provider 组件在应该最外层，传入 store 即可，不需传入多次；如果不使用 Provider，A 组件中需要使用 store，A 组件中的子组件 B 也需要使用 store，B 组件中的子组件 C 也需要使用 store，这样就需要将 store 一层一层往下传；
    - connect 负责从外部获取组件所需要的参数；
    ```js
      const mapStateToProps = state => {
        return {num: state};
      };
      const actionCreators = {join, leave, joinAsync};
      App = connect(mapStateToProps, actionCreators)(App);
    ```
    - connect 可以使用装饰器的方式来写：
      - npm run eject 弹出个性化配置；
      - npm install babel-plugin-transform-decorators-legacy 插件；
      - package.json 里的 babel 加上 plugins 配置。
      ```json
      "plugins": [
        "transform-decorators-legacy"
      ]
      ```
      ```js
      @connect(
        state => ({num: state}),
        {join, leave, joinAsync}
      )
      ```

## react-router4 基础知识
 - 安装：npm install react-router-dom --save；
 - 入门组件：
  - BrowserRouter，包裹整个应用;
  - Router 路由对应渲染的组件，可嵌套；
  - Link 跳转专用。
  ```js
  ReactDOM.render(<div>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>一班</Link>
            </li>
            <li>
              <Link to='/erban'>二班</Link>
            </li>
            <li>
              <Link to='/sanban'>三班</Link>
            </li>
          </ul>
          {/* 设置路由渲染对应的页面 */}
          <Route path='/' exact component={App}></Route>
          <Route path='/erban' component={Erban}></Route>
          <Route path='/sanban' component={Sanban}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  </div>, document.getElementById('root'));
  ```
