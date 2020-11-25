
//const { test, expect } = require('@jest/globals');

const allFunc = require('./allfunc');

describe("allFunc", () => {
  it("should return the sum of the input a and b", () => {
    const call = allFunc()
    const result = call.sum(1, 2)
    expect(result).toEqual(3)
  })

  it("should return an array containing the input string", () => {
    const call = allFunc()
    const result = call.jump("Jump Hight")
    expect(result).toContain("Jump Hight")
  })
})


//const index_start = require('./allfunc');

  
//     test('adds 1+2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3)
// })

// //  ===group testing.=========

// describe('first set', () => {
//     // beforeEach(() => {
//     //   //do something
//     // })
//     // afterAll(() => {
//     //   //do something
//     // })
//     test(/*...*/)
//     test(/*...*/)
//   })
  
//   describe('second set', () => {
//     beforeEach(() => {
//       //do something
//     })
//     beforeAll(() => {
//       //do something
//     })
//     test(/*...*/)
//     test(/*...*/)
//   })