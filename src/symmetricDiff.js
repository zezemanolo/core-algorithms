export default function setSymmetricDifference(arr1, arr2) {

  var resultsArray = []

  arr1.filter(function(n){
    if(arr2.indexOf(n) < 0){
      resultsArray.push(n)
    }
  })
  arr2.filter(function(x){
    if(arr1.indexOf(x) < 0){
    resultsArray.push(x)
    }
  })
    return resultsArray
   }
