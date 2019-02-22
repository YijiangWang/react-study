/** 一、数值的扩展
 * 1、二进制和八进制：
 *  1.1. 二进制前缀为 0b 或者 0B
 *  1.2. 八进制前缀为 0o 或者 0O
 *  1.3. 将二进制、十进制转化为十进制：Number('0b111')
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

let stringA = 'I ' + 'am ' + 'a ' + 'boy.';
console.log(stringA);

let stringB = `You are a girl.${stringA}`;
console.log(stringB); 

const arrA = [1, 4, 2, 10, 21, 32, 311];
console.log(arrA.sort('b' - 'a'));