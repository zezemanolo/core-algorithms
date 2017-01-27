  export default function collatz(n){

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
