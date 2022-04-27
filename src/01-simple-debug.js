console.log('Simple debugging example running.')
// dev tools must be open for the debugger to trigger
debugger

let x = 99
let y = 42
debugger
console.log("x:", x)
console.log("y:", y)
console.log("x,y:", x,",",y)

debugger

let oo0 = { foo: 42, bar: 83, "key w/ spaces": true }

debugger
console.log(oo0["foo"])
console.log(oo0["bar"])
console.log(oo0["key w/ spaces"])

console.log(oo0.foo)
console.log(oo0.bar)
// you can't use the dot to access this key because it has spaces
// console.log(oo.key w/ spaces)

debugger
let oo1 = { foo: 42, bar: 83, baz: 79 }

debugger
for (let key in oo1) {
  let value = oo1[key]
  console.log("key:", key, "value:", value)
}

console.log("   Object.keys(oo) =>", Object.keys(oo0))
console.log(" Object.values(oo) =>", Object.values(oo0))
console.log("Object.entries(oo) =>", Object.entries(oo0))

console.log("   Object.keys(oo) =>", Object.keys(oo1))
console.log(" Object.values(oo) =>", Object.values(oo1))
console.log("Object.entries(oo) =>", Object.entries(oo1))