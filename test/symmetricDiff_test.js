import { expect } from 'chai'
import setSymmetricDifference from '../src/symmetricDiff.js'

describe('setSymmetricDifference()', function(){
  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('should return the non-duplicates of the two sets', function(){
    expect(setSymmetricDifference([1,2,3,4], [2,3,4,5])).to.eql([1,5])
    expect(setSymmetricDifference([1,4,3], [2,6,4,5])).to.eql([1,3,2,6,5])
    expect(setSymmetricDifference([4,6,7,2], [4,8,3])).to.eql([6,7,2,8,3])
  })
})
