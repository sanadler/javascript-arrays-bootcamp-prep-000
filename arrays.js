var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(newArray, element){
  [element, ...newArray];
  return newArray;
}
