import axios from "axios";
import * as XLSX from "xlsx"

export function genExcel(element) {

  //const d = new Date()
  element.addEventListener('click', async() => {


    let hostpitals=[];
    const resData = await axios.get('https://api.codingthailand.com/api/hospital2?page=1&page_size=150');
    //console.log(resData);
    hostpitals = resData.data.data;


    
    let worksheet = XLSX.utils.json_to_sheet(hostpitals);
    
    //ความกว้างของ ตาราง
    const max_width = hostpitals.reduce((w,r) => Math.max(w, r.h_name.length),10);
    worksheet["!cols"] = [{wch:10},{wch:10},{wch:max_width}];

    //เปลี่ยนหัวตาราง
    XLSX.utils.sheet_add_aoa(worksheet,[
      ["ไอดี","รหัส","ชื่อสถานพยาบาล"]
    ],{origin:'A1'});

    let workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook,worksheet,"List Hospital Report");
    XLSX.writeFile(workbook,'example.xlsx')

  });



}
