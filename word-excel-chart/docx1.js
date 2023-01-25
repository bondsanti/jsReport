import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export function genDocx1(element) {

  //const d = new Date()
  element.addEventListener('click', () =>{
    const doc = new Document({
      sections: [
          {
              properties: {},
              children: [
                  new Paragraph({
                      children: [
                          new TextRun("Hello World"),
                          new TextRun({
                              text: "Foo Bar",
                              bold: true,
                          }),
                          new TextRun({
                              text: "\tGithub is the best",
                              bold: true,
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
