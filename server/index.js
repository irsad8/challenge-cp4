// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const port = 3000

// const typeFile = {
//     ".html": "text/html",
//     ".css": "text/css",
//     ".js": "text/javascript",
//     ".png": "image/png",
//     ".jpg": "image/jpeg",
//     ".jpeg": "image/jpeg",
//     ".gif": "image/gif",
//     ".ico": "image/x-icon",
//     ".json": "application/json",
//     ".svg": "image/svg+xml",
//     ".txt": "text/plain",
//     ".xml": "text/xml",
// }

// http.createServer((req, res) => {
//     let asset = ""
//     if (req.url.match(/\./)) {
//         asset = req.url
//     }

//     switch (req.url) {
//         case "/":
//             req.url = "index.html"
//             break;
//         case "/latihan":
//             req.url = "latihan.html"
//             break;
//         case asset:
//             break;
//         default:
//             req.url = "404.html"
//             break;
//     }
//     extname = path.extname(req.url)

//     let file = "../public/" + req.url;
//     // if (extname == ".html") {
//     //     file = "../public/" + req.url;
//     // } else if (extname == ".css") {
//     //     file = "../public/" + req.url;
//     // } else if (extname == ".js") {
//     //     file = "../public/" + req.url;
//     // } else if (extname == ".png" || ".jpg" || ".jpeg" || ".gif") {
//     //     file = "../public/" + req.url;
//     // }
//     console.log(file)
//     console.log(extname)
//     console.log(typeFile[extname])
//     fs.readFile(file, (err, data) => {
//         res.writeHead(200, { "Content-Type": typeFile[extname] });
//         res.end(data)
//     })
// })
//     .listen(port, 'localhost', () => {
//         console.log(`server sudah berjalan pada port ${port} dengan url http://localhost:${port}`)
//     })


const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const typeFile = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".txt": "text/plain",
    ".xml": "text/xml",
};

http.createServer((req, res) => {
    let filePath = "../public" + req.url;
    let extname = path.extname(filePath);
    let contentType = typeFile[extname] || "application/octet-stream";
    console.log(req.url)
    console.log(filePath)
    console.log(extname)
    console.log(contentType)
    if (extname && fs.existsSync(filePath)) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": contentType });
                res.end(data);
            }
        });
    } else {
        switch (req.url) {
            case "/":
                filePath = "../public/index.html";
                break;
            case "/cars":
                filePath = "../public/cars.html";
                break;
            default:
                filePath = "../public/index.example.html";
                break;
        }

        console.log(filePath)

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }
}).listen(port, 'localhost', () => {
    console.log(`Server sudah berjalan pada port ${port}`);
});
