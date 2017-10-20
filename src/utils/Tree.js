const d3 = require('d3-hierarchy')

export default (cuts) => {
  const stratify = d3.stratify().id((d) => d.id).parentId((d) => d.parentId)
  const tree = stratify(cuts)

  return tree
}
