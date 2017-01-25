export default function isPalindrome(string){
  var newString = string.replace(/[^\w]_?/g,'').toLowerCase()
  var lastString = newString.split('').reverse().join('')

  return newString === lastString

  //console.log(lastString)
}
