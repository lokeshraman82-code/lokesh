const fs = require("fs");
const {add, multiply, sub} = require("./mathModule.js");

console.log("Custom Module Demo");
console.log("10 + 5 = ", add(10,5));
console.log("10 * 5 = ", multiply(10,5));
console.log("10 - 5 = ", sub(10,5));
console.log("Name:", "Roll No.:");
const file = "sample.txt";

fs.writeFileSync(file, "Mern Full Stack La- Experiment?\n")
console.log("file created and written sucessfully");


let data = fs.readFileSync(file, "utf8");
console.log("Initial content:" + data);

fs.appendFileSync(file, "File operations are perfromed usig Node.js fs module.\n",);
console.log("Content Appended Successfull+ .");

data = fs.readFileSync(file, "utf8");
console.log("Updated Content:\n"+ data);

fs.renameSync(file, "imp.txt");
console.log("File Rename Successfully");

//fs.unlinkSync("imp.txt");
//console.log("File Deleted Successfully");