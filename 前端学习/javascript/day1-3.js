//1.3函数
//1.函数声明(有提升)，提升指的是js引擎在正式执行代码之前，会先扫描当前作用域中的声明，把它们提前处理到作用域的顶部。所以在声明前也可以调用。
console.log(`a+b=${add(2,3)}`);
function add(a,b=0){
    return a+b;
}
console.log(add(2,null));
//2.