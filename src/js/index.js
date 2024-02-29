import 'swiper/swiper.scss'
import '../scss/style.scss'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import {
  menuOpen,
  menuClose,
  menuCallOpen,
  menuCallClose,
  menuPhoneClose,
  menuPhoneOpen
} from './helpers/menus'
import brandsSlider from './helpers/brands'
import techSlider from './helpers/tech'
import priceSlider from './helpers/price'

new Swiper('.swiper', {
  modules: [Navigation, Pagination]
})

const menuBurgerElement = document.getElementById('menu-button')
const menuCloseElement = document.getElementById('menu-close')
const menuCallButtonElements = document.querySelectorAll('#menu-call-button')
const menuCallCloseElement = document.getElementById('menu-call-close')
const menuPhoneButtonElements = document.querySelectorAll('#menu-phone-button')
const menuPhoneCloseElement = document.getElementById('menu-phone-close')

menuBurgerElement.addEventListener('click', menuOpen)
menuCloseElement.addEventListener('click', menuClose)
menuCallButtonElements.forEach((Element) =>
  Element.addEventListener('click', menuCallOpen)
)
menuCallCloseElement.addEventListener('click', menuCallClose)
menuPhoneButtonElements.forEach((Element) =>
  Element.addEventListener('click', menuPhoneOpen)
)
menuPhoneCloseElement.addEventListener('click', menuPhoneClose)

brandsSlider()
techSlider()
priceSlider()
