import Highway from '@dogstudio/highway'
import mainLoader from '../loaders/mainLoader.js'
import pageLoader from '../loaders/pageLoader.js'
import {mainLinksHover} from '../helperFuncs.js'
import Slideshow from '@/ui/slider/Slideshow'

class CustomRendererMain extends Highway.Renderer {
  onEnterCompleted() {
    window.addEventListener('load', () => {
      pageLoader(mainLoader)
      mainLinksHover()

      setTimeout(() => {
        if (document.querySelector('.home__slider')) {
          new Slideshow(document.querySelector('.home__slider'), 0, true)
        }
      }, 2000)
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      mainLoader()
      document.body.style.position = 'static'
      mainLinksHover()
      setTimeout(() => {
        if (document.querySelector('.home__slider')) {
          new Slideshow(document.querySelector('.home__slider'), 0, true)
        }
      }, 2000)
    }
  }
}
// Don`t forget to export your renderer
export default CustomRendererMain
