import { pdfFonts,pdfMake } from './lib/pdfmake';

export function genPDF7(element) {
  element.addEventListener('click', async () => {

      pdfMake.tableLayouts = {
        exampleLayout: {
            defaultBorder: false,
            paddingTop: function (i, node) {
                return 0
            },
            paddingBottom: function (i, node) {
                return 0
            },
        }
      };  

      pdfMake.createPdf({
        content: [
            {
                columnGap: 30,
                columns: [
                    [
                       { image: 'logo', alignment: 'left', width: 60 },
                       { text: 'บริษัท โคดิ้ง คอนซัลแตนท์ (ไทยแลนด์) จำกัด', marginTop: 10 },
                       { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                       { text: 'Lorem Ipsum is simply dummy text' },
                       { text: 'Lorem Ipsum is simply' },
                          
                    ], //end column 1
                    [
                        { text: 'ใบเสร็จรับเงิน', fontSize: 25, color: 'green', alignment: 'center', marginTop: 20 },
                        { text: 'ต้นฉบับ', fontSize: 11, color: 'green', alignment: 'center', margin: [0,0,0,10] },
                        {
                            canvas: [ { type: 'line', x1:0, y1:0, x2:230, y2:0, lineWidth: 1, lineColor: 'grey' } ]
                        },
                        {
                            //table
                            layout: pdfMake.tableLayouts.exampleLayout,
                            table: {
                                widths: ['*', '*'],
                                body: [
                                    [{text: 'เลขที่', color: 'green'}, 'RE0000000001'],
                                    [{text: 'วันที่', color: 'green'}, '12/12/2022'],
                                    [{text: 'ผู้ขาย', color: 'green'}, 'Mike mausm'],
                                    [{text: 'อ้างอิง', color: 'green'}, 'PO0000000005'],
                                ]
                            }   
                        },
                        {
                            canvas: [ { type: 'line', x1:0, y1:0, x2:230, y2:0, lineWidth: 1, lineColor: 'grey' } ]
                        },

                    ], //end column 2
                ],
            },
            [
                {text: 'ลูกค้า', color: 'green', marginTop: 20 },
                {text: 'Lorem Ipsum has been the industry standard dummy text ever', marginTop: 0 },
                {text: 'Lorem Ipsum has been the industry standard dummy text ever', marginTop: 0 },
                {text: 'Lorem Ipsum has been the industry standard dummy text ever', marginBottom: 10 },
            ],
            {
                layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    // heights: 12,
                    widths: [20, "*", "auto", "auto", "auto"],
                    body: [
                        ["#", "รายละเอียด", "จำนวน", "ราคาต่อหน่วย", "ยอดรวม"],
                        ["1", "คอร์สเรียนออนไลน์ JavaScript Report", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],
                        ["2", "คอร์สเรียนออนไลน์ Next.js and React 18", 1, 990, 990],

                    ]
                }
            },
            {
                layout: 'noBorders',
                margin: [0, 10, 0, 10],
                table: {
                    heights: 12,
                    widths: ['*', "auto", "auto"],
                    body: [
                        ["", {text: 'รวมเป็นเงิน', color: 'green', alignment: 'right'}, "1,980.00 บาท"],
                        ["(หนึ่งพันเก้าร้อยแปดสิบบาทถ้วน)", {text: 'รวมเป็นเงินทั้งสิ้น', color: 'green', alignment: 'right'}, "1,980.00 บาท"],
                    ]
                }
            },
        ],
        footer: function(currentPage, pageCount, pageSize) {
            //add logic
            if (currentPage === pageCount) {
                return {  
                    columnGap: 30,
                    margin: [40,-100,40,10],
                    columns: [
                        [
                            {text: 'pdfmake.org', alignment: 'left'},
                            {
                                marginTop: 80,
                                columns: [
                                    [
                                       { canvas: [ { type: 'line', x1:0, y1:0, x2:70, y2:0, lineWidth: 1, lineColor: 'grey' } ] },
                                       { text: 'ผู้จ่ายเงิน', alignment: 'left', marginLeft:20, marginTop: 10 } 
                                    ],
                                    [
                                        { canvas: [ { type: 'line', x1:0, y1:0, x2:70, y2:0, lineWidth: 1, lineColor: 'grey' } ] },
                                        { text: 'วันที่', alignment: 'left', marginLeft:20, marginTop: 10 } 
                                    ]
                                ]
                            }
                        ],
                            { image: 'logo', alignment: 'center', width: 120 },
                        [
                            {text: 'tesstt.com', alignment: 'left'},
                            {
                                marginTop: 80,
                                columns: [
                                    [
                                       { canvas: [ { type: 'line', x1:0, y1:0, x2:70, y2:0, lineWidth: 1, lineColor: 'grey' } ] },
                                       { text: 'ผู้จ่ายเงิน', alignment: 'left', marginLeft:20, marginTop: 10 } 
                                    ],
                                    [
                                        { canvas: [ { type: 'line', x1:0, y1:0, x2:70, y2:0, lineWidth: 1, lineColor: 'grey' } ] },
                                        { text: 'วันที่', alignment: 'left', marginLeft:20, marginTop: 10 } 
                                    ]
                                ]
                            }
                        ]
                    ]
                }  
            } else {
                return {
                    columns: [
                      { text: new Date().toLocaleString(), alignment: 'left', margin: [10, 10, 0, 0] },
                      { text: `created by bondsanti`, alignment: 'right', margin: [0, 10, 10, 0] },
                    ]
                  }
            }
        },
        images: {
            logo: 'https://codingthailand.com/site/img/logo_cct.png'
        },
        defaultStyle: {
            font:'Thsarabun',
            fontSize: 12,
            bold: true,
        },
        pageSize: 'A4',
        // pageMargins: [40, 20, 40, 150]
      }).open();
  });
}
