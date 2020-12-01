
//const { test, expect } = require('@jest/globals');

const allFunc = require('./allfunc');

describe("allFunc", () => {
  it("should return the sum of the input a and b", () => {
    const call = allFunc()
    const result = call.sum(1, 2)
     // to get the opposite. you say [expect(result).not.toBe(0)
    expect(result).toEqual(3)
  })

  it("should return an array containing the input string", () => {
    const call = allFunc()
    const result = call.jump("Jump Hight")
    expect(result).toContain("Jump Hight")
  })


  // Using matchers.  (toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:)

  it("use matcher to test exact equality  specific Number, in this case 2+2 =4", () => {
    const call = allFunc()
    //const result = call.useMatch("num")
    expect(2 + 2).toBe(4);
  });

  //toEqual 
  //(toEqual recursively checks every field of an object or array.)
  it("object assignment using toEqual", () => {
    const call = allFunc()
    const assignData = { one: 1 }; assignData['two'] = 2; 
    expect(assignData).toEqual({ one: 1, two: 2 });
   })

  
    // check for arrays and iterables. 
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ];
  
  it('the shopping should include beer in it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer')
  })
  
}) // end of describe

