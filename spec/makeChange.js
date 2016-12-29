const expect = require('chai').expect

const makeChange = require('../src/makeChange')

describe('makeChange()', function() {
  'use strict'

  it('exists', function() {
    expect(makeChange).to.be.a('function')
  })

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', function() {
    const price = 1.00
    const amountGiven = 1.00

    expect(makeChange(price, amountGiven)).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
  })

  it('returns correct change', function() {
    const price = 1.00
    const amountGiven = 1.00 + 0.25 + 0.10 + 0.05 + 0.01
    const expectedChange = { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }

    expect(makeChange(price, amountGiven)).to.deep.equal(expectedChange)
  })

  it('minimizes the number of coins given by using more high-value coins', function() {
    const price = 1.00

    const noQuarters = 2
    const noDimes    = 1
    const noNickels  = 1
    const noPennies  = 3

    const amountGiven = 1.00
                      + (noQuarters * 0.25)
                      + (noDimes * 0.10)
                      + (noNickels * 0.05)
                      + (noPennies * 0.01)

    const expectedChange = {
      quarters: noQuarters,
      dimes:    noDimes,
      nickels:  noNickels,
      pennies:  noPennies
    }

    expect(makeChange(price, amountGiven)).to.deep.equal(expectedChange)
  })
})
