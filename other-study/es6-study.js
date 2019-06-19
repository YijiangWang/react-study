/** 一、数值的扩展
 * 1、二进制和八进制：
 *  1.1. 二进制前缀为 0b 或者 0B
 *  1.2. 八进制前缀为 0o 或者 0O
 *  1.3. 将二进制、八进制转化为十进制：Number('0b111')
 */

 //严格模式
//  (function(){
//    'use strict'
//    console.log(0o11 === 011)
//  })()

 //将 0b 和 0B 转化为十进制

  // console.log(0o767);
  // console.log(Number('0b111'));
  // console.log(Number('0O111'));

/**
 * 2、Number.isFinite() 和 Number.isNaN()
 * 2.1.1. Number.isFinite()：判断数值是否有限；如果参数类型不是数值，一律返回 false；
 * 2.1.2. 全局函数 isFinite(true) 结果为 true，自己总结：如果参数是 true、'15' 等可以通过 Number() 转化为有限数值，则返回 true；
 * 2.2.1. Number.isNaN()：用来检查一个值是否为 NaN；只有对于 NaN 才返回 true，非 NaN 一律返回 false;
 * 2.2.2. isNaN()，先将参数通过 Number() 进行转化，然后再进行 Number.isNaN() 进行判断。
 */
// console.log(Number.isFinite('15'));      // false
// console.log(Number.isFinite(15));        // true
// console.log(Number.isFinite(1/3));       // true
// console.log(Number.isFinite(NaN));       // false
// console.log(Number.isFinite(true));      // false
// console.log(Number.isFinite(Infinity));  // false

// console.log(isFinite(true));      //true
// console.log(isFinite('15'));      //true
// console.log(isFinite('a'));       //false
// console.log(isFinite(NaN));       //false
// console.log(isFinite(Infinity));  //false

// console.log(Number.isNaN('att'));     // false
// console.log(Number.isNaN(Number('NaN')));     // false
// console.log(Number.isNaN(NaN));       // true
// console.log(Number.isNaN(true));      // false
// console.log(Number.isNaN(9 / NaN));   // true
// console.log(Number.isNaN(9 / 'a'));   // true


// console.log(Number.isFinite(9 / 0));
// console.log((9 / 0));

// console.log(isNaN('NaN'));      // true
// console.log(isNaN(NaN));        // true
// console.log(isNaN('att'));      // ???
// console.log(isNaN(true));       // false
// console.log(isNaN(9 / NaN));    // true
// console.log(isNaN(9 / 'a'));    // true

/**
 * 3. Number.parseInt() 和 Number.parseFloat()
 * 3.1. 将 es5 的全局方法 parseInt()、parseFloat() 移植到对象 Number 上面，行为完全保持不变，这样做的目的是为了减少全局方法，使语言逐步模块化。
 */

// console.log(parseInt('1231a'));               // 1231
// console.log(Number.parseInt('1231a'));        // 1231
// console.log(Number.parseInt('a123'));         // NaN
// console.log(parseFloat('123.321a'));          // 123.321
// console.log(Number.parseFloat('123.321aa'));  // 123.321
// console.log(Number.parseFloat('12a3.321'));   // 12

// console.log(Number('123a'));

/**
 * 4. Number.isInteger()
 * 4.1. 该方法用来判断一个数是否为整数；
 * 4.2. JavaScript 内部，整数和浮点数采用的是同样的储存方法，即 25 和 25.0 被视为同一个数；
 * 4.3 如果参数不是数值，返回结果 false。
 */

// console.log(Number.isInteger('15'));                  // false
// console.log(Number.isInteger(15));                    // true
// console.log(Number.isInteger(15.0));                  // true
// console.log(Number.isInteger(true));                  // false
// console.log(Number.isInteger(3.0000000000000002));    // true
// console.log(Number.isInteger(3.0000000000000003));    // ???

// JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）；如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判；原因就是这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。
//一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0
// console.log(Number.isInteger(5e-324));

/**
 * 5. EPSILON
 * 5.1. 表示 1 与大于 1 的最小浮点数之间的差，一个极小的常量；
 * 5.2. JavaScript 能够表示的最小精度；
 * 5.3. 作用：在为浮点数计算时，设置一个误差范围，如果误差小于2的-50次方（即Number.EPSILON*Math.pow(2,2)），就认为这两个数相等。
 */
// console.log(Number.EPSILON.toFixed(20));  //0.00000000000000022204
// console.log(Number.EPSILON * Math.pow(2,2));
// console.log(Math.pow(2, -50));

