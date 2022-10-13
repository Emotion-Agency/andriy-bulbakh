import swipedetect from '@/lib/swipe'

export default class Navigation {
  constructor($el, opts) {
    this.$el = $el
    this.opts = opts

    this.$parent = this.$el.closest('[data-slider]')

    this.nav = {
      $left: document.querySelector('[data-nav="prev"]'),
      $right: document.querySelector('[data-nav="next"]'),
      $preview: document.querySelectorAll('[data-slide-preview]'),
    }

    this.init()
  }

  init() {
    this.click()
    this.swipe()
    this.keydown = this.keydown.bind(this)
    window.addEventListener('keydown', this.keydown)
  }

  click() {
    if (this.nav.$left && this.nav.$right) {
      this.nav.$left.addEventListener('click', this.opts.prev)
      this.nav.$right.addEventListener('click', this.opts.next)
    }

    if (this.nav.$preview) {
      this.nav.$preview.forEach((el, idx) => {
        el.addEventListener('click', () => this.opts.to(idx))
      })
    }
  }

  swipe() {
    swipedetect(this.$el, (swipedir) => {
      swipedir === 'left' ? this.opts.next() : this.opts.prev()
    })
  }

  keydown(e) {
    if (e.key === 'ArrowLeft') this.opts.prev()
    if (e.key === 'ArrowRight') this.opts.next()
  }

  destroy() {
    this.nav.$left.removeEventListener('click', this.opts.prev)
    this.nav.$right.removeEventListener('click', this.opts.next)
    window.removeEventListener('keydown', this.keydown)
  }
}
