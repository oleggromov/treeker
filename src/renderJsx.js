function getSpaces(number) {
  const indent = 2
  return (new Array(number * indent)).fill(' ').join('')
}

function renderNode (node, indent) {
  return [getSpaces(indent), `<${node.type}>`, '\n',
    node.content ? getSpaces(indent + 1) + node.content + '\n' : '',
    node.children.length ? node.children.map(child => renderNode(child, indent + 1)).join('\n') + '\n' : '',
    getSpaces(indent), `</${node.type}>`
  ].join('')
}

module.exports = function renderJsx (treeRoot) {
  return renderNode(treeRoot, 0)
}
