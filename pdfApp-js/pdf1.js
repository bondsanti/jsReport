import { pdfFonts,pdfMake } from './lib/pdfmake';


export function genPDF1(element) {

  element.addEventListener('click', () =>{
    pdfMake.createPdf({
      pageSize:'A4',
      pageMargins:[75, 45, 75, 45 ],// [left, top, right, bottom]
      pageOrientation:'portrait',
      watermark: { text: 'test watermark', color: 'red', opacity: 0.3, bold: true, italics: false },
      content: [
        {text:`
        โปรดิวเซอร์ ไวอะกร้าไฮเอนด์ตุ๊กตุ๊กแพกเกจปัจเจกชน บราก๊วนโยโย่แบล็กเฉิ่ม ฟรังก์สปิริต เต๊ะฮัมแทกติคเพรียวบางเห็นด้วย ไมค์เจี๊ยว เซ็นทรัลเพียบแปร้สเตชันยาวีโปรเจ็กต์ จ๊าบ ปัจฉิมนิเทศ เทรดโหลยโท่ยซีรีส์ โครนาโปรดิวเซอร์เฟรมโทรโข่งสเตริโอ สปายมอคคา แบต สเก็ตช์ อัลบัม อิออนซื่อบื้อเฮียอยุติธรรมโปรเจคท์
  โมเต็ลสี่แยกโกลด์สมิติเวชวัคค์ หยวนไหร่ โปรดักชั่นชาร์จนอร์ทตะหงิดจูเนียร์ แม่ค้า บ๋อยเฟรมรายชื่อ วิลล์รีไทร์แชมปิยองพีเรียด เกสต์เฮาส์ฟลุควอล์กพอเพียง ไทเฮากราวนด์สังโฆ เพียบแปร้แล็บ อัลบั้มงั้นจูเนียร์ สต๊อควิววิภัชภาค คาปูชิโนอีสเตอร์ระโงกเกรย์แฟรนไชส์ ไฮกุคีตราชันฮัม ไฟต์แฟ้บ ว้อดก้าแบล็คฟีเวอร์อัลบั้ม อพาร์ตเมนท์มิวสิคยูวีสโลว์แล็บ
  สแตนเลสฮัลโลวีนเลคเชอร์ทาวน์ บ็อกซ์โชห่วย สเปคสหรัฐเทเลกราฟบอร์ด อิสรชนแต๋ว สงบสุขมายาคติฟอร์มกระดี๊กระด๊า สไลด์ผิดพลาด แพกเกจไวกิ้งแก๊สโซฮอล์อัลมอนด์น้องใหม่ สึนามิเสือโคร่งดัมพ์ แอโรบิคตุ๋ยตื้บ ผู้นำสเตริโอม้าหินอ่อนไง โกเต็กซ์ซิลเวอร์ เพรสแม่ค้า เวเฟอร์แคร็กเกอร์ตุ๊กตุ๊กซูชิ บาร์บีคิว หม่านโถวโยเกิร์ตโปรดักชั่นเรตติ้ง ลิมิตแคมเปญไรเฟิลโพลล์ภารตะ
  เกย์แอนด์ ไฟต์ซูฮกดีพาร์ตเมนท์ สเต็ปออดิทอเรียมน้องใหม่ไทเฮา วโรกาสอัลไซเมอร์รีไซเคิลต่อรอง โฮสเตส ทาวน์เฮาส์ ฮองเฮาซาดิสม์คาเฟ่แม็กกาซีนดอกเตอร์ รีสอร์ตอึ๋มรามเทพ หมิงเพรสเฟรช ฮาลาลพรีเมียร์โยโย่ คำสาปซ้อเจไดอัลไซเมอร์ อมาตยาธิปไตยวืดเอ็นทรานซ์พุทโธอึ๋ม วีเจลิสต์ฟลุท แจ๊กพอตซัมเมอร์ ผิดพลาดเรซินโปรดักชั่นแจ็กพอตอีสเตอร์ เดชานุภาพธรรมาภิบาล
  ทัวร์นาเมนท์สโตร์คอนเซปต์ทัวร์นาเมนท์ ลามะแจ็กพ็อตเนิร์สเซอรี่ฮาโลวีน ป๊อปสเตชัน เวิร์ค จิ๊กโก๋ เจล สตาร์เซ่นไหว้ ผ้าห่มแบรนด์ชัตเตอร์จุ๊ย เอาต์วอลนัตสเต็ปแพตเทิร์น สันทนาการ ปัจฉิมนิเทศอาร์ติสต์ไคลแม็กซ์แฟรี่ เซ็นเตอร์ทัวร์ กุนซือ ฮาราคีรีสหรัฐแฟ้บเลสเบี้ยนเซ็นเซอร์ โปลิศดิกชันนารีเอสเปรสโซ สันทนาการแจ็กพอต
        `, pageOrientation: 'landscape', pageBreak: 'after'},
        {text:`
        โปรดิวเซอร์ ไวอะกร้าไฮเอนด์ตุ๊กตุ๊กแพกเกจปัจเจกชน บราก๊วนโยโย่แบล็กเฉิ่ม ฟรังก์สปิริต เต๊ะฮัมแทกติคเพรียวบางเห็นด้วย ไมค์เจี๊ยว เซ็นทรัลเพียบแปร้สเตชันยาวีโปรเจ็กต์ จ๊าบ ปัจฉิมนิเทศ เทรดโหลยโท่ยซีรีส์ โครนาโปรดิวเซอร์เฟรมโทรโข่งสเตริโอ สปายมอคคา แบต สเก็ตช์ อัลบัม อิออนซื่อบื้อเฮียอยุติธรรมโปรเจคท์
  โมเต็ลสี่แยกโกลด์สมิติเวชวัคค์ หยวนไหร่ โปรดักชั่นชาร์จนอร์ทตะหงิดจูเนียร์ แม่ค้า บ๋อยเฟรมรายชื่อ วิลล์รีไทร์แชมปิยองพีเรียด เกสต์เฮาส์ฟลุควอล์กพอเพียง ไทเฮากราวนด์สังโฆ เพียบแปร้แล็บ อัลบั้มงั้นจูเนียร์ สต๊อควิววิภัชภาค คาปูชิโนอีสเตอร์ระโงกเกรย์แฟรนไชส์ ไฮกุคีตราชันฮัม ไฟต์แฟ้บ ว้อดก้าแบล็คฟีเวอร์อัลบั้ม อพาร์ตเมนท์มิวสิคยูวีสโลว์แล็บ
  สแตนเลสฮัลโลวีนเลคเชอร์ทาวน์ บ็อกซ์โชห่วย สเปคสหรัฐเทเลกราฟบอร์ด อิสรชนแต๋ว สงบสุขมายาคติฟอร์มกระดี๊กระด๊า สไลด์ผิดพลาด แพกเกจไวกิ้งแก๊สโซฮอล์อัลมอนด์น้องใหม่ สึนามิเสือโคร่งดัมพ์ แอโรบิคตุ๋ยตื้บ ผู้นำสเตริโอม้าหินอ่อนไง โกเต็กซ์ซิลเวอร์ เพรสแม่ค้า เวเฟอร์แคร็กเกอร์ตุ๊กตุ๊กซูชิ บาร์บีคิว หม่านโถวโยเกิร์ตโปรดักชั่นเรตติ้ง ลิมิตแคมเปญไรเฟิลโพลล์ภารตะ
  เกย์แอนด์ ไฟต์ซูฮกดีพาร์ตเมนท์ สเต็ปออดิทอเรียมน้องใหม่ไทเฮา วโรกาสอัลไซเมอร์รีไซเคิลต่อรอง โฮสเตส ทาวน์เฮาส์ ฮองเฮาซาดิสม์คาเฟ่แม็กกาซีนดอกเตอร์ รีสอร์ตอึ๋มรามเทพ หมิงเพรสเฟรช ฮาลาลพรีเมียร์โยโย่ คำสาปซ้อเจไดอัลไซเมอร์ อมาตยาธิปไตยวืดเอ็นทรานซ์พุทโธอึ๋ม วีเจลิสต์ฟลุท แจ๊กพอตซัมเมอร์ ผิดพลาดเรซินโปรดักชั่นแจ็กพอตอีสเตอร์ เดชานุภาพธรรมาภิบาล
  ทัวร์นาเมนท์สโตร์คอนเซปต์ทัวร์นาเมนท์ ลามะแจ็กพ็อตเนิร์สเซอรี่ฮาโลวีน ป๊อปสเตชัน เวิร์ค จิ๊กโก๋ เจล สตาร์เซ่นไหว้ ผ้าห่มแบรนด์ชัตเตอร์จุ๊ย เอาต์วอลนัตสเต็ปแพตเทิร์น สันทนาการ ปัจฉิมนิเทศอาร์ติสต์ไคลแม็กซ์แฟรี่ เซ็นเตอร์ทัวร์ กุนซือ ฮาราคีรีสหรัฐแฟ้บเลสเบี้ยนเซ็นเซอร์ โปลิศดิกชันนารีเอสเปรสโซ สันทนาการแจ็กพอต
        `}],
      defaultStyle: {
        font: "Thsarabun",
        fontSize:16,
        alignment: 'justify'
      },
    }).open();
  });
}
