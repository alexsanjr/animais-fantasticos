export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`
      this.tooltipBox.style.left = `${event.pageX + 20}px`
    },
  }

  const onMouseLeave = {
    handleEvent() { // tem que ser esse nome. objeto como callback
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave) // para deixar um evento provisóriamente
      this.element.removeEventListener('mousemove', onMouseMove)
    },
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this) // faz referencia ao item no forEach

    onMouseMove.tooltipBox = tooltipBox
    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this
    this.addEventListener('mouseleave', onMouseLeave)
    this.addEventListener('mousemove', onMouseMove)
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
}
