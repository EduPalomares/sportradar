import {
  addElement,
  removeElement,
  replaceElement,
  sumElements
} from './arrayUtils.js'

describe('addElement', () => {
  test('empty Array', () => {
    expect(addElement([], 1).length).toBe(1)
    expect(addElement([], {}).length).toBe(1)
    expect(addElement([], 1)).toContain(1)
  })

  test('non empty Array', () => {
    expect(addElement([1], 1).length).toBe(2)
  })
})

describe('removeElement', () => {
  test('parameters tests', () => {
    expect(removeElement('a', 0)).toBe('a')
    expect(removeElement([], -1)).toStrictEqual([])
  })

  test('valid parameters', () => {
    expect(removeElement([], 0)).toStrictEqual([])
    expect(removeElement([1], 0)).toStrictEqual([])
    expect(removeElement([1, 2], 1)).toStrictEqual([1])
  })
})

describe('replaceElement', () => {
  test('parameters', () => {
    expect(replaceElement('a', 0, 1)).toBe('a')
    expect(replaceElement([], 0, 1)).toStrictEqual([])
    expect(replaceElement([], 1, 1)).toStrictEqual([])
    expect(replaceElement([1], 0, 2)).toStrictEqual([2])
  })
})

test('sumElements', () => {
  expect(sumElements([])).toBe(0)
  expect(sumElements([1, 1])).toBe(2)
  expect(sumElements([1, -1])).toBe(0)
  expect(sumElements([1, 'a'])).toBe(1)
  expect(sumElements([1, 2, 3])).toBe(6)
})
