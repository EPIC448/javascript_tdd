/  arears of Challenges I picked up.

    All files are using TDD test files using jest

 //Testing our code using Jest.  
 To have test run automaticly after each save, you add:
  ./package.json
   inside 
    "scripts: "{
  "testwatch": "jest --watchAll"  

    }

    Then in terminal run command "npm run testwatch"

     When you run or save files. it works

     // In the Test file If you want to skip a test you say. 
  you add an "x" to the start of the file. 

xdescribe("sortByName()", () => {
  it("should sort an array of objects A-Z by each object's name property ", () => {
    const array = [
      { type: "planet", name: "Mercury", size: "tiny" },
      { type: "planet", name: "Neptune", size: "medium" },
      { type: "planet", name: "Jupiter", size: "big" },
      { type: "planet", name: "Earth", size: "small" }
    ];
