export function useSlider(block, total1, total2) {
  const mobileSlider = function () {
    const sliderItems = document.querySelectorAll(`.${block}-slider__item`)
    const sliderDots = document.getElementById(`${block}-slider__dots`)
    const slider = document.getElementById(`${block}-slider`)

    let isInitialize = false
    let activeItem = 1
    let totalDots = 0

    const observer = new IntersectionObserver(
      (entries) => {
        const beforeInitialize = function () {
          let visibleItems = 0

          entries.forEach((entry) => {
            if (entry.intersectionRatio === 1) {
              visibleItems += 1
            }
          })

          entries[entries.length - 1].target.dataset.last = true

          totalDots = Math.round(sliderItems.length / visibleItems)

          for (let i = 0; i < totalDots; i++) {
            sliderDots.append(document.createElement('li'))
          }

          sliderDots.children[0].classList.add('active')
          isInitialize = true
        }

        const afterInitialize = function () {
          const updateDots = function (newValue) {
            sliderDots.children[activeItem - 1].classList.remove('active')

            activeItem = newValue

            sliderDots.children[activeItem - 1].classList.add('active')
          }
          const fadeStartElement = document.getElementById(
            `${block}-fade-start`
          )
          const fadeEndElement = document.getElementById(`${block}-fade-end`)

          const divider = Math.round(sliderItems.length / totalDots)

          entries.forEach((entry) => {
            if (entry.intersectionRatio === 1 || activeItem === totalDots) {
              const key = +entry.target.dataset.key
              const dotIndex = Math.floor(key / divider)
              const isLast = !!entry.target.dataset['last']

              if (key === 1) {
                fadeStartElement.style.display = 'none'
              } else {
                fadeStartElement.style.display = 'block'
              }

              if (key === sliderItems.length) {
                fadeEndElement.style.display = 'none'
              } else {
                fadeEndElement.style.display = 'block'
              }

              if (activeItem === totalDots || key % divider === 0)
                updateDots(dotIndex)
              else if (isLast) updateDots(totalDots)
            }
          })
        }

        if (!isInitialize) beforeInitialize()
        else afterInitialize()
      },
      { root: slider, threshold: 1 }
    )

    sliderItems.forEach((item) => {
      observer.observe(item)
    })
  }

  const showAllHandlers = function (total) {
    const showElement = document.getElementById(`${block}-show`)
    const hideElement = document.getElementById(`${block}-hide`)
    let hiddenElements = []

    const hideItems = function () {
      const sliderItemsElement = document.querySelectorAll(
        `.${block}-slider__item`
      )

      sliderItemsElement.forEach((item, i) => {
        if (i >= total) {
          hiddenElements.push(item)
          item.remove()
        }
      })

      showElement.classList.remove('hide')
      hideElement.classList.add('hide')
    }
    const showItems = function () {
      const sliderInnerElement = document.getElementsByClassName(
        `${block}-slider__inner`
      )[0]

      while (hiddenElements.length) {
        const item = hiddenElements.shift()
        sliderInnerElement.append(item)
      }

      hideElement.classList.remove('hide')
      showElement.classList.add('hide')
    }

    showElement.addEventListener('click', showItems)
    hideElement.addEventListener('click', hideItems)

    hideItems()
  }

  let func = function () {}

  if (window.screen.width < 768) func = mobileSlider.bind(this)
  else if (total1 !== undefined && total2 !== undefined) {
    if (window.screen.width < 1120) func = showAllHandlers.bind(this, total1)
    else func = showAllHandlers.bind(this, total2)
  }

  return func
}
