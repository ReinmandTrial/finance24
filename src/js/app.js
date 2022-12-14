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

$.notify.addStyle('WithBtnTemp', {
   html:
      '<div>' +
      "<div class='clearfix'>" +
      '<div class="login-notify">' +
      '<div class="login-notify__top-line">' +
      '<div class="login-notify__img"><img src="./img/small-logo.svg" alt="logo" /></div>' +
      '<p class="login-notify__system-name">Finance24 Auth System</p>' +
      '</div>' +
      '<div class="login-notify__content">' +
      '<p class="login-notify__hi">Hi Anastassia!</p>' +
      '<p class="login-notify__text" data-notify-text>Lorem ipsum dolor sit amet, consectetur </p>' +
      '</div>' +
      ' <div class="login-notify__buttons">' +
      '<button type="button" class="login-notify__btn  ">Accept</button>' +
      '<button type="button" class="login-notify__btn no ">Reject</button>' +
      '</div>' +
      '<button type="button" class="login-notify__close-btn"><img src="./img/close.svg" alt="close" /></button>' +
      '</div>' +
      '</div>' +
      '</div>',
})
$.notify.addStyle('WithoutBtnTemp', {
   html:
      '<div>' +
      "<div class='clearfix'>" +
      '<div class="login-notify">' +
      '<div class="login-notify__top-line">' +
      '<div class="login-notify__img"><img src="./img/small-logo.svg" alt="logo" /></div>' +
      '<p class="login-notify__system-name">Finance24 Auth System</p>' +
      '</div>' +
      '<div class="login-notify__content">' +
      '<p class="login-notify__hi">Hi Anastassia!</p>' +
      '<p class="login-notify__text" data-notify-text>Lorem ipsum dolor sit amet, consectetur </p>' +
      '</div>' +
      '<button type="button" class="login-notify__close-btn"><img src="./img/close.svg" alt="close" /></button>' +
      '</div>' +
      '</div>' +
      '</div>',
})

$.notify(
   {
      title: 'Would you like some Foo ?',
      button: 'Confirm',
   },
   {
      style: 'WithBtnTemp',
      autoHide: true,
      clickToHide: true,
   }
)
$.notify(
   {
      title: 'Would you like some Foo ?',
      button: 'Confirm',
   },
   {
      style: 'WithoutBtnTemp',
      autoHide: true,
      clickToHide: true,
   }
)
