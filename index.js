const userhome = require('userhome')
const path = require('path')
const uniq = require('uniq')
const fs = require('fs')

module.exports = uniq([]
  .concat(fonts(userhome('Library', 'Fonts')))
  .concat(fonts(path.join('/Library', 'Fonts')))
  .concat(fonts(path.join('/System', 'Library', 'Fonts')))
  .concat(fonts(path.join('/System Folder', 'Fonts')))
  .sort()
)

function fonts (directory) {
  try {
    fs.statSync(directory)
  } catch (e) {
    return []
  }

  return fs.readdirSync(directory).filter(function (name) {
    return path.extname(name).match(/\.(?:ttf|otf|ttc)/)
  }).map(function (name) {
    return name.replace(/\..*$/g, '')
  })
}