// console.log(0.1 + 0.2 === 0.3);          // false
// console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);    // true

// console.log(0.1 + 0.2 - 0.3 < Number.EPSILON * Math.pow(2,2));
// console.log(2e-2);

// let stringA = 'I ' + 'am ' + 'a ' + 'boy.';
// console.log(stringA);

// let stringB = `You are a girl.${stringA}`;
// console.log(stringB); 

// const arrA = [1, 4, 2, 10, 21, 32, 311];


/**
 * 6. 安全整数和 Number.isSafeInteger()
 * 6.1. JavaScript 能够准确表示的整数范围在 -2^53 到 2^53 之间（不含两个端点），超过这个范围，无法精确表示，并且以边界值进行存储；
 * 6.2. Number.MAX_SAFE_INTEGER) 和 Number.MIN_SAFE_INTEGER 用来表示范围的上下限；
 * 6.3. Number.isSafeInteger() 用来判断一个整数是否在这个范围之内（包括边界）；
 * 6.4. 注意：验证运算结果是否落在安全整数的范围内时，不止要验证运算结果，还要验证参与运算的每一个值；
 */

// console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
// console.log(Math.pow(2, 53));            // 9007199254740992
// console.log(Math.pow(2, 53) + 1);        // 9007199254740992
// console.log(Math.pow(2, 53) + 2);        // 9007199254740994
// console.log(Math.pow(2, 53) - 1 === Number.MAX_SAFE_INTEGER);  // true
// console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);          // true
// console.log(Math.pow(2, 53) === Math.pow(2, 53) + 2)           // false

// console.log(Math.pow(2, 53));
// console.log(Math.pow(2, 53) + 1);
// console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1); //true
// console.log(Number.MIN_SAFE_INTEGER === -Math.pow(2, 53) + 1);  //true

// console.log(Number.isSafeInteger(3.2));   // false
// console.log(Number.isSafeInteger('3'));   // false
// console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));   // true
// console.log(Number.isSafeInteger(Math.pow(2, 53)));       // false
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 3));

// function isSafeInteger(n) {
//   return (typeof n === 'number' &&
//     Math.round(n) === n &&
//     Number.MIN_SAFE_INTEGER <= n &&
//     n <= Number.MAX_SAFE_INTEGER);
// }

/**
 * 7. Math 对象的扩展：ES6 在 Math 对象上新增了 17 个数学相关的静态方法，只能 Math 对象调用
 * 7.1. Math.trunc()：除去一个数的小数部分，返回整数部分；对于非数值，会先将其使用 Number 方法转为数值；对于空值和无法截取整数的值返回 NaN（Math.trunc(null) 为 0）；
 * 
 */

// console.log(Math.trunc(3.9));         // 3
// console.log(Math.trunc(-4.9));        // -4
// console.log(Math.trunc('23.88'));     // 23
// console.log(Math.trunc('23.8a'));     // NaN
// console.log(Math.trunc('2a.88'));     // NaN
// console.log(Math.trunc(undefined));   // NaN
// console.log(Math.trunc(-0));

// //实现
// const truncFun = (x) => {
//   return x<0 ? Math.ceil(x) : Math.floor(x);
// }
// console.log(Math.ceil('a'));

/**
 * 7.2. Math.sign()：判断一个数是整数、负数还是 0，对于非数值，先将其转换为数值。
 * 7.2.1. 返回的值有：+1/-1/+0/-0/NaN
 */
// console.log(Math.sign(''));       // 0
// console.log(Math.sign(null));     // 0
// console.log(Math.sign('-0'));     // -0
// console.log(Math.sign('-11'));    // -1
// console.log(Math.sign('11'));     // 1
// console.log(Math.sign(+'-11'));   // -1
// console.log(Math.sign('11a'));    // NaN

// console.log(typeof(+'-11'));
// 实现
// const signFun = (x) => {
//   console.log('first =====> ', x);      // first =====>  0
//   x = +x;
//   console.log('second =====> ', x);     // second =====>  0
//   if(x === 0 || isNaN(x)){
//     console.log('third =====> ', x);    // third =====>  0
//     return x;
//   }
//   console.log('forth =====> ', x);
//   return x > 0 ? 1 : -1;
// };
// console.log(signFun(-0))        // -0

/**
 * 7.3. Math.cbrt()：计算一个数的立方根，对于非数值，方法内部会先使用 Number 方法将其转换为数值（(Math.cbrt(null)：0）
 */
