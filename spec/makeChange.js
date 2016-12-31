import { expect } from 'chai'
import makeChange from '../src/makeChange'

describe('makeChange()', () => {
  'use strict'

  it('exists', () => {
    expect(makeChange).to.be.a('function')
  })

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', () => {
    const price = 1.00
    const amountGiven = 1.00

    expect(makeChange({price, amountGiven})).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
  })

  it('returns correct change', () => {
    const price = 1.00
    const amountGiven = 1.00 + 0.25 + 0.10 + 0.05 + 0.01
    const expectedChange = { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }

    expect(makeChange({price, amountGiven})).to.deep.equal(expectedChange)
  })

  it('minimizes the number of coins given by using more high-value coins', () => {
    const price = 1.00

    const quarters = 2
    const dimes    = 1
    const nickels  = 1
    const pennies  = 3

    const amountGiven = 1.00
                      + (quarters * 0.25)
                      + (dimes * 0.10)
                      + (nickels * 0.05)
                      + (pennies * 0.01)

    const expectedChange = { quarters, dimes, nickels, pennies }

    expect(makeChange({price, amountGiven})).to.deep.equal(expectedChange)
  })
})
