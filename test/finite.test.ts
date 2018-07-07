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
  })
})
