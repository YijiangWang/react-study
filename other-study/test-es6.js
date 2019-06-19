// function makeIterator(array) {
//   var nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < array.length ?
//         {value: array[nextIndex++], done: false} :
//         {value: undefined, done: true};
//     }
//   };
// }
// var it = makeIterator(['a', 'b']);
// console.log(it.next())  // { value: "a", done: false }
// console.log(it.next())  // { value: "b", done: false }
// console.log(it.next())  // { value: undefined, done: true }


// var it = sqrMaker();

// console.log(it.next().value) // 0
// console.log(it.next().value) // 1
// console.log(it.next().value) // 4
// console.log(it.next().value) // 9
// // ...

// function sqrMaker() {
//   var index = 0;

//   return {
//     next: function() {
//       return {value: index++ ** 2, done: false};
//     }
//   };
// }


// var arr = ['a','b','c','d'];
// var arrayIt = arr[Symbol.iterator]();
// console.log(arrayIt.next());  //{value: "a", done: false}
// console.log(arrayIt.next());  //{value: "b", done: false}
// console.log(arrayIt.next());  //{value: "c", done: false}
// console.log(arrayIt.next());  //{value: "d", done: false}
// console.log(arrayIt.next());  //{value: undefined, done: true}


// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }

//   [Symbol.iterator]() { return this; }

//   next() {
//     var value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return {done: false, value: value};
//     }
//     return {done: true, value: undefined};
//   }
// }

// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }

// for (var value of range(0, 3)) {
//   console.log(value); // 0, 1, 2
// }


// var objt = {
//   data: [ 'hello', 'world' ],
//   [Symbol.iterator]() {
//     const self = this;
//     let index = 0;
//     return {
//       next() {
//         if (index < self.data.length) {
//           return {
//             value: self.data[index++],
//             done: false
//           };
//         } else {
//           return { value: undefined, done: true };
//         }
//       }
//     };
//   }
// };
// var o = objt[Symbol.iterator]()
// console.log(o.next())   // {value: "hello", done: false}
// console.log(o.next())   // {value: "world", done: false}
// console.log(o.next())   // {value: undefined, done: true}


// let iterable = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//   console.log(item); // 'a', 'b', 'c'
// }


// let iterable2 = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable2) {
//   console.log(item); // undefined, undefined, undefined
// }


  // var obj2 = {};
  // obj2[Symbol.iterator] = () => 1;
  // [...obj2]
  // // 编辑器 ----> TypeError: obj2[Symbol.iterator] is not a function
  // // 浏览器 ----> TypeError: Result of the Symbol.iterator method is not an object


  // var $iterator = ['x', 'y', 'z'][Symbol.iterator]();
  // var $result = $iterator.next();
  // while (!$result.done) {
  //   var x = $result.value;
  //   console.log('yjw ------- ', x);
  //   $result = $iterator.next();
  // }


  // var set = new Set().add('a').add('b').add('c');
  // var [x,y] = set;
  // console.log('x = ', x, ' ; y = ', y);   
  // // x =  a  ; y =  b
  // var [first, ...rest] = set;
  // console.log('first = ', first, ' ; rest = ', rest);   
  // // first =  a  ; rest =  [ 'b', 'c' ]


  // var arr = ['b', 'd', 'e', 'f', 'g', 'h'];
  // Array.prototype[Symbol.iterator] = function(){
  //     const self = this;
  //     let index = 0;
  //     return {
  //       next() {
  //         // if (index < self.length) {
  //         //     console.log('yjw ----------> ', index)
  //         //   return {
  //         //     value: self[index++],
  //         //     done: false
  //         //   };
  //         // } else {
  //         //   return { value: undefined, done: true };
  //         // }
  //         // if ( index <3){
  //         //   return {value: self[index++], done: false}
  //         // } else {
  //         //   return {value: undefined, done: true}
  //         // }
  //         return {}
  //       }
  //     };
  // }
  // var [n1,n2,n3,n4,n5,n6] = arr
  // console.log(n1,n2,n3,n4,n5,n6)
  // yjw ---------->  0
  // yjw ---------->  1


  // var generator = function* () {
  //   yield 1;
  //   yield* [2,3,4];
  //   yield 5;
  // };

  // var iterator = generator();

  // console.log(iterator.next()) // { value: 1, done: false }
  // console.log(iterator.next()) // { value: 2, done: false }
  // console.log(iterator.next()) // { value: 3, done: false }
  // console.log(iterator.next()) // { value: 4, done: false }
  // console.log(iterator.next()) // { value: 5, done: false }
  // console.log(iterator.next()) // { value: undefined, done: true }


  // var someString = "hi";
  // console.log(typeof someString[Symbol.iterator])
  // // "function"

  // var iterator = someString[Symbol.iterator]();
  // console.log(iterator.next())  // { value: "h", done: false }
  // console.log(iterator.next())  // { value: "i", done: false }
  // console.log(iterator.next())  // { value: undefined, done: true }

// var obj = {a : 'x'}
// console.log(typeof obj[Symbol.iterator])


