export type Fn<T, U> = (t: T) => U
export type Lazy<T> = () => T
export type ById<T> = { [key: string]: T }
export type Predicate<T> = (t: T) => boolean
