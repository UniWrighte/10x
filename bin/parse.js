const { write } = require('./util')

exports.topLevel = (args) => {
  if (args.length < 1) throw Error('run 10x help for more information')
  const main = args.shift()
  switch (main) {
    case 'react':
      return write('react')
  }
}
