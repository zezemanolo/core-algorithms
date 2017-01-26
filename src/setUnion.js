export default function setUnion(firstArray, secondArray){
//do we need to declare variables inside function??

  var concatArray = firstArray.concat(secondArray)
  var lastArray = concatArray.slice().sort()
  var resultsArray = []

  for (var i = 0; i < lastArray.length; i++) {
    if (lastArray[i + 1] !== lastArray[i]){
      resultsArray.push(lastArray[i])
    }
  }
  console.log(resultsArray)
  return resultsArray
}
// // setUnion takes two arrays, filters for duplicates

//pushes filtered values to new array
//returns updated array