// console.log(Math.cbrt(null));   //0
// console.log(Math.cbrt(-27));    //-3
// console.log(Math.cbrt(8));      //2
// console.log(Math.cbrt(-0));     // -0
// // 实现
// const cbrtFun = (x) => {
//   let y = Math.pow(Math.abs(x), 1/3)
//   return x < 0 ? -y : y;
// }
// console.log(cbrtFun(-8));   // -2


// clz32()
// count leading zero bits in 32-bit binary representation of a number
// 将参数转为 32 位无符号整数的形式，然后这个 32 位值里面有多少个前导 0。
// 左移运算符（<<）与Math.clz32方法直接相关。
// 对于小数，Math.clz32方法只考虑整数部分。
// 对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算。

// console.log(Math.clz32(1));  // 31
// console.log(Math.clz32(2));  // 30
// console.log(Math.clz32(4));  // 29
// console.log(Math.clz32(8));  // 28
// console.log(Math.clz32(1 << 1));  // 30
// console.log(Math.clz32(2 << 1));  // 29
// console.log(Math.clz32(4 << 2));  // 27
// console.log(Math.clz32(8 << 2));  // 26

// console.log(Math.clz32(2.1));     // 30
// console.log(Math.clz32(4.9));     // 29
// console.log(Math.clz32());        // 32
// console.log(Math.clz32(NaN));     // 32
// console.log(Math.clz32('foo'));   // 32
// console.log(Math.clz32(true));    // 31
// console.log(Math.clz32({}));      // 32
// console.log(Math.clz32([]));      // 32

// imul()
// 返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
// 只考虑最后 32 位，大多数情况下，Math.imul(a, b)等同于(a * b)|0的效果（超过 32 位的部分溢出）
// 两个数的乘积超过了 2 的 53 次方，js 无法保存额外的精度，就把低位的值都变成了 0。Math.imul方法可以返回正确的值 1。
// console.log(Math.imul(2, 4));             // 8
// console.log(Math.imul(2, -4));            // -8
// console.log(Math.imul(-3, -4));           // 12
// console.log(-3 * -4 | 0);                 // 12
// console.log(0x7fffffff * 0x7fffffff | 0);         // 0
// console.log(Math.imul(0x7fffffff, 0x7fffffff));   // 1

// Math.hypot方法返回所有参数的平方和的平方根。
// 如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。

// console.log(Math.hypot(-3));          // 3
// console.log(Math.hypot(3, 4));        // 5
// console.log(Math.hypot(3, 4, 5));     // 7.0710678118654755
// console.log(Math.hypot());            // 0
// console.log(Math.hypot(NaN));         // NaN
// console.log(Math.hypot(3, 4, 'foo')); // NaN
// console.log(Math.hypot(3, 4, '5'));   // 7.0710678118654755

// Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。
// console.log(Math.exp(true));    // 2.718281828459045
// console.log(Math.expm1(1));     // 1.718281828459045
// console.log(Math.expm1(0));     // 0


// log1p()
// Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。
// 如果x小于-1，返回NaN。
// console.log(Math.log1p(1.718281828459045));   // 1
// console.log(Math.log1p(0));     // 0
// console.log(Math.log1p(-1));    // -Infinity
// console.log(Math.log1p(-2));    // NaN


// log10()
// Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。
// console.log(Math.log10(10));    // 1
// console.log(Math.log10(1));     // 0
// console.log(Math.log10(0));     // -Infinity
// console.log(Math.log10(-2));    // NaN
// console.log(Math.log10(1000));  // 3

// Math.log2()
// Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。
// console.log(Math.log2(4));     // 2
// console.log(Math.log2(1));     // 0
// console.log(Math.log2(0));     // -Infinity
// console.log(Math.log2(-2));    // NaN
// console.log(Math.log2(16));    // 4

// 指数运算符（**）
// 特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。
// 可以与等号结合，形成一个新的赋值运算符（**=）。
// V8 引擎的指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。
// console.log(2 ** 3);        // 8
// console.log(3 ** 2);        // 9
// console.log(3 ** '2');      // 9
// console.log(2 ** 3 ** 2);   // 512
// console.log(3 ** 2 ** 2);   // 81

// let a = 3; a **= 2;   // a = a * a,  9
// let b = 4; b **= 3;   // b = b * b * b,  64

// console.log(Math.pow(99, 99));    // 3.697296376497263e+197
// console.log(99 ** 99);            // 3.697296376497268e+197


// function* gen(){
//   yield 'heiheihei';
//   yield 'haha';
//   return 'end来了';
//   yield '还有吗';
// }

