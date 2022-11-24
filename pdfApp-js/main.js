import './style.css'
import javascriptLogo from './javascript.svg'
import { genPDF1 } from './pdf1.js'
import { genPDF2 } from './pdf2.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    
    <div class="card">
      <button id="btnGenPdf1" type="button">PDF 1</button>
      <button id="btnGenPdf2" type="button">PDF 2</button>
    </div>

  </div>
`

genPDF1(document.querySelector('#btnGenPdf1'))
genPDF2(document.querySelector('#btnGenPdf2'))
