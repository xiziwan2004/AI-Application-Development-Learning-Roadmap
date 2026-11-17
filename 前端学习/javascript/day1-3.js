//1.3函数
//1.函数声明(有提升)，提升指的是js引擎在正式执行代码之前，会先扫描当前作用域中的声明，把它们提前处理到作用域的顶部。所以在声明前也可以调用。
console.log(`a+b=${add(2,3)}`);
function add(a,b=1){
    return a+b;
}
console.log(add(2,null));//null不会触发默认值，但是2+null=2
console.log(add(2,undefined));//显示调用undefined,也触发默认值,默认参数只有在undefined或者空（没有赋值）的时候生效
console.log(add(2));//b默认为0
//2.函数表达式（不提升）
//匿名函数表达式
const num1=function (a,b){
    return a-b;
};
console.log(num1(2,3));
//以下会报错
//console.log(num2(3,6));
const num2=function (a,b){
    return a*b;
};
console.log(num2(3,6));
//具名函数表达式
const num3=function func(a,b){
    console.log(typeof func);//func只在函数体内可用
    return a/b;
};
console.log(num3(6,4));
const num=function fact(n){
    return n<=1?1:n*fact(n-1);
};
console.log(num(7));
//3.箭头函数
const double = n=>n*2;
console.log(double(4));

