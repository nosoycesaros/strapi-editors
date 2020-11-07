import Header from '@editorjs/header'
import Quote from '@editorjs/quote'

export const EDITOR_HOLDER_ID = 'strapi-editors__block-editor'

export const EDITOR_CONFIG = {
  autofocus: true,
  tools: {
    header: {
      class: Header,
      config: {
        placeholder: 'Header'
      }
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
  },
  holder: EDITOR_HOLDER_ID
}