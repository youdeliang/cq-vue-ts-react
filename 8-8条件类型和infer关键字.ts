export {}
type A = number
type B = string
type C = A extends B ? {} : []

// Exclude 排除
type Exclude<T, U> = T extends U ? never : T
type A1 = Exclude<number | string | boolean, string>

// Extract 包含
type Extract<T, U> = T extends U ? T : never
type A2 = Extract<number | string | boolean, string>

// NonNullable 排除null,undefined
type NonNullable<T> = T extends undefined | null ? never : T
type A3 = NonNullable<number | undefined | null>

// infer 定义类型
// Parameters 形参转元组类型
// 条件类型
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
type P = (n: string, m: number) => void
type A4 = Parameters<P>
let a4: A4 = ["hello", 1]

// ReturnType
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type Foo = () => void
type A5 = ReturnType<Foo>

// extends 条件类型
type A6<T> = T extends Array<infer U> ? U : T
type B1 = A6<Array<string>>
type B2 = A6<number>
