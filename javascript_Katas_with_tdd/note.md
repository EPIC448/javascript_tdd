 //Testing our code using Jest.  
 To have test run automaticly after each save, you add:
  ./package.json
   inside 
    "scripts: "{
  "testwatch": "jest --watchAll"  

    }

    Then in terminal run command "npm run testwatch"

     When you run or save files. it works


     ------------- Testing with Jest---------
  I think returning an object of the inner functions would allow you to invoke them via the outer function and then write your tests accordantly, here is an example I came up with, and it covers the test cases of the allFunc function when you run jest --watchAll --verbose --coverage . Hope it helps

     const allFunc = () => {
  const sum = (a, b) => {
    return a + b
  }
  const jump = (str) => {
    return str.split()
  }
  return { sum, jump }
}
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

My pleasure! When you run jest with --verbose --coverage it would create a coverage folder in your main directory where in lcov-report folder you can open up the index.html file with a right click and then  open with live server option so you can view the details and percentages of your codes being covered by tests