import ScrollSuave from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
import ToolTip from './modules/tooltip.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import fetchAnimais from './modules/fetch-animais.js'
import ScrollAnima from './modules/scroll-anima.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import DropDownMenu from './modules/dropdown-menu.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

const tooltip = new ToolTip('[data-tooltip]')
tooltip.init()

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()

const dropDownMenu = new DropDownMenu('[data-dropdown]')
dropDownMenu.init()

initMenuMobile()
initFuncionamento()
fetchAnimais('../../animaisapi.json', '.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')

// ativar webpack npm run dev
