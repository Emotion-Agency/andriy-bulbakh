export default class Slider {
  constructor($el, counter = 0, auto = false) {
    this.$el = $el
    this.$slides = this.$el.querySelectorAll('[data-slide]')

    this.counter = counter
    this.previous = null
    this.isNext = false
    this.length = this.$slides.length
    this.auto = auto

    this.init()
  }

  bounds() {
    ['prev', 'next', 'to'].forEach((fn) => {
      this[fn] = this[fn].bind(this)
    })
  }

  init() {
    if (this.length < 2) return false
    this.bounds()
  }

  prev() {
    this.counter--
    this.previous = this.counter + 1

    if (this.counter < 0) {
      this.counter = this.length - 1
      this.previous = 0
    }
  }

  next() {
    this.counter++
    this.previous = this.counter - 1

    if (this.counter > this.length - 1) {
      this.counter = 0
      this.previous = this.length - 1
    }
  }

  to(idx = 0) {
    const dif = idx - this.counter
    this.isNext = idx > this.counter ? true : false

    console.log(this.isNext)

    this.counter = idx
    this.previous = idx + -dif
  }

  destroy() {
    this.$slides.forEach((slide) => {
      slide.classList.remove('active')
      slide.style = ''
    })
  }
}
