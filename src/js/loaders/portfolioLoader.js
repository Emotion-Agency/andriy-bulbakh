import splitting from 'splitting'
import {TimelineMax, Expo} from 'gsap'

const portfolioLoader = () => {
  const h1 = document.querySelector('h1')
  const h2 = document.querySelector('.portfolio__h2')
  const content = document.querySelector('.portfolio')
  const description = document.querySelector('.portfolio-header__desc')
  splitting({target: h1, by: 'chars'})
  splitting({target: h2, by: 'chars'})
  const tl = new TimelineMax()
  tl.to(h1, 0.01, {opacity: 1}, 0.2)
    .to(h2, 0.01, {opacity: 1}, 0.2)
    .staggerTo(
      h1.querySelectorAll('.char'),
      1.8,
      {x: 0, opacity: 1, ease: Expo.easeOut},
      0.07,
      0.2,
    )
    .staggerTo(
      h2.querySelectorAll('.char'),
      1.8,
      {x: 0, opacity: 1, ease: Expo.easeOut},
      0.07,
      0.2,
    )
  tl.to(content, 1, {opacity: 1}, 0.2)
  tl.to(description, 1, {opacity: 1}, 0.6)
}

export default portfolioLoader
