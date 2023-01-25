import './style.css'
import javascriptLogo from './javascript.svg'
import { genDocx1 } from './docx1'
import { genDocx2 } from './docx2'
import { genExcel } from './excel'
import { genCsv } from './csv'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    
    <div class="card">
      <button id="btn1" type="button">Docx 1</button>
      <button id="btn2" type="button">Docx 2</button>
      <button id="btn3" type="button">Excel</button>
      <button id="btn4" type="button">CSV</button>
    </div>

  </div>
`

genDocx1(document.querySelector('#btn1'))
genDocx2(document.querySelector('#btn2'))
genExcel(document.querySelector('#btn3'))
genCsv(document.querySelector('#btn4'))
