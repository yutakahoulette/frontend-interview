const test = require("tape")

function factorial(num) {
  let x = num || 1
  for(let i = 1; i < num; i++) { x *= i }
  return x
}

test('factorial', function(t)  {
  t.equal(factorial(0), 1)
  t.equal(factorial(1), 1)
  t.equal(factorial(8), 40320)
  t.end()
})

