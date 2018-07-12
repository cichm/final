import { Lazy } from './type'

export type MatchOption<T> = [boolean, Lazy<T>]
export const matchOption = <T>(condition: boolean, out: Lazy<T>): MatchOption<T> => [condition, out]
export const condition = (option: MatchOption<any>) => option[0]
export const evaluation = <T>(option: MatchOption<T>) => option[1]()
