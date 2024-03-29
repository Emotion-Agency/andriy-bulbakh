import splitting from 'splitting'

export const textSplit = (elems, by) => {
  for (const elem of elems) {
    splitting({
      target: elem,
      by
    })
  }
}

export const navLinksDetect = () => {
  const navLinks = document.querySelectorAll('nav a')

  for (const link of navLinks) {
    link.classList.remove('active')

    if (link.href === location.href) {
      link.classList.add('active')
    }
  }
}

export const langCurrentPage = () => {
  const langBtn = document.querySelector('.lang')
  const currentLang = document.querySelector('[data-translate-url]')

  if (!currentLang) {
    return
  }
  switch (document.documentElement.lang) {
    case 'uk':
      langBtn.setAttribute('href', currentLang.dataset.translateUrl)
      langBtn.setAttribute('hreflang', 'en')
      langBtn.innerText = 'EN'
      break

    case 'en':
      langBtn.setAttribute('href', currentLang.dataset.translateUrl)
      langBtn.setAttribute('hreflang', 'uk')
      langBtn.innerText = 'UA'
      break
  }
}

export const mainLinksHover = (e) => {
  const links = [...document.querySelectorAll('.service-name .stroke-a')]
  const hoverHandler = function() {
    const link = e.target
    const linkImg = link.parentNode.parentNode.querySelector('.img-wrapper')
    linkImg.querySelector('.img-overlay').classList.toggle('hovered')
  }

  links.forEach((elem) => elem.addEventListener('mouseenter', hoverHandler))
  links.forEach((elem) => elem.addEventListener('mouseleave', hoverHandler))
}

export const parallaxScroller = (selector, speedIndex) => {
  const looper = () => {
    const newPixel = window.pageYOffset
    const speed = [speedIndex || 10, 13, 12, 15]

    document.querySelectorAll(selector).forEach((layer, index) => {
      layer.style.transform = `matrix(1.00,0.00,0.00,${
        1 + newPixel * 0.0005
      },0,-${newPixel * speed[index] * 0.02})`
    })

    window.requestAnimationFrame(looper)
  }

  looper()
}
