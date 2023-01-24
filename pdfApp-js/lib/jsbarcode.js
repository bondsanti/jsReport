import JsBarcode from "jsbarcode";


export function genBarcode(valueText) {
  let canvas = document.createElement("canvas");
  JsBarcode(canvas, valueText, {
    format: "CODE128",
    height: 25,
    width: 1,
    displayValue: true,
    font: "Thsarabun",
    fontSize: 11,
    margin: 5,
  });
  return canvas.toDataURL("image/png");
}
