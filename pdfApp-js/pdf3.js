import { pdfFonts,pdfMake } from './lib/pdfmake';


export function genPDF3(element) {

  element.addEventListener('click', () =>{
    pdfMake.createPdf({
      pageSize:'A4',
      pageMargins:[75, 45, 75, 45 ],// [left, top, right, bottom]
      images:{
        logo:'https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg'
      },
      info:{
        title:'รายงานสัญญา',
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
        {image: 'logo',width:115,alignment:'center',marginBottom:24},
        {text:`รายงาน`,alignment:'center',fontSize:20,bold:true},
        {text:`\t\tโมเดิร์นสปิริต แป๋วบ๊วยเฟอร์รี่ บอกซ์ไอติมกาญจนาภิเษกจิตเภทกิมจิ เตี๊ยมเอ็กซ์โปเซลส์แมน เจ็ต คอลัมนิสต์แบตช็อคแชมเปี้ยน เซรามิกอึมครึม ปาสกาลทีวีสปอตก๋ากั่น แกสโซฮอล์ฮองเฮาชีส สวีทซิ้มเทรลเล่อร์อิกัวนาแทกติค คอลัมนิสต์เลดี้ยูโรฮิปฮอป บอร์ด มอคค่าภคันทลาพาธเฟิร์มซิมโฟนี่ เพียบแปร้มวลชนพิซซ่าฮีโร่ ถูกต้อง ควิกตุ๋ย \n\n`},
        {
          pageBreak:'after',text:[
          { text :`\t\tยินดีต้อนรับ 1 `, bold:true},
          { text :`ยินดีต้อนรับ 2 `,color :'red'},
          { text :`ยินดีต้อนรับ 3 `},
          ]
        },//Group array text แบบที่ 1 สามาแยกคุณสมบัติแต่ละชุดได้
        {
          marginTop :20,
          stack:[
            `แมคเคอเรลอพาร์ทเมนท์ยังไงแผดเผา`,
            `จูเนียร์โอเคโต๋เต๋`
          ],
          color: 'blue'
        }
      ],
      
        defaultStyle: {
        font: 'Thsarabun',
        fontSize:16,
        alignment: 'justify',
        preserveLeadingSpaces:true,//ย่อหน้า
        //preserveTrailingSpaces:''//ย่อหลัง
      },
    }).open();
  });
}
