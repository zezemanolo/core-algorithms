import { expect } from 'chai'
import setIntersection from '../src/setIntersection.js'

describe('setIntersection()', function(){
  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('should return the intersection of the two sets', function(){
    expect(setIntersection([1,2,3,4], [2,3,4,5])).to.eql([2,3,4])
    expect(setIntersection([1,4,3], [2,6,4,5])).to.eql([4])
  })
})
