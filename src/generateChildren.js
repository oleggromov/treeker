const { getRandomItem, getRandomString } = require('./random')
const TreeNode = require('./treenode')

module.exports = function generateChildren({ root, depth, maxChildren, leafTypes, nodeTypes }) {
  if (!depth) return

  const childrenNumber = Math.floor(Math.random() * maxChildren + 1)
  const dummies = new Array(childrenNumber).fill(1)

  root.children = dummies.map(() => {
    const isNode = depth > 1
    const node = new TreeNode({
      type: isNode ? getRandomItem(nodeTypes) : getRandomItem(leafTypes),
      content: getRandomString()
    })
    if (isNode) generateChildren({ root: node, depth: depth - 1, maxChildren, leafTypes, nodeTypes })
    return node
  })
}
