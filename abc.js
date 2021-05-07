// let xyz
// console.log(xyz)
// xyz = 'hello'
// console.log(xyz)

// function myFunc() {
//   let a = 10 //block scoped
//   if (true) {
//     a = 20
//     console.log(a)
//   } else {
//   }
// }

// // console.log(foo)
// let foo = 'something'
// // console.log(foo)

// // myFunc()

// // console.log(this)

// let b = 'hello'
// //string
// let a = `this is a template string ${b}`

// // console.log(a)

// let c = false

// let d = 10

// let e = null

// let f = undefined

// let window = {
//   alert: () => {},
// }

// let o = {
//   abc: 'hello',
//   efg: 'foo',
// }

// console.error(o.abc)

// window.alert('hello')

// console.log(this)

class Busxyz {
  constructor(abc, efg) {
    let ss = 'yo'
    this.model = ss
    this.name = abc
    this.year = efg
    console.log(ss)
  }
  type = 'car'
  showThis(hi) {
    console.log(
      `${this.name} is founded in ${this.year} is a ${this.type} company ${hi} ${this.model} `
    )
  }
}

myCar1 = new Busxyz('Ford', 2014)
myCar1.showThis('hey')

myCar2 = new Busxyz('Tesla', 2012)

myCar2.showThis('howdy')