// const [a, b, c, d] = gen()  //只会取到 return 的前面一句
// console.log(a, b, c, d);  //heiheihei haha undefined undefined
// const g = gen();
// console.log(g);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function* testFunc(){
//   let a = 0;
//   let b = 1;
//   while(true){
//     yield a;
//     [a, b] = [b, a + b];
//   } 
// }

// const test = testFunc();
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());
// console.log(test.next());

// const items = new Set([1,2,3,4,5,6,4,3,2]);
// console.log(items)  //Set { 1, 2, 3, 4, 5, 6 }





/**
 * 二、字符串的扩展
 * 2.1. 码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示 "\uD842\uDFB7"；ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符 "\u{20BB7}"。
 * 2.2. charAt 方法无法读取整个字符(4个字节)；charCodeAt 方法只能分别返回前两个字节和后两个字节的值；ES6 提供了 codePointAt 方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。
 * 2.3. 注：fromCodePoint 方法定义在 String 对象上，而 codePointAt 方法定义在字符串的实例对象上。
 * 2.4. ES6 增加了 for...of 接口遍历字符串，这个遍历器最大的优点是可以识别大于 0xFFFF 的码点；
 * 2.5. padStart(),padEnd()：如果原字符串的长度大于或等于最大长度，则字符串补全不生效，返回原字符串。
 */

// 2.6. 字符串模板可以嵌套
// const tmpl = addrs => `
//   <table>
//     ${addrs.map(addr => `
//       <tr><td>${addr.first}</td></tr>
//       <tr><td>${addr.last}</td></tr>
//     `).join('')}
//   </table>
// `;
// const data = [
//   {first: 'wang', last: 'yijiang'},
//   {first: 'Mike', last: 'Jackson'}
// ]
// console.log(tmpl(data));

// 2.7. 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写
// 写法一：
// let str = 'return' + '`Hello ${name}!`';
// let func = new Function('name', str);
// console.log(func('jack'));


/**
 * 数组的扩展
 * 
 */

// function testArr(a, b, c, d){
//   console.log(a + b + c + d);
// }
// const arr1 = [2, 3];
// testArr(-1, ...arr1, 2, ...[3, 5]);   // 6

// 复制数组
// const arr2 = [3, 7];
// const arr3 = arr2;  //arr3 和 arr2 指向同一个地址；
// arr3[0] = 9;
// console.log(arr2);  // [9, 7']

// const arr4 = [13, 17];
// const arr5 = arr4.concat(); // arr5 是对 arr4 的克隆
// arr5[0] = 19;
// console.log(arr4);  // [13, 17]

// const arr6 = [23, 26];
// const arr7 = [...arr6]; // arr7 是对 arr6 的克隆
// arr7[0] = 29;
// console.log(arr6);  //[23, 26]

// const arr8 = [33, 37];
// const [...arr9] = arr8; // arr9 是对 arr8 的克隆
// arr9[0] = 39;
// console.log(arr8);  // [33, 37]

// 合并数组
// const a1 = [{name: 'yijiang'}];
// const a2 = [{age: 18}];
// const a3 = a1.concat(a2);  // 这两种方法都是对原数组成员的引用，都是浅拷贝
// const a4 = [...a1, ...a2];
// console.log(a3, a4);  // [ { name: 'yijiang' }, { age: 18 } ] [ { name: 'yijiang' }, { age: 18 } ]
// a1[0].name = 'maerni';
// a2[0].age = 16;
// console.log(a3, a4);  // [ { name: 'maerni' }, { age: 16 } ] [ { name: 'maerni' }, { age: 16 } ]

// 字符串
// console.log([...'hello']);  // [ 'h', 'e', 'l', 'l', 'o' ]

// 通过 Array.from() 方法将类数组转为真正的数组
// const arrayLike = {
//   0: 'aaa',
//   1: 'bbb',
//   2: 'ccc',
//   length: 3
// }
// const arrayTrue = Array.from(arrayLike);
// console.log(arrayTrue); // [ 'aaa', 'bbb', 'ccc' ]
// 总结：扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换;
//      Array.from 方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换

// Array.of()：将一组值转换为数组
// const ao1 = Array.of(2, 3, 5);
// console.log(ao1);

// copyWithin(target, start, end )：将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
// const c1 = [3, 4, 5, 6, 7, 8].copyWithin(1, 0, 3);
// console.log(c1);  // [ 3, 3, 4, 5, 7, 8 ]

// 数组实例的find方法，用于找出第一个符合条件的数组成员
// const f1 = [3, 5, 7, 9].find(n => n < 6);
// console.log(f1);  // 3

