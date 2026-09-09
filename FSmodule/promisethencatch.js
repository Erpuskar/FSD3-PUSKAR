const fs = require("fs").promises;

async function writeFile() {
    try {
        await fs.writeFile("promise.txt", "This is my promises then catch file.");
        console.log("File created and data written successfully.");
    } catch (error) {
        console.log("Error", error);
    }
}
writeFile();
//read file
async function readFile() {
    try {
        const data = await fs.readFile("promise.txt", 'utf8');
        console.log("File Content:");
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}
readFile();
//update
async function appendFile() {
    try {
        await fs.appendFile("promise.txt", "\nWelcome to FSD Training.")
        console.log("Data appended succesfully.");
    } catch (error) {
        console.log("Error:", error);
    }
}
appendFile();
async function appendFile() {
    try {
        await fs.appendFile("deleteSample.txt", "\nWelcome to FSD Training.")
        console.log("Data appended succesfully.");
    } catch (error) {
        console.log("Error:", error);
    }
}
appendFile();
// rename
async function renameFile() {
    try {
        await fs.rename("promise.txt", "promise_new.txt");
    }
}
//delete
// async function deleteFile() {
//     try {
//         await fs.unlink("deleteSample.txt");
//         console
//     }
// }