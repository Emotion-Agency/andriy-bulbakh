export const filter = (elem) => {
  const items = document.querySelectorAll('.img-li')
  const filterBtns = document.querySelectorAll('.filter-btn')

  function onClick(event) {
    const btnText = event.currentTarget.innerText.toLowerCase()

    items.forEach((el) => {
      const filterName = el.dataset.category.toLowerCase()

      el.classList.add('show')

      if (btnText === 'всі') {
        el.classList.add('show')
        return
      }

      if (btnText !== filterName) {
        el.classList.remove('show')
      }
    })
  }

  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener('click', onClick)
  })
}
