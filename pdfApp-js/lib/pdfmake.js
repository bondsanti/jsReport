import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
    Thsarabun: {
      normal:
        "https://codingthailand.com/site/fonts/th/THSarabunNew.ttf",
      bold: "https://codingthailand.com/site/fonts/th/THSarabunNewBold.ttf",
      italics:
        "https://codingthailand.com/site/fonts/th/THSarabunNewBoldItalic.ttf",
      bolditalics:
        "https://codingthailand.com/site/fonts/th/THSarabunNewItalic.ttf",
    },
  };
  
export{ pdfMake, pdfFonts};