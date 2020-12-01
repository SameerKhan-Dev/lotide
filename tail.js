

// this function takes an array and returns the tail (i.e all elements excluding the first head element);
const tail = function(arrayOfValues) {
  // check corner case of array being empty
  if (arrayOfValues.length === 0) {
    return [];
    // check corner case of array having only a single element-- return empty array
  } else if (arrayOfValues.length === 1) {
    return [];
    
  } else {

    return (arrayOfValues.slice(1,arrayOfValues.length));

  }
};


module.exports = tail;