export default function setIntersection(arr1, arr2) {
  
  var resultsArray = []
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if(arr1[i]===arr2[j]){
      resultsArray.push(arr1[i])
      }
    }
  }
  return resultsArray
}
