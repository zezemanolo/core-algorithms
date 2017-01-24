import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz()).to.be.a('function')
  })

  it('should return fizz for multiples of three', function(){
    expect(fizzBuzz()).to.equal(myArray[2] == 'Fizz')
  })

  it('should return buzz for multiples of five', function(){
    expect(fizzBuzz()).to.equal(myArray[4] == 'Buzz')
  })

  it('should return fizzbuzz for multiples of three', function(){
    expect(fizzBuzz()).to.equal(myArray[14] == 'FizzBuzz')
  })

  it('should return an array with a length of 100', function(){
    expect(fizzBuzz()).to.have.length(100)
  })
}
