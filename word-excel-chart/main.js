import './style.css'
import javascriptLogo from './javascript.svg'
import { genDocx1 } from './docx1'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    
    <div class="card">
      <button id="btn1" type="button">Docx 1</button>
    </div>

  </div>
`

genDocx1(document.querySelector('#btn1'))

