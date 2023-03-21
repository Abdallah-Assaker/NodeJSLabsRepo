const fs = require("fs");
const readline = require("readline")

//2-
// rl= readline.createInterface({
//     input : fs.createReadStream("./filetToRead.txt"),
//     // crlfDelay: Infinity
// });

// rl.on("line", (line) => console.log(line + "\n =========="))

////////////////////////
//3- 
// fs.rename("newWelcomrFile.txt" , "greet.txt",  (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else
//     {
//     console.log("File Renamed");
//     }
// } ) ;

//////////////////
//4-
 // fs.unlink("./greet.txt", (err) => {
//     if (err) {
//         console.log(err);
//     }    
//     else
//     {
//     console.log("File Deleted");
//     }
// })

//////////////////
//5-
 // var writer = fs.createWriteStream("./newWelcomrFile.txt", "utf-8")
// var reader = fs.createReadStream("./data.json", "utf-8");

// reader.on("data", (data)=> {
//     name = JSON.parse(data).name;
//     writer.write(`Hello ${name}`);
// });

//--
// var reader = fs.readFileSync("./data.json", "utf-8");
// console.log(reader);

//--
// var reader = fs.readFile("./data.json", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

///////////////
// 6-
// if (!fs.existsSync("./NewDirFroMNode")) {
//     fs.mkdir()
//     fs.mkdir("./NewDirFroMNode", (err, path) => {
//         if (err) {
//             console.log(err);
//         }
//         else{
//             console.log(`Directory created in ${path}`);
//         }    
//     })
// }

