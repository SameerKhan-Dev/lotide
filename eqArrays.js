


/*
  CHALLENGE: Implement a function eqArrays which takes two arrays and returns true or false, based on a perfact match.

  Use assertEqual function above to write test cases for various scenarios.
  Note: nested arrays and array of objects is out of scope for now, i.e these arrays are generic arrays with simple elements i.e strings, numbers , boolean etc.

*/

/*
  PSEUDOCODE:
  1) Our inputs are two arrays that are to be compared.
  2) Our output/return is a true if both arrays match, or a false if both arrays do not match.

  1) First check if both arrays are same size use an if statement.
  2) Use a for-loop to go through the array and compare element by element if same. if not same then update a boolean to say its not same.

*/

const eqArrays = function(arrOne, arrTwo) {

  // arraysMatch is a boolean used to keep track of if the arrays match (true) or do not match (false)
  let arraysMatch = true;

  // confirm that both arrays are the same length
  if (arrOne.length === arrTwo.length) {

    // use a for-loop to iterate through each element in the array and compare the total
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    
  } else {
    return false;
  }
  '';
  return arraysMatch;
};




module.exports = eqArrays;