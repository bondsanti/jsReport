import { pdfFonts,pdfMake } from './lib/pdfmake';
import { genBarcode } from './lib/jsbarcode';

export function genPDF8(element) {

  element.addEventListener('click', () =>{
    


    pdfMake.createPdf({
        pageSize:'A4',
        pageMargins:[40,20,40,20], //left top right buttom
        defaultStyle:{
            fontSize:13,
            bold:true,
            font:'Thsarabun'
        },
        content:[
            {
                columnGap :30,
                columns:[
                    [
                        {text:'qrcode',alignment:'center',marginBottom:10},
                        {qr:'qrcode',alignment:'center',fit :100},
                    ],//colum1
                    [
                        {text:'barcode',alignment:'center',marginBottom:10},
                        {image: genBarcode("0123456789101212"),alignment:'center'}
                    ],//colum2


                ]
            }
        ]
     }).open();   

  })
}
