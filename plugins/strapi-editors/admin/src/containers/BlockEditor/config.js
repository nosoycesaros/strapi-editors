import Header from '@editorjs/header'

export const EDITOR_HOLDER_ID = 'strapi-editors__block-editor'

export const EDITOR_CONFIG = {
  tools: {
    header: Header
  },
  holder: EDITOR_HOLDER_ID
}