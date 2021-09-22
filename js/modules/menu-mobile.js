import outsideClick from './outsideclick.js'

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton)
    this.menuList = document.querySelector(menuList)
    this.openMenu = this.openMenu.bind(this)

    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events
  }

  openMenu() {
    this.menuList.classList.add('active')
    this.menuButton.classList.add('active')
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove('active')
      this.menuButton.classList.remove('active')
    })
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu))
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuMobileEvents()
    return this
  }
}
