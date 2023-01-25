import { AlignmentType, Document, Footer, Header, ImageRun, Packer, PageNumber, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { saveAs } from "file-saver";
import { Buffer } from "buffer";
import axios from "axios";

export function genDocx2(element) {

  //const d = new Date()
  element.addEventListener('click', async() => {

    //get img
    const resLogo = await axios.get("https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",{
        responseType:"arraybuffer"
    });

    let hostpitals=[];
    const resData = await axios.get('https://api.codingthailand.com/api/hospital2?page=1&page_size=150');
    //console.log(resData);
    hostpitals = resData.data.data;
    //get data api
    const getRows =(hostpitals) => {
       return hostpitals.map(({id,code,h_name})=>{
            return new TableRow({
                children:[
                    new TableCell({
                        //width:{ size:10,type:WidthType.PERCENTAGE},
                        children:[ new Paragraph({
                            text:id.toString(),style:'rowsTable',alignment:AlignmentType.CENTER
                        })]
                    }),
                    new TableCell({
                        //width:{ size:20,type:WidthType.PERCENTAGE},
                        children:[ new Paragraph({
                            text:code.toString(),style:'rowsTable',alignment:AlignmentType.CENTER
                        })]
                    }),
                    new TableCell({
                       // width:{ size:10,type:WidthType.PERCENTAGE},
                        children:[ new Paragraph({
                            text: h_name,style:'rowsTable'
                        })]
                    }),
                ]
            })
        })
    }

    const doc = new Document({
      creator:"Santi dev",
      styles:{
        paragraphStyles:[
            { 
                id:'rowsTable',name:'for row table',
                 run:{
                    font:'TH SarabunPSK',size:32
                } 
            },
            { 
                id:'headerTable',name:'for header table',
                 run:{
                    font:'TH SarabunPSK',size:40,bold:true
                },
                alignment:AlignmentType.CENTER
            },
        ]
      },
      sections: [
          {
              properties: {},
              headers:{
                default: new Header({
                    children:[
                        new Paragraph({
                            alignment:AlignmentType.END,
                            children:[
                                new TextRun({
                                    children:["หน้า ",PageNumber.CURRENT, "/", PageNumber.TOTAL_PAGES]
                                })
                            ]
                        })
                    ]
                })
              },
              footers:{
                default: new Footer({
                    children:[
                        new Paragraph(new Date().toDateString())
                    ]
                })
              },
              children: [
                new Paragraph(
                    {
                      alignment:AlignmentType.CENTER,
                      
                      children:[
                        new ImageRun({
                            
                            //data: Buffer.from(resLogo.data,"binary").toString("base64"),//string
                            data:resLogo.data, //array buffer                         
                             transformation:{
                                width:120,
                                height:120
                            }

                        }),
                      ]
                    }
                  ),
                  new Paragraph(
                    {
                      alignment:AlignmentType.CENTER,
                      spacing:{ 
                        after:200,
                        before:200
                      },
                      children:[
                        new TextRun({
                          text:"รายงานชื่อสถานพยาบาล"
                          ,font:"TH SarabunPSK",
                          size:50,
                          bold:true
                        })
                      ]
                    }
                  ),
                 new Table({
                    width:{ size:100,type:WidthType.PERCENTAGE},
                    rows:[
                        new TableRow({
                            tableHeader:true,
                            children:[
                                new TableCell({
                                    width:{ size:10,type:WidthType.PERCENTAGE},
                                    children:[ new Paragraph({
                                        text:'รหัส',style:'headerTable'
                                    })]
                                }),
                                new TableCell({
                                    width:{ size:20,type:WidthType.PERCENTAGE},
                                    children:[ new Paragraph({
                                        text:'CODE',style:'headerTable'
                                    })]
                                }),
                                new TableCell({
                                   // width:{ size:10,type:WidthType.PERCENTAGE},
                                    children:[ new Paragraph({
                                        text:'ชื่อสถานพยาบาล',style:'headerTable'
                                    })]
                                }),
                            ]
                        }),
                        //data
                        ...getRows(hostpitals),
                    ],
                 }),
              ],
          },
      ],
  });
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob,"example.docx");
  });

  });



}
