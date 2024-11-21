import VuePdfEmbed from './vue-pdf-embed.vue'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.js'

const originalGetDocument = getDocument
VuePdfEmbed.getDocument = (src) => {
  // If src is already a DocumentInitParameters object
  if (src && typeof src === 'object' && !ArrayBuffer.isView(src)) {
    return originalGetDocument({
      ...src,
      isEvalSupported: false
    })
  }
  // If src is a string/URL/TypedArray/ArrayBuffer
  return originalGetDocument({
    url: src,
    isEvalSupported: false
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VuePdfEmbed = VuePdfEmbed
}

export default VuePdfEmbed
