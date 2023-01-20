window.addEventListener('DOMContentLoaded', () =>
{
  const tabsParent = document.querySelector('.tabheader__items'),
  tabs = document.querySelectorAll('.tabheader__item'),
  tabsContent = document.querySelectorAll('.tabcontent'),
  loader = document.querySelector('.loader')

  //LOADER>>

 setTimeout(() => {
  loader.style.opacity = '0'
  setTimeout(() => {
    loader.style.display = 'none'
  }, 500)
 }, 2000)


//TABS>>>
 function hideTabContent() {
  tabsContent.forEach((item) => {
   item.classList.add('hide')
   item.classList.remove('show')
 })

  tabs.forEach((item) => {item.classList.remove('tabheader__item_active')
 })
 }


 function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade')
  tabsContent[i].classList.remove('hide')
  tabs[i].classList.add('tabheader__item_active')
 }
 hideTabContent()
 showTabContent()

 tabsParent.addEventListener('click', (event) => {
   const target = event.target
   if(target && target.classList.contains('tabheader__item')) {
     tabs.forEach((item, idx) => {
       if (target == item) {
         hideTabContent()
         showTabContent(idx)
       }
     })
   }
 })

 //TIMER>>>
 const deadline = '2023-03-18'

 function getTimeRemaining(endtime) {
  let days, hours, minutes, seconds
  const timer = Date.parse(endtime) - Date.parse(new Date())

  if (timer < 0) {
    days = 00
    hours = 00
    minutes = 00
    seconds = 00
  }
  else {
    days = Math.floor(timer / (1000 * 60 * 60 * 24))
    hours = Math.floor((timer / (1000 * 60 *60)) % 24)
    minutes = Math.floor((timer / 1000 / 60) % 60)
    seconds = Math.floor((timer / 1000) % 60)
  }



   return {
    timer, days, hours, minutes, seconds
   }
 }

 function getZero(num) {
  if(num > 0 && num < 10) {
   return `0${num}`;
  }
  else {
    return num;
  }
 }

 function setClock (selector, endtime) {
  const timer = document.querySelector('#days'),
  hours = document.querySelector('#hours'),
  minutes = document.querySelector('#minutes'),
  seconds = document.querySelector('#seconds'),
  timeInterval = setInterval(updateClock, 1000)

   updateClock()


 function updateClock() {
    const t = getTimeRemaining(endtime)

    days.innerHTML = getZero(t.days)
    hours.innerHTML = getZero(t.hours)
    minutes.innerHTML = getZero(t.minutes)
    seconds.innerHTML = getZero(t.seconds)

    if(t.timer < 0) {
      clearInterval(timeInterval)
    }
  }
 }
 setClock('.timer', deadline);


 //MODAL>>>
  const modalTrigger = document.querySelectorAll('[data-modal]'),
   modal = document.querySelector('.modal'),
   modalCloseBtn = document.querySelector('[modal-close')

  function closeModal () {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
  }

  function openModal () {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
    clearInterval(modalTimerId)
  }

  modalTrigger.forEach((item) => {
    item.addEventListener('click', openModal)
  })

  modalCloseBtn.addEventListener('click', closeModal)

  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
  })

  const modalTimerId = setTimeout(openModal, 5000)

  function showModalByScroll ( ) {
    if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
      openModal()
      window.removeEventListener('scroll', showModalByScroll)
    }
  }
   window.addEventListener('scroll', showModalByScroll)

   //CLASS>>>

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src
      this.alt = alt
      this.title = title
      this.descr = descr
      this.price = price
      this.classes = classes
      this.parent = document.querySelector(parentSelector)
      this.transfer = 11000
      this.changeUsd()
    }

    changeUsd() {
      this.price = this.price * this.transfer
    }

    render() {
      const element = document.createElement('div')

      this.classes.forEach((classname) => element.classList.add(classname))
      element.innerHTML =
      ` <div class="menu__item">
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">
            ${this.descr}
          </div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
          </div>
        </div>`

        this.parent.append(element)
    }
  }

   new MenuCard(
    'img/tabs/1.png',
    'usual',
    'Plan "Usual"',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis .',
    10,
    '.menu .container',
    'menu__item'
   ).render()

   new MenuCard(
    'img/tabs/2.jpg',
    'usual',
    'Plan "Premium"',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id ',
    14,
    '.menu .container',
    'menu__item'
   ).render()


   new MenuCard(
    'img/tabs/3.jpg',
    'usual',
    'Plan "VIP"',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab c',
    20,
    '.menu .container',
    'menu__item'
   ).render()
})