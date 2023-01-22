import { pdfFonts,pdfMake } from './lib/pdfmake';


export function genPDF6(element) {

  element.addEventListener('click', () =>{
    
    
    //custom layouts table
    pdfMake.tableLayouts= {
        customTable:{
            defaultBorder:false,
            paddingTop:function(i,node) {
                return -1
            },
            paddingBottom:function(i,node) {
                return -1
            }
        }
    }

    pdfMake.createPdf({
        pageSize:'A4',
        images:{
            logo:'https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg',
            //logostamp:'https://www.mcdonalds.co.th/assets/img/main-logo_b&w@2x.png'
        },
        pageMargins:[40,20,40,20], //left top right buttom
        defaultStyle:{
            fontSize:13,
            bold:true,
            font:'Thsarabun'
        },
        content:[
            {
            columnGap:30,
            columns:[
                [
                    {image:'logo',width:50,alignment:'left',marginBottom:10},
                    {text:`บริษัท แมคไทย จำกัด
                    97/11 อาคารบิ๊กซีราชดำริ ออฟฟิศห้อง 1 
                    ชั้น5 ถนนราชดำริ  ปทุมวัน กรุงเทพมหานคร 10330 ประเทศไทย
                    โทร 1711 (คอลเซ็นเตอร์) +66 (0) 2696 4900 (สำนักงานใหญ่) `,alignment:'left'}
                ],//end colum1
                [
                  {text:'ใบเสร็จรับเงิน',alignment:'center',fontSize:20,color:'green',marginTop:18},
                  {text:'ต้นฉบับ',alignment:'center',color:'red',marginTop:-5,marginBottom:5},
                  {
                    marginBottom:5,
                    canvas:[
                    {type:'line',x1:5,y1:0,x2:225,y2:0,color:'grey'}
                  ]},
                  {
                    layout:pdfMake.tableLayouts.customTable,
                    
                    table:{                  
                        widths:['*','*'],//collum
                        body:[
                            [{text:'เลขที่',color:'green'},'TEST0000000001'],
                            [{text:'วันที่',color:'green'},'12/12/2023'],
                            [{text:'ผู้ขาย',color:'green'},'Santi Choo.'],
                            [{text:'อ้างอิง',color:'green'},'PO0000001'],
                        ]
            
                    }
                  },
                  {
                    marginTop:5,
                    canvas:[
                    {type:'line',x1:5,y1:0,x2:225,y2:0,color:'grey'}
                  ]},
                  
                ],//end colum2
            ],
            },
            //customer detail
            {text:'ลูกค้า',color:'green',marginTop:15},
            {text:`มาร์จินคอร์รัปชันต่อยอดไวกิ้ง อึมครึมบิลพงษ์ แพนด้าโง่เขลา
            แน้มโพลารอยด์ วัจนะไตรมาสสตาร์ททริปเอ็นเตอร์เทน `},

            //table detail
            {
                marginTop:15,
                layout:'lightHorizontalLines',
                table:{
                    headerRows:1,//ห้วตาราง
                    heights:12,
                    widths:[50,'*','auto','auto','auto'],//colum
                    body:[
                        ['#','รายละเอียด','จำนวน','ราคาต่อหน่วย','ยอดรวม'],
                        ['1','ซามูไรเบอร์เกอร์หมู',{text:1,alignment:'center'},{text:150,alignment:'right'},{text:150,alignment:'right'}],
                        ['2','เฟรนช์ฟรายส์',{text:1,alignment:'center'},{text:89,alignment:'right'},{text:89,alignment:'right'}],
                    ]
                }
            },
             //table sum
            {
                marginTop:15,
                layout:'noBorders',
                table:{
                    
                    heights:12,
                    widths:['*','auto','auto'],//colum
                    body:[
                        ['',{text:'รวมเป็นเงิน',color:'green',alignment:'right',fontSize:16},{text:'239.-',alignment:'right',fontSize:16}],
                        [{text:'(สองร้อยสามสิบเก้าบาทถ้วน)',fontSize:16},{text:'เงินรวมทั้งสิ้น',color:'green',alignment:'right',fontSize:16},{text:'239.-',alignment:'right',fontSize:16}],
                    ]
                }
            },
            //checkbox
            [
                
                {text:'รูปแบบการชำระเงิน',decoration: 'underline',decorationStyle:'dotted',marginTop:300 },
                {text:'รับเงินเข้าบัญชี',margin:[0,5,0,20]}
            ],
            //singatual
            {
                columnGap:30,
                columns:[
                    [
                        {text:'pdfmake.org',alignment:'center'},
                        {
                            marginTop:30,
                            columns:[
                                [
                                {
                                    canvas:[
                                        {type:'line',x1:0,y1:0,x2:80,y2:0,color:'grey'}
                                      ] 
                                },
                                {text:'ผู้จ่ายเงิน',alignment:'left',margin:[20,10,0,0]}
                                ],
                                [
                                    {
                                        canvas:[
                                            {type:'line',x1:0,y1:0,x2:80,y2:0,color:'grey'}
                                          ] 
                                    },
                                    {text:'วันที่',alignment:'left',margin:[20,10,0,0]}
                                ],
                            ]
                        }
                    ],

                        {image:'logo',alignment:'center',width:50,opacity: 0.5},

                    [
                        {text:'บริษัท แมคไทย จำกัด',alignment:'center'},
                        {
                            marginTop:30,
                            columns:[
                                [
                                {
                                    canvas:[
                                        {type:'line',x1:0,y1:0,x2:80,y2:0,color:'grey'}
                                      ] 
                                },
                                {text:'ผู้จ่ายเงิน',alignment:'left',margin:[20,10,0,0]}
                                ],
                                [
                                    {
                                        canvas:[
                                            {type:'line',x1:0,y1:0,x2:80,y2:0,color:'grey'}
                                          ] 
                                    },
                                    {text:'วันที่',alignment:'left',margin:[20,10,0,0]}
                                ],
                            ]
                        }
                    ],
                ]
            }
        ]
     }).open();   

  })
}
