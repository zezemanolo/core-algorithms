
export default function makeChange({price, amountGiven}) {
  let coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  const change = (amountGiven - price)

  if(change < 0){
    return 'No change provided'
  }

  const quarters = Math.floor(change / 25)
    coins.quarters += quarters
    let remainder = change - quarters * 25

  const dimes = Math.floor(remainder / 10)
    coins.dimes += dimes
    remainder = remainder - dimes * 10

  const nickels = Math.floor(remainder / 5)
    coins.nickels += nickels
    remainder = remainder - nickels * 5

  const pennies = Math.floor(remainder)
    coins.pennies = pennies


  console.log(coins)
  return coins
}
