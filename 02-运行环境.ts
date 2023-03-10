// import { bar } from "./03-类型注解与类型推断"
// var foo = 456
// console.log(foo + bar)
const w: number = 235
// a.map((item)=>item)

// npx tsc 02-运行环境.ts -w 实时更新
// ts默认是全局环境（不知道为啥我没成功）,只要文件使用模块化操作，那么就会变成局部环境

// npx tsc --init  初始化生成tsconfig.json文件
// 在tsconfig.json文件中修改outDir：'./dist'; 意思是自动把所有的ts文件在dist文件下生成js文件
