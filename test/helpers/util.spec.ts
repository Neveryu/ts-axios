import { isFormData, isPlainObject, isDate, extend, deepMerge } from '../../src/helpers/util'
import { type } from 'os'

describe('helpers: util', () => {
  describe('isXX', () => {
    test('should validate Date', () => {
      expect(isDate(new Date())).toBeTruthy()
      expect(isDate(Date.now())).toBeFalsy()
    })

    test('should validate formdata', () => {
      expect(isFormData(new FormData())).toBeTruthy()
      expect(isFormData({})).toBeFalsy()
    })
  })

  describe('extend', () => {
    test('should be mutable', () => {
      const a = Object.create(null)
      const b = { foo: 124 }
      extend(a, b)
      expect(a.foo).toBe(124)
    })

    test('should be extend properties', function() {
      const a = { foo: 124, bar: 456 }
      const b = { bar: 789 }
      const c = extend(a, b)
      expect(c.foo).toBe(124)
      expect(c.bar).toBe(789)
    })
  })

  describe('deepMerge', () => {
    test('should be immutable', () => {
      const a = Object.create(null)
      const b: any = { foo: 123 }
      const c: any = { bar: 456 }

      deepMerge(a, b, c)

      expect(typeof a.foo).toBe('undefined')
      expect(typeof a.bar).toBe('undefined')
      expect(typeof b.bar).toBe('undefined')
      expect(typeof c.foo).toBe('undefined')
    })
  })
})
