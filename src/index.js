#!/usr/bin/env node

const generateChildren = require('./generateChildren')
const TreeNode = require('./treenode')
const renderJsx = require('./renderJsx')
const minimist = require('minimist')
const args = minimist(process.argv.slice(1))

const required = ['depth', 'children', 'root', 'node', 'leaf']
const errors = required.reduce((acc, argument) => {
  if (!args[argument]) {
    acc.push(`--${argument} is a required argument`)
  }
  return acc
}, [])

if (errors.length) {
  return errors.map(error => console.error(error))
} else {
  args.node = args.node.split(',')
  args.leaf = args.leaf.split(',')
}

const root = new TreeNode({ type: args.root })
generateChildren({
  root,
  depth: args.depth,
  maxChildren: args.children,
  leafTypes: args.leaf,
  nodeTypes: args.node
})

console.log(renderJsx(root))
