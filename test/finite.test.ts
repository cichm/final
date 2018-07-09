import DummyClass from '../src/finite'
import { expect } from 'chai'

/**
 * Dummy test
 */
describe('Given an instance of my finite library', () => {
  describe('when I need the inc value', () => {
    it('should return the increment value', () => {
      const result = DummyClass.inc(1)
      expect(result.result).to.be.equal(2)
    })

    it('should add two number', () => {
      const result = DummyClass.add(2)(2)
      expect(result).to.be.equal(4)
    })

    it('should mul two number', () => {
      const result = DummyClass.mul(2)(3)
      expect(result).to.be.equal(6)
    })

    it('should div two number', () => {
      const result = DummyClass.div(16, 4)
      expect(result).to.be.equal(4)
    })

    it('should compose two functions', () => {
      const add = (a: number) => a + 1
      const mul = (a: number) => a * 2
      const result = DummyClass.compose(
        add,
        mul
      )(1)
      expect(result.result).to.be.equal(3)
    })

    it('should get head element of array', () => {
      const a: number[] = [1, 2, 3, 4, 5]
      const result = DummyClass.head(a)
      expect(result.result).to.be.equal(1)
    })

    it('should get tail elements of array', () => {
      const a: number[] = [1, 2, 3, 4, 5]
      const b: number[] = [2, 3, 4, 5]
      const result = DummyClass.tail(a)
      expect(result.result[2]).to.be.equal(b[2])
    })

    it('should return true if empty', () => {
      const a: number[] = []
      const result = DummyClass.empty(a)
      expect(result.result).to.be.equal(true)
    })

    it('should return typeof', () => {
      const defined = 'defined'
      const result = DummyClass.def(defined)
      expect(result.result).to.be.equal(true)
    })

    it('should return reverse typeof', () => {
      const defined = 'defined'
      const result = DummyClass.undef(defined)
      expect(result.result).to.be.equal(false)
    })

    it('should get first n elements', () => {
      const a: number[] = [1, 2, 3, 4, 5]
      const result = DummyClass.first(a, 3)
      expect(result.result[0]).to.be.equal(1)
    })
  })
})
