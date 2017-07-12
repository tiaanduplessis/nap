import nap from '../src'

test('should sleep for given time', () => {
  expect(nap).toBeDefined()
  expect(nap()).toBeInstanceOf(Promise)
  expect(nap()).resolves.toBe(undefined)
})
