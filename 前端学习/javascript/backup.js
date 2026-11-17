//undefined和null的区别,undefined表示变量声明了但没有赋值，null表示变量已经赋值了，但是值为空。undefined是一个类型，null是一个对象。
let a;
console.log(a); // undefined
a=123;
console.log(a); // 123
let b=null;
console.log(b); // null
console.log(typeof undefined); // undefined
console.log(typeof null); // object
let c;
console.log(c);
function fn(){}
console.log(fn()); // undefined
function fn1(x){
    console.log(x);
}
fn1();
fn1("xiziwan");
const obj={a:1};
console.log(obj.b,obj.a,obj.c); // undefined
const arr=[1,2,3];
console.log(arr[100]); // undefined
console.log(p);
var p=666;
console.log(p);
let user=null;
console.log(user);
user={name:"xiziwan",age:18};
console.log(user);
console.log(null==undefined); // true
console.log(null===undefined); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(null+1);
console.log(undefined+1);
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
var d = JSON.stringify({ a: undefined, b: null });
// '{"b":null}'
console.log(d);
function fn(x = 1) {
  console.log(x);
}
fn(undefined); // 1
fn(null);      // null