import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome.js'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('should return True if the boob is a palindrome', function(){
    expect(isPalindrome('boob')).to.be.true
  })

  it('should return True if taco _cat is a palindrome', function(){
    expect(isPalindrome('taco _cat')).to.be.true
    })

  it('should return True if the string is a palindrome', function(){
    expect(isPalindrome('A Man, A plan, A canal-Panama!')).to.be.true
  })

  it('should return False if the string is not a palindrome', function(){
    expect(isPalindrome('Infinite loops hurt')).to.be.false
})
})
