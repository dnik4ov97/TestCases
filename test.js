// Object matching
var obj = {a: 1, b: 2, c: 3};

let {a, b, c, d} = obj;

console.log(a == obj.a);
console.log(`obj.a:${obj.a}`);
console.log(`a:${a}`);
a = "name";
console.log(`obj.a:${obj.a}`);
console.log(`a:${a}`);
obj.a = 3;
console.log(`obj.a:${obj.a}`);
console.log(`a:${a}`);
