/** 一、数值的扩展
 * 1、二进制和八进制：
 *  1.1. 二进制前缀为 0b 或者 0B
 *  1.2. 八进制前缀为 0o 或者 0O
 *  1.3. 将二进制、八进制转化为十进制：Number('0b111')
 */

 //严格模式
//  (function(){
//    'ues strict'
//    console.log(0o11 === 011)
//  })()

 //将 0b 和 0B 转化为十进制
//  console.log(Number('0b111'));
//  console.log(Number('0O111'));

/**
 * 2、Number.isFinite() 和 Number.isNaN()
 * 2.1.1. Number.isFinite()：判断数值是否有限；如果参数类型不是数值，一律返回 false；
 * 2.1.2. 全局函数 isFinite(true) 结果为 true，自己总结：如果参数是 true、'15' 等可以通过 Number() 转化为有限数值，则返回 true；
 * 2.2.1. Number.isNaN()：用来检查一个值是否为 NaN；只有对于 NaN 才返回 true，非 NaN 一律返回 false;
 * 2.2.2. isNaN()，先将参数通过 Number() 进行转化，然后再进行 Number.isNaN() 进行判断。
 */
// console.log(Number.isFinite('15'));
// console.log(Number.isFinite(15));
// console.log(Number.isFinite(1/3));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(true));
// console.log(Number.isFinite(Infinity));
// console.log(isFinite(true));
// console.log(isFinite('15'));
// console.log(isFinite('a'));
// console.log(isFinite(NaN));
// console.log(isFinite(Infinity));

// console.log(Number.isNaN('att'));
// console.log(Number.isNaN('NaN'));
// console.log(Number.isNaN(NaN));
// console.log(isNaN('NaN'));
// console.log(isNaN(NaN));
// console.log(isNaN('att'));

/**
 * 3. Number.parseInt() 和 Number.parseFloat()
 * 3.1. 将 es5 的全局方法 parseInt()、parseFloat() 移植到对象 Number 上面，行为完全保持不变，这样做的目的是为了减少全局方法，使语言逐步模块化。
 */

// console.log(parseInt('1231a'));
// console.log(Number.parseInt('1231a'));
// console.log(parseFloat('123.321a'));
// console.log(Number.parseFloat('123.321aa'));
// console.log(Number.parseFloat('12a3.321'));

/**
 * 4. Number.isInteger()
 * 4.1. 该方法用来判断一个数是否为整数；
 * 4.2. JavaScript 内部，整数和浮点数采用的是同样的储存方法，即 25 和 25.0 被视为同一个数；
 * 4.3 如果参数不是数值，返回结果 false。
 */

// console.log(Number.isInteger('15'));
// console.log(Number.isInteger(true));
// console.log(Number.isInteger(3.0000000000000002));
// JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）；如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判；原因就是这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。
//一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0
// console.log(Number.isInteger(5e-324));

/**
 * 5. EPSILON
 * 5.1. 表示 1 与大于 1 的最小浮点数之间的差，一个极小的常量；
 * 5.2. JavaScript 能够表示的最小精度；
 * 5.3. 作用：在为浮点数计算时，设置一个误差范围，如果误差小于2的-50次方（即Number.EPSILON*Math.pow(2,2)），就认为这两个数相等。
 */
// console.log(Number.EPSILON);
// console.log(Number.EPSILON * Math.pow(2,2));
// console.log(Math.pow(2, -50));

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

// console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1); //true
// console.log(Math.pow(2, 53));
// console.log(Math.pow(2, 53) + 1);
// console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1); //true
// console.log(Number.MIN_SAFE_INTEGER === -Math.pow(2, 53) + 1);  //true

// console.log(Number.isSafeInteger(3.2));
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

/**
 * 7. Math 对象的扩展：ES6 在 Math 对象上新增了 17 个数学相关的静态方法，只能 Math 对象调用
 * 7.1. Math.trunc()：除去一个数的小数部分，返回整数部分；对于非数值，会先将其使用 Number 方法转为数值；对于空值和无法截取整数的值返回 NaN（Math.trunc(null) 为 0）；
 * 
 */

// console.log(Math.trunc(3.9));
// console.log(Math.trunc(-4.9));
// console.log(Math.trunc('23.88'));
// console.log(Math.trunc(undefined));
// //实现
// const truncFun = (x) => {
//   return x<0 ? Math.ceil(x) : Math.floor(x);
// }
// console.log(Math.ceil('a'));

/**
 * 7.2. Math.sign()：判断一个数是整数、负数还是 0，对于非数值，先将其转换为数值。
 * 7.2.1. 返回的值有：+1/-1/+0/-0/NaN
 */
// console.log(Math.sign('')); //0
// console.log(Math.sign(null));
// console.log(Math.sign('-0'));
// console.log(Math.sign('-11'));
// console.log(typeof(+'-11'));
// 实现
// const signFun = (x) => {
//   x = +x;
//   if(x === 0 || isNaN(x)){
//     return x;
//   }
//   return x > 0 ? 1 : -1;
// };
// console.log(signFun(8.8))

/**
 * 7.3. Math.cbrt()：计算一个数的立方根，对于非数值，方法内部会先使用 Number 方法将其转换为数值（(Math.cbrt(null)：0）
 */
// console.log(Math.cbrt(null));
// // 实现
// const cbrtFun = (x) => {
//   return Math.pow(Math.abs(x), 1/3)
// }
// console.log(cbrtFun(-8));

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
const tmpl = addrs => `
  <table>
    ${addrs.map(addr => `
      <tr><td>${addr.first}</td></tr>
      <tr><td>${addr.last}</td></tr>
    `).join('')}
  </table>
`;
const data = [
  {first: 'wang', last: 'yijiang'},
  {first: 'Mike', last: 'Jackson'}
]
console.log(tmpl(data));

// 2.7. 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写
// 写法一：
let str = 'return' + '`Hello ${name}!`';
let func = new Function('name', str);
console.log(func('jack'));
