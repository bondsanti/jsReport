import axios from "axios";
import * as XLSX from "xlsx"
import { saveAs } from "file-saver";

export function genCsv(element) {

  //const d = new Date()
  element.addEventListener('click', async() => {


    let hostpitals=[];
    const resData = await axios.get('https://api.codingthailand.com/api/hospital2?page=1&page_size=150');
    //console.log(resData);
    hostpitals = resData.data.data;

    let worksheet = XLSX.utils.json_to_sheet(hostpitals);

    let CSV = XLSX.utils.sheet_to_csv(worksheet,{FS:','});

    let BOM = "\uFEFF";
    let csvWithBOM=BOM + CSV;
    let blob = new Blob([csvWithBOM],{type:'text/csv;charset=utf-8'});
    saveAs(blob,'csv_example.csv');

  });



}
