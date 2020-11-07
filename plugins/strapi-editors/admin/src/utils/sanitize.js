/**
 * Get component type from STRAPI component name
 * from 'atoms.paragraph' to 'paragraph'
 * 
 * @param {*} type STRAPI component type
 */
const getType = type => type.split('.').pop()

/**
 * Transforms STRAPI loaded content to
 * editorjs blocks data
 * 
 * EXAMPLE
 * [{
 *  type: 'paragraph',
 *  data: {
 *    text: ''
 *  }
 * }] 
 * 
 * @param {*} content 
 */
export const sanitizeContent = content =>
  content.map(component => ({
    type: getType(component.__component),
    data: component
  }))

/**
 * Transforms EDITORJS output to 
 * STRAPI update format
 * 
 * EXAMPLE
 * {
 *  id: 1,
 *  __component: "atoms.header",
 *  level: 1,
 *  text: "This is the title",
 * }
 * 
 * @param {*} output 
 */
export const sanitizeUpload = output => ({
  content: output.blocks.map((component) => ({
    __component: `atoms.${component.type}`,
    ...component.data
  }))
})