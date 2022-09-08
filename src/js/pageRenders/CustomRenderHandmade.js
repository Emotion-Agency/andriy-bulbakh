import Highway from '@dogstudio/highway'

import handmadeLoader from '../loaders/handmadeLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import {
  filter
} from '../filter.js'
import {
  parallaxScroller
} from '../helperFuncs.js'
class CustomRendererHandmade extends Highway.Renderer {
  onEnterCompleted() {
    window.addEventListener('load', () => {
      pageLoader(
        handmadeLoader.bind(null, parallaxScroller.bind(null, '.header-image')),
      )
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      document.body.style.position = 'static'
      handmadeLoader(parallaxScroller.bind(null, '.header-image'))
    }
    if (document.querySelector('.filter')) {
      filter(document.querySelector('.filter'))
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererHandmade
