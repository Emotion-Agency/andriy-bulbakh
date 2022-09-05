import Highway from '@dogstudio/highway'

import productLoader from '../loaders/productLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import Slideshow from '@/ui/slider/Slideshow'
import {
  parallaxScroller
} from '../helperFuncs.js'
class CustomRendererProduct extends Highway.Renderer {
  onEnterCompleted() {
    window.addEventListener('load', () => {
      pageLoader(
        productLoader
      )

      if (document.querySelector('.product__slider')) {
        new Slideshow(document.querySelector('.product__slider'), 0)
      }
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      document.body.style.position = 'static'
      if (document.querySelector('.product__slider')) {
        new Slideshow(document.querySelector('.product__slider'), 0)
      }
      productLoader(parallaxScroller.bind(null, '.header-image'))
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererProduct
