//1

// function logfile () {
//    console.log({ File: __filename });
//    console.log({ Dir: __dirname });
// }
// logfile();

2//
// const path = require('path');
// function fileName (filepath) 
// {
//   return path.basename (filepath);
// }
// console.log(fileName("/user/files/report.pdf"));


3//
// const path = require('path');
// function build(obj) {
//   return path.format(obj);
// }
// console.log(build({ dir: "/folder", name: "app", ext: ".js" }));

//4
// const path = require('path');
// function  fileExtension (file){
//     return path.extname(file);
// }
// console.log(fileExtension(" /docs/readme.md"));

//5
// const path = require('path');
// function filePar (file){
//     return path.parse(file);
// }
// console.log(filePar("/home/app/main.js"));

//6
// const path = require('path');
// function check (file) 
// {
//     return path.isAbsolute(file);
// }
// console.log(check("/home/user/file.txt"));

//7
// const path = require('path');
// function segments (...file) 
// {
//     return path.join(...file);
// }
// console.log(segments("src","components", "App.js"));

//8
// const path = require('path');
// function greet (file) 
// {
//     return path.resolve(file);
// }
// console.log(greet("./index.js"));

9//
const { log } = require('console');
// const path = require('path');
// function twoPaths(file1, file2) 
// {
//     return path.join(file1, file2);
// }
// console.log(twoPaths(" /folder1", "folder2/file.txt"));

//10
//   const fs = require('fs');
//   function deletFile(file) 
//   {
//     fs.unlink (file, (err) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log("File deleted successfully");
//         }
//     });

//   }
// deletFile("/path/to/file.txt");

//11
// const fs = require('fs');
// function greet (name) 
// {
//     fs.mkdirSync (name);
//     console.log(`Directory '${name}' created successfully.`);
// }
// greet("newFolder");

//12
//لسه ماوصلناش ليها

//13
//لسه ماوصلناش ليها

//14
// const fs = require ('fs');
// function readAFile (file) {
//     const content = fs.readFileSync(file, 'utf8');
//     console.log(content);
// }
// readAFile("./notes.txt");

//15
// const fs = require('fs');
// function greet (file) {
//     fs.writeFileSync("./async.txt","Async save");
// }
// greet();

//16
// const fs = require('fs');
// function greet (file) 
// {
//   return fs.existsSync(file);
// }
// console.log(greet("./notes.txt"));

//17//لسه ماوصلناش ليها


