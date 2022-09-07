export const filter = (elem) => {
  const items = document.querySelectorAll('.img-li')
  const filterBtns = document.querySelectorAll('.filter-btn')

  function onClick(event) {
    const currentFilterName = event.currentTarget.dataset.filter.toLowerCase()

    items.forEach((el, idx) => {
      const filterName = el.dataset.category.toLowerCase()

      el.classList.remove('show', 'show--left', 'show--right')

      if (currentFilterName === 'всі' || currentFilterName === filterName) {
        el.classList.add('show')
      }
    })

    const activeItems = document.querySelectorAll('.img-li.show')

    activeItems.forEach((el, idx) => {
      if ((idx + 1) % 2 === 0) {
        el.classList.add('show--right')
      } else {
        el.classList.add('show--left')
      }
    })

    filterBtns.forEach((el) => {
      const filterName = el.dataset.filter.toLowerCase()

      el.classList.remove('active')

      if (currentFilterName === filterName) {
        el.classList.add('active')
      }
    })
  }

  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener('click', onClick)
  })

  filterBtns[filterBtns.length - 1].click()
}
