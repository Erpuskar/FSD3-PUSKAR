const fs = require('fs')
fs.writeFile('AsyncFile.text', 'Welcome to Full Stack Development', (err) => {
    if (err) {
        console.log('error creating file: ', err);
        return;
    }
    console.log('File created successfully!');
});
fs.readFile('AsyncFile.text', 'utf8', (err, data) => {
        if (err) {
            console.log('error reading File: ', err);
            return;
        }
        console.log('File content:');
        console.log(data);
    });
    //Append
fs.appendFile('AsyncFile.text', '\nSemester:3', (err) => {

        if (err) {
            console.log('error reading file: ', err);
        } else {
            console.log('\n3. File updated successfully!');
        }
    });
    //updated read
fs.readFile('AsyncFile.text', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading Files: ', err);

    } else {
        console.log('file is updated successfully', err);
        console.log('file content:', data);
    }
});
// fs.unlink('AsyncFile.text', (err) => {
//     if (err) {
//         console.log('Error deleting file: ', err);
//     } else {
//         console.log('File deleted successfully!');
//     }
// });if we write the above code then it will delete the file after reading it so we can comment it out to see the file content.
//make a new file then apply the delete.
fs.appendFile('newFile.text', '\nSemester:3', (err) => {

        if (err) {
            console.log('error reading file: ', err);
        } else {
            console.log('\n3. File updated successfully!');
        }
    });
    fs.unlink('newFile.text', (err) => {
        if (err) {
            console.log('Error deleting file: ', err);
        } else {
            console.log('File deleted successfully!');
        }
    });