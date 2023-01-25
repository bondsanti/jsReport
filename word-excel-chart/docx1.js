import { AlignmentType, Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export function genDocx1(element) {

  //const d = new Date()
  element.addEventListener('click', () =>{
    const doc = new Document({
      sections: [
          {
              properties: {},
              children: [
                  new Paragraph(
                    {
                      //alignment:AlignmentType.CENTER,
                      alignment:AlignmentType.THAI_DISTRIBUTE,
                      children:[
                        new TextRun({
                          text:"\tนอร์ทอะมอยส์เจอไรเซอร์วอลซ์ฟลุก ฮอตดอก อมาตยาธิปไตยแคทวอล์ครูบิคศิรินทร์เดชานุภาพ เมจิกหมิงพุทธศตวรรษฮิบรู โปรเจคท์สไลด์ทรูวืดโปรเจกต์ คอนโดมิเนียมแซลมอนแอคทีฟ สตรอว์เบอร์รีชาร์จ โกลด์บลูเบอร์รี แอดมิชชั่นโพลล์โพลล์ โยโย่ม้าหินอ่อน ตรวจทานรากหญ้าโลโก้จิตเภท กีวีศิลปากร ซังเตกาญจน์เที่ยงคืนเที่ยงวัน ฮิปโปอุตสาหการฉลุยม้าหินอ่อน ซาร์แพลนเพนกวิน ศิรินทร์เคอร์ฟิว"
                          ,font:"TH SarabunPSK",
                          size:50
                        })
                      ]
                    }
                  ),
                  new Paragraph({
                      children: [
                          new TextRun("Hello World"),
                          new TextRun({
                              text: "\tสวัสดีนะครัช",
                              bold: true,
                              font: "TH SarabunPSK",
                              size:36
                              
                          }),
                          new TextRun({
                              text: "\tGithub is the best",
                              bold: true,
                              font: "TH SarabunPSK",
                              size:40
  
                          }),
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
