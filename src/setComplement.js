export default function setComplement(arr1, arr2) {
  
  var resultsArray = []
  arr2.filter(function(x){
    if(arr1.indexOf(x) < 0){
    resultsArray.push(x)
    }
  })
    return resultsArray
}