// var str = new String("hi");

// console.log([...str]) // ["h", "i"]

// str[Symbol.iterator] = function() {
//   return {
//     next: function() {
//       console.log('bool ====> ',this._first)
//       if (this._first) {
//         this._first = false;
//         console.log('============= yjw ============')
//         return { value: "bye", done: false };
//       } else {
//         return { done: true };
//       }
//     },
//     _first: true
//   };
// };

// console.log([...str]) // ["bye"]
// console.log(str) // "hi"


// var testArr = ['x', 'y', 'z'];
// for (let v of testArr){
//     console.log(v)  // x  y   z
// }

// var obj3 = {};
// obj3[Symbol.iterator] = testArr[Symbol.iterator].bind(testArr);

// for(let v of obj3) {
//   console.log(v); // x  y   z
// }


// var testArr = ['x', 'y', 'z'];
// testArr.foo = 'abc'

// for (let v of testArr){
//     console.log('of ---> ', v)
// }

// for (let v in testArr){
//     console.log('in ---> ', v)
// }


// for (let x of 'a\uD83D\uDC0A') {
//   console.log(x);
// }
// // 'a'
// // '\uD83D\uDC0A'


// var arrayLike = { 0: 'a', 1: 'b', length: 2};

// // 报错
// // for (let x of arrayLike) {
// //   console.log(x);
// // }

// // 正确
// for (let x of Array.from(arrayLike)) {
//   console.log(x);
// }


  // // 方案一：
  // var someObject = {a: 'aa', b: 'bb'};
  // for (var key of Object.keys(someObject)) {
  //   console.log(key + ': ' + someObject[key]);
  // }
  // // a: aa
  // // b: bb

  // // 方案二：
  // function* entries(obj) {
  //   for (let key of Object.keys(obj)) {
  //     yield [key, obj[key]];
  //   }
  // }

  // var obj = {name: 'yijiang', age: '18'};
  // for (let [key, value] of entries(obj)) {
  //   console.log(key, '->', value);
  // }
  // // name -> yijiang
  // // age -> 18


  // var array = [1,2,3,4,5,6,7,8,9]
  // for(let i=0; i < array.length; i++){
  //     console.log(array[i]);
  //     if(i>5) break;
  // }

  // var array = [1,2,3,4,5,6,7,8,9]
  // // array.forEach(v => {
  // //   console.log(v)
  // //   if(v > 5) return;  
  // // })

  // for(let v of array){
  //   console.log(v);
  //   if(v > 5) return;
  // }

  // let iterable = {
  //   0: 'a',
  //   2: 'c',
  //   3: 'd',
  //   4: 'r',
  //   length: 3,
  //   [Symbol.iterator]: Array.prototype[Symbol.iterator]
  // };
  // for (let item of iterable) {
  //   console.log(item); // 'a', 'b', 'c'
  // }


//   var arr = ['b', 'd', 'e'];
// Array.prototype[Symbol.iterator] = function(){
//     const self = this;
//     let index = 0;
//     return {
//       next() {
//         if (index < self.length) {
//             console.log('yjw ----------> ', index)
//           return {
//             value: self[index++],
//             done: false
//           };
//         } else {
//           return { value: undefined, done: true };
//         }
//       }
//     };
// }
// var [n1,n2] = arr


// var str = new String("hi");

// console.log([...str]) // ["h", "i"]

// str[Symbol.iterator] = function() {
//   return {
//     next: function() {
//       if (this._first) {
//         this._first = false;
//         console.log('============= yjw ============')
//         return { value: "bye", done: false };
//       } else {
//         return { done: true };
//       }
//     },
//     _first: true
//   };
// };

// console.log([...str]) // ["bye"]
// console.log(str) // "hi"


// var testArr = ['x', 'y', 'z'];
// testArr.foo = 'abc'

// for (let v of testArr){
//     console.log('of ---> ', v)
// }

// for (let v in testArr){
//     console.log('in ---> ', v)
// }

// for (let x of 'a\uD83D\uDC0A') {
//   console.log(x);
// }
// // 'a'
// // '\uD83D\uDC0A'

// for (let x in 'a\uD83D\uDC0A') {
//   console.log(x);
// }
// // 'a'
// // '\uD83D\uDC0A'


// var array = [1,2,3,4,5,6,7,8,9]
// array.forEach(v => {
//   console.log(v)
//   if(v > 5) return;  
// })

// for( let i of array){
//   console.log(i)
//   if( i > 5) return
// }

// var obj = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
// }

// for( let k in obj){
//   console.log(k);
//   if(k === 'b') continue
//   console.log('------------')
// }

function* testGen(){
  yield 'Hello';
  yield 'World';
  return 'end';
  yield 'extra';
}

let tg = testGen();
console.log(tg.next())  // { value: 'Hello', done: false }
console.log(tg.next())  // { value: 'World', done: false }
console.log(tg.next())  // { value: 'end', done: true }
console.log(tg.next())  // { value: undefined, done: true }