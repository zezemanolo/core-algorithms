import { expect } from 'chai'
import factorial from '../src/factorial.js'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })
  it('should return the factorial when given a number', function(){
    expect(factorial(5)).to.eql(120)
    expect(factorial(3)).to.eql(6)
    expect(factorial(4)).to.eql(24)
  })
  it('should not take a negative number', function(){
    expect(factorial(-3)).to.be.false
    })
  })