// const f2 = [3, 5, 7, 9].findIndex(n => n > 6);
// console.log(f2);  // 2

// fill(value, start, end)：使用给定值 value，填充一个数组；
// const f1 = ['a', 'b', 'c', 'd', 'e'].fill(88, 2, 4); 
// console.log(f1);  // ['a', 'b', 88, 88, 'e']

// includes(value, start)：检查某个值是否在数组中
// console.log([1,2,3,4,5,6].includes(3, 5));  // false

// flat()：如果数组是多维的，该方法将数组拉平；默认参数是 1，只拉平一层，如果要拉平多层，可传入一个正整数
// const f1 = [1,2,3,[4,5,[6,7,[8,9],10,11],12,13],14];
// console.log(f1.flat()); // [1, 2, 3, 4, 5, [6, 7, [8, 9], 10, 11], 12, 13, 14]
// console.log(f1.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// flatMap()：方法对原数组的每个成员执行一个函数（map 函数），然后对返回值组成的数组执行 flat() 方法
// console.log([1, 2, 3].flatMap(x => x * x));       // [1, 4, 9];
// console.log([1, 2, 3].flatMap(x => [x * x]));     // [1, 4, 9];
// console.log([1, 2, 3].flatMap(x => [[x * x]]));   // [[1], [4], [9]]

// var arr1 = [3, 1, 2];
// for(let i=0; i<arr1.length; i++){
//   for (let j = 0; j < arr1.length; j++) {
//     if(arr1[i] > arr1[j]){
//       let temp = arr1[i];
//       arr1[i] = arr1[j];
//       arr1[j] = temp;
//     }
//   }
//   console.log('inner ====> ', arr1);
// }
// console.log('last ====> ', arr1);




// const reg1 =  /^[a-zA-Z0-9\u4e00-\u9fa5\uff00-\uffff\u3000\\[\\],.{}()<>?/|`~\"'@#$%&*《》（）+=_￥¥。，、;:：；【】…？！!”“’‘• \\r\\n\\t\\\\-]*$/
// const reg2 = /^[a-zA-Z0-9\u2f00-\u2fdf\u4e00-\u9fa5\uff00-\uffff\u3000\u3400-\u4DB5\uf900-\ufaff\ue863\\[\\],.{}()<>?/\\|`"'@#$%&*《》（）+=_¥￥。，、;:：；【】…？！!”“’‘• \\r\\n\\t\\\\-]*$/
// const temp = `”\u2f00-\u2fdf“，”\u3400-\u4DB5“，”\uf900-\ufaff“, "\ue863"`
// console.log(reg1.test('王'));


// const arr = ['a', 'b'];
// console.log(arr.values ())


/**
 * Symbol 类型：第七种数据类型
 */
// const a = Symbol('aaa');
// const b = Symbol('bbb');
// console.log(a.toString());

// 参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
// const obj = {
//   aaa: 222,
//   toString(){
//     return 'obj'
//   }
// };
// console.log(Symbol(obj));

// Symbol 值作为对象属性名时，不能用点运算符;因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值
// const obj = {};
// const sym = Symbol();
// obj[sym] = 'aaa'
// console.log(obj.sym);
// console.log(obj[sym]);
// const ttt = {}
// console.log(Object.getOwnPropertySymbols(obj));


/**
 * Set：新的数据结构，它类似于数组，但是成员的值都是唯一的，没有重复的值。
 * 
 * 1、去除数组重复成員；
 * 2、向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值；
 * 3、操作方法：add、delete、has、clear
 * 4、遍历方法：keys、values、entries、forEach
 * 
 * WeakSet：结构与 Set 类似，也是不含有相同的值。但是和 Set 有两点不同：一/WeakSet的成员只能是对象；二/WeakSet中的对象都是弱引用。
 */

// let setArr = new Set(['a','b','c']);

// for(let item of setArr.entries()){
//   console.log(item)
// }


/**
 * Map：一种数据结构，它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
 * 属性：size
 * 操作方法：set(key,value)、get(key)、has(key)、delete(key)、clear()
 * 遍历方法：keys()、values()、entries()、forEach()
 */

var arr = ['a','b','c','d'];
var arrayIt = arr[Symbol.iterator]();
console.log(arrayIt.next());  //{value: "a", done: false}
console.log(arrayIt.next());  //{value: "b", done: false}
console.log(arrayIt.next());  //{value: "c", done: false}
console.log(arrayIt.next());  //{value: "d", done: false}
console.log(arrayIt.next());  //{value: undefined, done: true}