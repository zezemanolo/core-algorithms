  export default function collatz(n){
    //if n is even divide by 2
    //if n is odd multiply by 3 and add one
    //returns an array
    var anArray = []
    anArray.push(n)

    while(n > 1){
      if(n % 2 !== 0){
        n = n * 3 + 1
        anArray.push(n)
      }
      else {
        n = n / 2
        anArray.push(n)
      }

    }
    return anArray

  }
