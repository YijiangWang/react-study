// 一、数组操作
const arr1 = [1, 2, 3, 4];

//1.遍历数组
arr1.forEach((val) => {
  console.log('arr1 =======> ', val);
});

//2.映射新数组
let arr2 = arr1.map(val => Math.pow(val, 2));
console.log('arr2 =====> ', arr2);

//3.测试所有元素是否通过
let arr3 = arr1.every(val => val>2);
console.log('arr3 =====> ', arr3);

//4.测试是否有数据通过
let arr4 = arr1.some(val => val>2);
console.log('arr4 =====> ', arr4);

//5.过滤数组
let arr5 = arr1.filter(val => val>2);
console.log('arr5 ======> ', arr5);

//6.数组去重
let arr61 = [1,2,3,4,5,6,7,6,5,4,3,2];
console.log('arr61 ========> ', arr61);
let arr62 = [...new Set(arr61)];
console.log('arr62 ========> ', arr62);


//二、对象操作
const obj = {name: 'yijiang', age: 18, degree: 'bachelor'};

//1.获取对象所有的 key
const keys = Object.keys(obj);
console.log('keys ======> ', keys);

//2.获取对象所有的 val
const values = Object.values(obj);
console.log('values ======> ', values);

//3.遍历数组，entries 会生成一个二维数组，每一个键值对会生成一个数组，插入到大数组中
const keyValue = Object.entries(obj);
console.log('keyValue ==========> ', keyValue);