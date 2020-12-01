const allFunc = () => {
     
    const sum = (a, b) => {
     return a + b
    }
    
    const jump = (str) => {
        return str.split()
    }
   
    
    const useMatch = (a,b) => {
     return  a + b
    }
    
    const assigndata = (assignData) => {
        //Should not be passing.


        // assignData = { one: 1 }; 
        // assignData['two'] = 2; 
       return assignData
    }

    const checkForBeer = (shoppingList) => {
        //Should not be passing.

        return null
    }
    
  return { sum, jump, useMatch,assigndata,checkForBeer }
}
 
module.exports = allFunc