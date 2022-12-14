//Подключение стилей======================================================================================================================================
import '../scss/style.scss'
//========================================================================================================================================================
import $ from 'jquery'
import './vendor.js'

//========================================================================================================================================================

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
            curVal.textContent = el.target.value
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

$.notify(
   {
      name: 'Hi Anastassia!',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
   },
   {
      style: 'notifyWithBtn',
      autoHide: false,
   }
)
$.notify(
   {
      name: 'Hi Anastassia!',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
   },
   {
      style: 'notifyTempWithoutBtn',
      autoHide: false,
   }
)

$('.login-notify__close-btn').on('click', function () {
   $(this).trigger('notify-hide')
})
$('.login-notify__btn-reject').on('click', function () {
   $(this).trigger('notify-hide')
})

$('.login-notify__btn-accept').on('click', function () {
   alert($(this).text() + ' clicked!')
   $(this).trigger('notify-hide')
})
