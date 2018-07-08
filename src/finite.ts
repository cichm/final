// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export default class DummyClass {
  private constructor() {}

  public static curry = (fn: Function, length: number = fn.length) => {
    if (length === 0) {
      length = fn.length
    }
    return function() {
      var args: any[] = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      if (args.length >= length) {
        return fn.apply(void 0, args)
      }
      return DummyClass.curry(function() {
        var nextArgs = []
        for (var _i = 0; _i < arguments.length; _i++) {
          nextArgs[_i] = arguments[_i]
        }
        return fn.apply(void 0, args.concat(nextArgs))
      }, fn.length - args.length)
    }
  }

  public static add = DummyClass.curry((a: number, b: number) => a + b)
  public static inc(x: number) {
    var x = x + 1
    return { result: x }
  }
  public static compose = (f1: Function, f2: Function) => (a: any) => {
    return { result: f1(f2(a)) }
  }
  public static head = <t>([head, ..._]) => {
    return { result: head }
  }
  public static tail = <t>([_, ...tail]) => {
    return { result: tail }
  }
  public static empty = <T>(a: T[]) => {
    return { result: a.length === 0 }
  }
}
