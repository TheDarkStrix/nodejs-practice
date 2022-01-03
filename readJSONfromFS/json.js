const fs = require("fs");

function readFileFS() {
  const Buffer = fs.readFileSync("./jsonData.json");
  const BufferJSON = Buffer.toString();
  return JSON.parse(BufferJSON);
}

function writeFileFs(data) {
  fs.writeFileSync("./jsonData.json", data);
}

const jsonData = readFileFS();
console.log("Before Editing", jsonData);
jsonData.name = "Manoj Edited";
jsonData.planet = "mars";

writeFileFs(JSON.stringify(jsonData));

console.log("After Editing", readFileFS());
