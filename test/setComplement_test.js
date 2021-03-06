import { expect } from 'chai'
import setComplement from '../src/setComplement.js'

describe('setComplement()', function(){
  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

  it('should return the non-duplicates of the second set', function(){
    expect(setComplement([1,2,3,4], [2,3,4,5])).to.eql([5])
    expect(setComplement([1,4,3], [2,6,4,5])).to.eql([2,6,5])
    expect(setComplement([4,6,7,2], [4,8,3])).to.eql([8,3])
  })
})
