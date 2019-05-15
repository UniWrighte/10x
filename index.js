#!/usr/bin/env node
const { write } = require('./bin/util')
const { topLevel } = require('./bin/parse')

const args = process.argv.slice(2)
// console.log({ args })

try {
  topLevel(args)
} catch (error) {
  write(error.toString())
  // process.stdout.write(error)
}
