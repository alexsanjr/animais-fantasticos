import ScrollSuave from './modules/scroll-suave.js'

import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tabnav.js'
import initModal from './modules/modal.js'
import initToolTip from './modules/tooltip.js'
import initDropDownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

initAccordion()
initTabNav()
initModal()
initToolTip()
initDropDownMenu()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
initAnimacaoScroll()

// ativar webpack npm run dev
