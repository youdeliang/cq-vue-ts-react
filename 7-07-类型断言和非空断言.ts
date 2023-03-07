let a:unknown ='123';
a = 456;
// 类型断言
(a as []).map(()=>{})
console.log('a :>> ', a);

let b:string|undefined = undefined
// 非空断言
b!.length