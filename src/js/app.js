//Style======================================================================================================================================
import '../scss/style.scss'
//VendorFile========================================================================================================================================================
import $ from 'jquery'
import './vendor.js'
import Swiper, { Pagination } from 'swiper'
//Select Languages========================================================================================================================================================
selects()
function selects() {
   const selectListEl = document.querySelectorAll('[data-select]')
   selectListEl.forEach((select) =>
      select.addEventListener('click', (el) => {
         el.stopPropagation()
         if (el.target.classList.contains('lang-select__head')) {
            select.classList.toggle('_active')
         }
         if (el.target.classList.contains('lang-select__item')) {
            const curVal = select.querySelector('[data-select-val]')
            curVal.textContent = el.target.dataset.val
            select.classList.remove('_active')
         }
      })
   )
   document.body.addEventListener('click', (el) => {
      el.stopPropagation()
      if (!el.target.classList.contains('lang-select__head') || !el.target.classList.contains('lang-select__item')) {
         selectListEl.forEach((el) => {
            el.classList.remove('_active')
         })
      }
   })
}
//Swiper========================================================================================================================================================
const swiper = new Swiper('.login-slider', {
   modules: [Pagination],
   direction: 'horizontal',
   grabCursor: true,
   watchOverflow: true,
   loop: true,
   pagination: {
      el: '.login-slider__pagination',
      type: 'bullets',
      clickable: true,
   },
   autoplay: {
      delay: 1000,
   },
})
//Notify========================================================================================================================================================
const notifyTempWithBtn = document.querySelector('#notifyTemplate').innerHTML
const notifyTempWithoutBtn = document.querySelector('#notifyTemplateWithout').innerHTML

$.notify.addStyle('notifyWithBtn', {
   html: notifyTempWithBtn,
   classes: {},
})
$.notify.addStyle('notifyTempWithoutBtn', {
   html: notifyTempWithoutBtn,
   classes: {},
})

// $.notify(
//    {
//       name: 'Hi Anastassia!',
//       text: 'Lorem ipsum dolor sit amet, consectetur ',
//    },
//    {
//       style: 'notifyWithBtn',
//       autoHide: false,
//       showAnimation: 'show',
//       hideAnimation: 'hide',
//    }
// )
// $.notify(
//    {
//       name: 'Hi Anastassia!',
//       text: 'Lorem ipsum dolor sit amet, consectetur ',
//    },
//    {
//       style: 'notifyTempWithoutBtn',
//       autoHide: false,
//       showAnimation: 'show',
//       hideAnimation: 'hide',
//    }
// )
$('.notification__close-btn').on('click', function () {
   $(this).trigger('notify-hide')
})
$('.notification__btn-reject').on('click', function () {
   $(this).trigger('notify-hide')
})

$('.notification__btn-accept').on('click', function () {
   alert($(this).text() + ' clicked!')
   $(this).trigger('notify-hide')
})

$('.top-line__logo').on('click', (el) => {
   $.notify(
      {
         name: 'Hi Anastassia!',
         text: 'Lorem ipsum dolor sit amet, consectetur ',
      },
      {
         style: 'notifyWithBtn',
         autoHide: false,
         showAnimation: 'show',
         hideAnimation: 'hide',
      }
   )

   $('.notification__close-btn').on('click', function () {
      $(this).trigger('notify-hide')
   })
   $('.notification__btn-reject').on('click', function () {
      $(this).trigger('notify-hide')
   })

   $('.notification__btn-accept').on('click', function () {
      alert($(this).text() + ' clicked!')
      $(this).trigger('notify-hide')
   })
})
//Login Btn========================================================================================================================================================

const loginFormEl = document.querySelector('#loginForm')

loginFormEl.addEventListener('click', (el) => {
   el.preventDefault()
   if (el.target.classList.contains('form-auth__btn')) {
      loginFormEl.classList.toggle('_active')
   }
})
