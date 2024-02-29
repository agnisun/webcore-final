const menuElement = document.getElementById('menu')
const menuCallElement = document.getElementById('menu-call')
const menuPhoneElement = document.getElementById('menu-phone')

export function menuOpen() {
  document.body.classList.add('hide')
  menuElement.classList.remove('menu--hide')

  document.addEventListener('click', menuCloseHandler)
}

export function menuClose() {
  document.body.classList.remove('hide')
  menuElement.classList.add('menu--hide')

  document.removeEventListener('click', menuCloseHandler)
}

function menuCloseHandler(event) {
  if (
    !menuElement.contains(event.target) &&
    !event.target.closest('#menu-button')
  ) {
    menuClose()
  }
}

export function menuCallOpen() {
  menuClose()
  menuPhoneClose()

  document.body.classList.add('hide')
  menuCallElement.classList.remove('menu-call--hide')

  document.addEventListener('click', menuCallCloseHandler)
}

export function menuCallClose() {
  document.body.classList.remove('hide')
  menuCallElement.classList.add('menu-call--hide')

  document.removeEventListener('click', menuCallCloseHandler)
}

function menuCallCloseHandler(event) {
  if (
    !menuCallElement.contains(event.target) &&
    !event.target.closest('#menu-call-button')
  ) {
    menuCallClose()
  }
}

export function menuPhoneOpen() {
  menuClose()
  menuCallClose()

  document.body.classList.add('hide')
  menuPhoneElement.classList.remove('menu-call--hide')

  document.addEventListener('click', menuPhoneCloseHandler)
}

export function menuPhoneClose() {
  document.body.classList.remove('hide')
  menuPhoneElement.classList.add('menu-call--hide')

  document.removeEventListener('click', menuPhoneCloseHandler)
}

function menuPhoneCloseHandler(event) {
  if (
    !menuPhoneElement.contains(event.target) &&
    !event.target.closest('#menu-phone-button')
  ) {
    menuPhoneClose()
  }
}
