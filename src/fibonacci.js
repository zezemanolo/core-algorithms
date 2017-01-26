export default function fibonacci(n){
  var currentPosition = 1
  var prevPosition = 0
  var tempPosition;
  var myArray = [0]

  while(n > 1){
    tempPosition = currentPosition
    currentPosition = currentPosition + prevPosition
    prevPosition = tempPosition
    myArray.push(prevPosition)
    n--
  }
  console.log(myArray)
  return myArray
}
