export const filter = (elem) => {
  const items = document.querySelectorAll('.img-li')
  const filterBtns = document.querySelectorAll('.filter-btn')

  function onClick(event) {
    const currentFilterName = event.currentTarget.dataset.filter.toLowerCase()

    items.forEach((el) => {
      const filterName = el.dataset.category.toLowerCase()

      el.classList.remove('show')

      if (currentFilterName === 'всі' || currentFilterName === filterName) {
        el.classList.add('show')
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
