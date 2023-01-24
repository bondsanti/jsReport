import { pdfFonts,pdfMake } from './lib/pdfmake';
import { genBarcode } from './lib/jsbarcode';
import axios from 'axios';
//https://api.codingthailand.com/api/hospital2?page=1&page_size=100

export function genPDF5(element) {

  element.addEventListener('click', async() =>{

    const tableHeader =[
        {text:'No.',bold:true,alignment:'center',fontSize:18}
        ,{text:'Code',bold:true,alignment:'center',fontSize:18}
        ,{text:'Name',bold:true,fontSize:18}
    ];

    let hostpital = [];

    const response = await axios.get('https://api.codingthailand.com/api/hospital2?page=1&page_size=150');
    //console.log(response);
    hostpital = response.data.data;

    let bodyTable = [];
    //ds
    bodyTable = hostpital.map(({id,code,h_name}) => {
        return[{text:id,alignment:'center'},{image:genBarcode(code.toString())},{text:h_name.substring(0,100)}];
    });
    
    bodyTable.unshift(tableHeader);

    pdfMake.createPdf({
      pageSize:'A4',
      pageMargins:[75, 45, 75, 45 ],// [left, top, right, bottom]
      images:{
        logo:'https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg'
      },
      info:{
        title:'ตาราง API',
        author:'Santi',
        subject:'Subject to Doc',
        keywords:'jsReport',
      },
      header : function(currentPage,pageCount,pageSize){
        //add logic
        return{
          columns:[
            {text: new Date().toLocaleString(),alignment:'left',margin:[5, 5, 0, 0 ]},
            {text: `หน้าที่ ${currentPage}/${pageCount}`,alignment:'right',margin:[0, 5, 5, 0 ]}
          ]
        }
      },
      //header:'หัวเอกสาร รายงานของฉัน',
      //footer:'ท้ายเอกสาร รายงานของฉัน',
      footer : function(currentPage,pageCount,pageSize){
        //add logic
        return{
          columns:[
            {text: new Date().toLocaleString(),alignment:'left',margin:[5, 5, 0, 0 ]},
            {text : 'Create by Santi',alignment:'center',color:'red',margin:[0, 5, 0, 5 ]},
            {text: `หน้าที่ ${currentPage}/${pageCount}`,alignment:'right',margin:[0, 5, 5, 0 ]}
          ]
        }
      },
      content: [
        {image: 'logo',width:90,alignment:'center',marginBottom:24},
        {text:`รายงาน`,alignment:'center',fontSize:20,bold:true},
      {
        layout:'lightHorizontalLines',
        table:{
            headerRows:1,//ห้วตาราง
            dontBreakRows:true,
            widths:[50,'*','auto'],//collum
            body:bodyTable

        }
      }
      ],
        defaultStyle: {
        font: 'Thsarabun',
        fontSize:14,
        //alignment: 'justify',
        //preserveLeadingSpaces:true,//ย่อหน้า
        //preserveTrailingSpaces:''//ย่อหลัง
      },
    }).open();
  });
}
