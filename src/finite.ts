// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export default class DummyClass {
  private constructor() {}

  private static curry = (fn: Function, a: number, length: number = fn.length) => {
    if (length === 0) {
      length = fn.length
    }
    return function() {
      const args = Array.from(arguments)
      if (args.length >= length) {
        return fn.apply(a, args)
      }
      return DummyClass.curry(
        function() {
          const nextArgs = Array.from(arguments)

          return fn.apply(a, args.concat(nextArgs))
        },
        a,
        fn.length - args.length
      )
    }
  }

  public static add = DummyClass.curry((a: number, b: number) => a + b, 0)
  public static mul = DummyClass.curry((a: number, b: number) => a * b, 1)
  public static div = DummyClass.curry((a: number, b: number) => a / b, 1)

  public static inc(x: number) {
    var x = x + 1
    return { result: x }
  }

  public static compose = (f1: Function, f2: Function) => (a: any) => {
    return { result: f1(f2(a)) }
  }
  public static fhead = <t>([x]: t[]) => x
  public static head = <t>(head: t[]) => {
    return { result: DummyClass.fhead(head) }
  }
  private static ftail = ([x, ...xs]) => xs
  public static tail = <t>(tail: t[]) => {
    return { result: DummyClass.ftail(tail) }
  }
  private static fempty = (x: any[]): boolean => {
    return x.length === 0
  }
  public static empty = <t>(a: t[]) => {
    return { result: DummyClass.fempty(a) }
  }
  private static fsum = (a: number[]): number =>
    DummyClass.fhead(a) + DummyClass.fsum(DummyClass.ftail(a))
  public static sum = (a: number[]): any => {
    result: DummyClass.fsum(a)
  }
  private static fdef = <t>(a: t) => typeof a !== 'undefined'
  public static def = <t>(a: t) => {
    return { result: DummyClass.fdef(a) }
  }
  private static fundef = <t>(a: t) => DummyClass.fdef(a)
  public static undef = <t>(a: t) => {
    return { result: !DummyClass.fundef(a) }
  }
  private static fcopy = <t>(array: t[]) => [...array]
  public static copy = <t>(array: t[]): any => {
    return { result: DummyClass.fcopy(array) }
  }
  private static flength = <t>([head, ...tail]: t[], l = 0): number =>
    DummyClass.def(head) ? DummyClass.flength(tail, l + 1) : l
  public static alength = <t>(a: t[]): any => {
    result: DummyClass.flength(a)
  }
  public static reverse = <t>([x, ...xs]: t[]): t[] =>
    DummyClass.fdef(x) ? [...DummyClass.reverse(xs), x] : []
  private static ffirst = <t>([h, ...t]: t[], n: number): t[] =>
    DummyClass.fdef(h) && n ? [h, ...DummyClass.ffirst(t, n - 1)] : []
  public static first = <t>(a: t[], n: number = 1) => {
    return { result: DummyClass.ffirst(a, n) }
  }
}
