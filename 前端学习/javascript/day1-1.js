// ============================================================
// const、let、var 的区别（完整示例）
// 补充：undefined 与 null
// ============================================================
//
// 运行：
//   node JavaScript_变量与数据类型_完整示例.js
//
// 说明：
//   1. 以“const、let、var 的区别”为主体。
//   2. 只补充 undefined 与 null，不扩充其他主题。
//   3. undefined / null 部分用 IIFE 包起来，避免和后面的
//      let a、const obj、var p 等示例重名。
//
// ============================================================
// ---------- 0. 基本定位 ----------
// const、let、var 都是声明变量的关键字。
// 变量是容器，数据类型是容器里装的东西。
// 关键字决定：作用域、能否重复声明、能否重新赋值等规则。
// ---------- 1. 数据类型回顾 ----------
// 7 种原始类型：
//   number、string、boolean、null、undefined、symbol、bigint
// 引用类型本质只有 1 种：Object
// 内置子类型/构造函数：Array、Date、RegExp、Function、Map、Set、Promise 等
// 引用类型的值存的是对象的引用地址。
// ============================================================
// 2. undefined 与 null（补充）
// ============================================================
//
// 先纠正一个常见说法：
//   undefined 和 null 都是原始值。
//   undefined 的类型是 Undefined；null 的类型是 Null。
//   typeof null === "object" 是 JavaScript 早期实现遗留的 bug，
//   不代表 null 真的是对象。
//
// 简单理解：
//   undefined：变量声明了但没有赋值；或属性不存在、函数没有返回值。
//   null：变量已经赋值了，但值是“空”；通常由开发者主动赋值。
//
// 下面用 IIFE 包起来，避免变量名和后面的示例冲突。
(function undefinedAndNull() {
  // ---------- 2.1 声明未赋值：undefined ----------
  let a;
  console.log(a); // undefined
  a = 123;
  console.log(a); // 123
  let b = null;
  console.log(b); // null
  console.log(typeof undefined); // undefined
  console.log(typeof null);      // object（历史 bug）
  let c;
  console.log(c); // undefined
  // ---------- 2.2 函数没有返回值 ----------
  function fn() {}
  console.log(fn()); // undefined
  // ---------- 2.3 函数调用时没传参数 ----------
  function fn1(x) {
    console.log(x);
  }
  fn1();          // undefined
  fn1("xiziwan"); // xiziwan
  // ---------- 2.4 对象属性不存在 ----------
  const obj = { a: 1 };
  console.log(obj.b, obj.a, obj.c); // undefined 1 undefined
  // ---------- 2.5 数组越界 ----------
  const arr = [1, 2, 3];
  console.log(arr[100]); // undefined
  // ---------- 2.6 var 的声明提升 ----------
  // 原示例用 p；这里在 IIFE 内部，不会和后面的 var p 冲突。
  console.log(p); // undefined（声明提升，赋值不提升）
  var p = 666;
  console.log(p); // 666
  // ---------- 2.7 主动赋 null ----------
  let user = null;
  console.log(user); // null
  user = { name: "xiziwan", age: 18 };
  console.log(user); // { name: "xiziwan", age: 18 }
  // ---------- 2.8 相等与类型转换 ----------
  console.log(null == undefined);  // true
  console.log(null === undefined); // false
  console.log(Boolean(null));      // false
  console.log(Boolean(undefined)); // false
  console.log(Number(null));       // 0
  console.log(Number(undefined));  // NaN
  console.log(null + 1);           // 1
  console.log(undefined + 1);      // NaN
  console.log(String(null));       // "null"
  console.log(String(undefined));  // "undefined"
  // ---------- 2.9 JSON.stringify ----------
  var d = JSON.stringify({ a: undefined, b: null });
  // '{"b":null}'
  console.log(d); // {"b":null}
  // ---------- 2.10 默认参数 ----------
  // 默认参数只在参数为 undefined 时生效，null 不会触发。
  function fnDefault(x = 1) {
    console.log(x);
  }
  fnDefault(undefined); // 1
  fnDefault(null);      // null
  fnDefault();          // 1
})();
// ============================================================
// 3. var：函数/全局作用域，允许重复声明，声明前访问得到 undefined
// ============================================================
console.log(p); // undefined（声明提升，赋值不提升）
var p = 1;
console.log(p); // 1
var p = 2;      // 允许重复声明，覆盖之前的值
console.log(p); // 2
// var 的作用域是函数作用域，不只在全局
function varScope() {
  console.log(x); // undefined
  var x = 10;
  console.log(x); // 10
}
varScope();
// console.log(x); // ReferenceError，x 不会穿出函数
// ============================================================
// 4. let：块级作用域，不允许重复声明，有暂时性死区，可重新赋值
// ============================================================
// console.log(q); // ReferenceError: Cannot access 'q' before initialization
let q = 1;
console.log(q); // 1
q = 2;          // 允许重新赋值
console.log(q); // 2
// let q = 3;   // SyntaxError: Identifier 'q' has already been declared
// 暂时性死区对 typeof 也生效
// console.log(typeof t); // ReferenceError，不是 "undefined"
let t = 1;
console.log(t); // 1
// ============================================================
// 5. const：块级作用域，不允许重复声明，有暂时性死区，不能重新赋值
// ============================================================
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 100;
console.log(a); // 100
// a = 200;     // TypeError: Assignment to constant variable.
// const b;     // SyntaxError: Missing initializer in const declaration
// const 限制的是“不能重新绑定”，对象内部属性可以改
const obj = { x: 1 };
obj.x = 2;        // 合法
console.log(obj); // { x: 2 }
// obj = {};      // TypeError，不能重新赋值
// ============================================================
// 6. 块级作用域：var 能穿透，let/const 不能
// ============================================================
{
  let a1 = 2;
  const a2 = 1000;
  var a3 = 3;
  console.log(a1, a2, a3); // 2 1000 3
}
// console.log(a1); // ReferenceError
// console.log(a2); // ReferenceError
console.log(a3);    // 3，var 穿透了块
// 块内 let/const 遮蔽外层同名变量（合法，不是重复声明）
let shadow = "outer";
{
  let shadow = "inner";
  console.log(shadow); // inner
}
console.log(shadow);   // outer
// 同一作用域内 let 和 var 同名会报语法错误
// let conflict = 1;
// {
//   var conflict = 2; // SyntaxError: Identifier 'conflict' has already been declared
// }
// ============================================================
// 7. 循环中的表现（块级作用域最典型的场景）
// ============================================================
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0); // 三次 var: 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0); // let: 0、let: 1、let: 2
}
// for...of / for...in 中可以用 const（每次迭代新建绑定）
for (const item of [1, 2, 3]) {
  console.log("const item:", item); // 1、2、3
}
// ============================================================
// 8. 全局作用域下的差异（浏览器脚本环境）
// ============================================================
// 在浏览器 <script> 中：
//   var g1 = 1;   -> window.g1 === 1
//   let g2 = 2;   -> window.g2 === undefined
//   const g3 = 3; -> window.g3 === undefined
// Node.js 模块环境下模块有作用域包装，这个差异不明显。
// ============================================================
// 9. 推荐用法
// ============================================================
// 默认用 const；需要重新赋值时用 let；避免使用 var。