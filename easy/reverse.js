const test = require("tape")

function reverse(st) {
  const arr = st.split('')
  const len = arr.length
  let acc = ''
  for(let i = len - 1; i >= 0; i--) { acc += arr[i] }
  return acc
}

test('reverse', function(t)  {
  t.equal(reverse(''), '')
  t.equal(reverse('abcdefg'), 'gfedcba')
  t.end()
})

