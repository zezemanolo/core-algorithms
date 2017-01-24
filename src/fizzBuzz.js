  export default function fizzBuzz(){
    //Length of array should be 100
    //Array should be built with a function
    //Loop over array and find indicies that are multiples of 3, replace with fizz
    //replace 5s with buzz
    //replace multiples of 3s and 5s with fizzBuzz

    var myArray = []
    for (var i = 1; i <= 100; i++) {
      if(i % 15 === 0){
        myArray.push('FizzBuzz')
      } else if(i % 3 === 0){
        myArray.push('Fizz')
      } else if(i % 5 === 0){
        myArray.push('Buzz')
      }
      else {
        myArray.push(i)
      }
    }
    return myArray
  }
