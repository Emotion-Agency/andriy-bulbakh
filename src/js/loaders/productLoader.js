import splitting from 'splitting'
import {
  TimelineMax,
  Expo
} from 'gsap'

const productLoader = (calback) => {
  const h1 = document.querySelector('h1')
  const slider = document.querySelector('.product-header__left-block')
  const text = document.querySelector('.product-header__text-wrapper')
  const form = document.querySelector('.product-header__form-wrapper')
  const content = document.querySelector('.product-header')
  splitting({
    target: h1,
    by: 'chars'
  })
  const tl = new TimelineMax()
  tl.to(h1, 0.01, {
    opacity: 1
  }, 0.2)
    .staggerTo(
      h1.querySelectorAll('.char'),
      1.8, {
        x: 0,
        opacity: 1,
        ease: Expo.easeOut
      },
      0.07,
      0.2,
    )
  tl.to(content, 1, {
    opacity: 1
  }, 0.2)
    .to(text, 0.6, {opacity: 1, onComplete: calback}, 0.8)
    .to(form, 0.6, {opacity: 1, onComplete: calback}, 0.8)
    .to(slider, 0.6, {opacity: 1, onComplete: calback}, 0.8)
}

export default productLoader
