//1
//const fs =  require('node:fs');
// const readstream = fs.createReadStream('./big.txt', 'utf-8');
// readstream.on('data', (chunk) => {
//     console.log(chunk);
// });

//2
//const fs =  require('node:fs');
// const readstream = fs.createReadStream('./source.txt');
// const writestream = fs.createWriteStream('./dest.txt');
// readstream.on('data', (chunk) => {
//     writestream.write(chunk);
// });

//3
// const fs =  require('node:fs');
// const zlip = require('node:zlib');
// const readstream = fs.createReadStream('data.txt');
// const writestream = fs.createWriteStream('data.gz');
// const gzip = zlip.createGzip();
// readstream.pipe(gzip).pipe(writestream);

//Part 2
// const http = require('node:http');
// const server = http.createServer((req, res) => {

//     if (req.method === 'POST' && req.url === '/users') {

//         let data = '';

//         req.on('data', (chunk) => {
//             data += chunk;
//         });

//         req.on('end', () => {
//             const parsedData = JSON.parse(data);
//             console.log(parsedData);

//             res.end(JSON.stringify({
//                 message: "User received",
//                 user: parsedData
//             }));
//         });
//     }
//     else if (req.method === 'GET' && req.url === '/users') {
//         res.end(JSON.stringify({
//             message: "Get all users"
//         }));
//     }

//     else {
//         res.end("Not Found");
//     }

// });
// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

//part 3
//1- event loop
//نظام بيخلي الكود يقوم بتنفيذ العمليات غير المتزامنة 
// بكفاءة عالية بالرغم أنه يعمل  (Single Thread)

//2- Libuv هي مكتبة برمجية مفتوحة المصدر مكتوبة بلغة C
//المحرك الأساسي للعمليات غير المتزامنة Asynchronous

//3- Node. js
// يعتمد في التعامل مع العمليات غير المتزامنة على  
// Event Queue - Callback Queue - event loop 

//4- Call Stack
// هو المكان الذي يتم تنفيذ الكود فيه
//Event Queue
//هو المكان الذ يتم فيه تخزين الكود الذي ينتظر تنفيذه بعد انتهاء العمليات  غير المتزامنة
//Event Loop
// يتم تنفيذ الكود الموجود في ال event queue

//5- Thread Pool هي مجموعة جاهزة للتشغيل ويمكن تعديلها
//$env UV_THREADPOOL_SIZE=6

//6-
//Blocking: يوقف البرنامج 
//Non-blocking: يكمل بدون توقف 