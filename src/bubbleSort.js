export default function bubbleSort(array){

  if(!Array.isArray(array)) return "We can only sort arrays"
  if(array.length < 2) return array
  var length = array.length
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i -1); j++) {
      if(array[j] > array[j + 1]){
        var temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
