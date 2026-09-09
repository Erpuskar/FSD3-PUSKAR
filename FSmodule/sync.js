

const fs = require('fs');
fs.writeFileSync('Student.txt', 'This is the Experiment no 2 in FSD Workshop on 08-09-2026', 'utf8');
console.log('file is written successfully');
//Read
const data = fs.readFileSync("Student.txt", 'utf8');
console.log("File content is given as : ", data);
//Append
fs.appendFileSync('Student.txt', '\n This is the new line append ', 'utf8');
console.log('File is Appended');
// //delete
// fs.unlinkSync('exampleDElete.txt');
// console.log("File is deleted Succesfully");
//New Folder
// fs.mkdirSync('SampleFolder.txt');
// console.log("Folder is created succesfully");
//Delete a Folder
// fs.rmdirSync('SampleFolder.txt');
// console.log("New folder deleted succesfully");
if (fs.existsSync('Student.txt')) {
    console.log('file exist');
} else {
    console.log("file not found,need to create this file");
}