import './style.css'
import ApexCharts from 'apexcharts'
import javascriptLogo from './javascript.svg'
import { genDocx1 } from './docx1'
import { genDocx2 } from './docx2'
import { genExcel } from './excel'
import { genCsv } from './csv'

window.addEventListener("load",(event)=>{
  let options = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany'
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
})

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <div id="chart">
    </div>
    <hr>
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
