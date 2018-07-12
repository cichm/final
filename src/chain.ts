type F<T, U> = (t: T) => U
export type Chain<T> = {
  map: <U>(fn: F<T, U>) => Chain<U>
  value: () => T
}
