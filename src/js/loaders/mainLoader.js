import splitting from 'splitting'
import {TimelineMax, Power2, Power1, Expo, Sine} from 'gsap'

const mainLoader = () => {
  const shadow = document.querySelector('.header-img-shadow')
  const imgRewealer = document.querySelector('.header__img__rewealer')
  const img = document.querySelector('.header__img .img-item')
  const imgWrapper = document.querySelector('.header__img')
  const descriptor = document.querySelector('.descriptor')
  const h1 = document.querySelector('h1')
  splitting({target: h1, by: 'chars'})
  if (screen.width > 460) {
    const tl = new TimelineMax()
    tl.to(shadow, 1.5, {scaleY: 1, ease: Power2.easeInOut})
      .to(imgRewealer, 1.6, {x: '100%', ease: Power2.easeInOut}, 0.8)
      .to(img, 1.4, {scale: 1, ease: Power1.easeInOut}, 0.8)
      .to(h1, 0.01, {opacity: 1}, 1.2)
      .staggerTo(
        h1.querySelectorAll('.char'),
        1.8,
        {x: 0, opacity: 1, ease: Expo.easeOut},
        0.08,
        1.2,
      )
      .to(descriptor, 1, {opacity: 1, ease: Sine.easeInOut}, 2.2)
  } else {
    const tl = new TimelineMax()
    tl.to(shadow, 1.5, {scaleY: 1, ease: Power2.easeInOut})
      .to(imgRewealer, 1.6, {x: '100%', ease: Power2.easeInOut}, 0.8)
      .to(imgWrapper, 1, {opacity: 1, ease: Power2.easeInOut}, 0.8)
      .to(img, 1.4, {scale: 1, ease: Power1.easeInOut}, 0.8)
      .to(h1, 0.01, {opacity: 1}, 1.2)
      .staggerTo(
        h1.querySelectorAll('.char'),
        1.8,
        {x: 0, opacity: 1, ease: Expo.easeOut},
        0.08,
        1.2,
      )
      .to(descriptor, 1, {opacity: 1, ease: Sine.easeInOut}, 2.2)
  }
}

export default mainLoader
