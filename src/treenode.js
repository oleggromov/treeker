function TreeNode ({ type, content, children = [] }) {
  this.type = type
  this.content = content
  this.children = children.slice()
}

module.exports = TreeNode
