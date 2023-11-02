// Test file to run Jest tests
import { modThree } from './modThree.js'

// Valid inputs
test('test input of 1101 (13)', () => {
    expect(modThree('1101')).toBe('1')
})

test('test input of 1110 (14)', () => {
    expect(modThree('1110')).toBe('2')
})

test('test input of 1111 (15)', () => {
    expect(modThree('1111')).toBe('0')
})

test('test input of 100101 (37)', () => {
    expect(modThree('100101')).toBe('1')
})

// Invalid inputs
test('test input of abcd', () => {
    expect(modThree('abcd')).toBe('Invalid input')
})

test('test input of 1111 as  number', () => {
    expect(modThree(1111)).toBe('Invalid input')
})

test('test input of 1234', () => {
    expect(modThree('1234')).toBe('Invalid input')
})