import { pdfFonts,pdfMake } from './lib/pdfmake';


export function genPDF4(element) {

  element.addEventListener('click', () =>{

    const tableHeader =[
        {text:'ID',bold:true,alignment:'center',fontSize:18}
        ,{text:'Name',bold:true,fontSize:18}
        ,{text:'Salary',bold:true,alignment:'center',fontSize:18}
    ];

    let employee = [
        {id:1,name:'john',salary:30000},
        {id:2,name:'Mary',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:1,name:'john',salary:30000},
        {id:2,name:'Mary',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},
        {id:3,name:'Bob',salary:30000},

    ];//object data [{[employee]}]
    
    let bodyTable = [];
    //ds
    bodyTable = employee.map(({id,name,salary}) => {
        return[{text:id,alignment:'center'},name,salary.toLocaleString('en-US')];
    });
    
    bodyTable.unshift(tableHeader);

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
        {image: 'logo',width:90,alignment:'center',marginBottom:24},
        {text:`รายงาน`,alignment:'center',fontSize:20,bold:true},
      {
        layout:'lightHorizontalLines',
        table:{
            headerRows:1,//ห้วตาราง
            widths:[50,'*','auto'],//collum
            // body:[
            //     [{text:'ID',bold:true,alignment:'center',fontSize:18},{text:'Name',bold:true,alignment:'center',fontSize:18},{text:'Salary',bold:true,alignment:'center',fontSize:18}],
            //     ['1','bbbbbbb','ccccccccccc'],
            //     ['aa','bbbbbbb','ccccccccccc'],
            //     ['aa','bbbbbbb','ccccccccccc'],
            //     ['aa','bbbbbbb','ccccccccccc'],
            // ]
            body:bodyTable

        }
      }
      ],
        defaultStyle: {
        font: 'Thsarabun',
        fontSize:16,
        alignment: 'justify',
        //preserveLeadingSpaces:true,//ย่อหน้า
        //preserveTrailingSpaces:''//ย่อหลัง
      },
    }).open();
  });
}
