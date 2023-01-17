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
const deadline = '2023-01-18'

function getTimeRemaining(endtime) {
  const timer = Date.parse(endtime) - Date.parse(new Date()),
   days = Math.floor(timer / (1000 * 60 * 60 * 24)),
   hours = Math.floor((timer / (1000 * 60 *60)) % 24),
   minutes = Math.floor((timer / 1000 / 60) % 60),
   seconds = Math.floor((timer / 1000) % 60)

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

})