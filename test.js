const test = require('tape')

test('fonts-installed-osx', function (t) {
  t.ok(Array.isArray(require('./')), 'outputs an array')
  t.ok(require('./').length, 'containing a list of fonts')
  t.notEqual(require('./').indexOf('Courier New'), -1, 'should probably include Courier New in there somewhere too')
  t.end()
})
