import { visit } from 'unist-util-visit'

/** @type {import('unified').Plugin} */
const describe = (options) => (tree, file) => {
    let description = null
    visit(tree, 'paragraph', (node) => {
        if (description) return
        
        visit(node, 'text', (node) => {
            description = node.value
        })
    })
    if (description && description.length > options.length) {
        file.data.fm.description = description.substring(0, options.length).trim() + '...'
    }
}

export default describe