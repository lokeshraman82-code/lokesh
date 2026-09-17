const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <html>
            <head>
                <title>home page</title>
            </head>
            <body>
                <h1>welcome to home page</h1>
            </body>
            </html>
        `);
    } else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <html>
            <body>
                <h1>welcome to about page</h1>
            </body>
            </html>
        `);
    } else if (req.url === "/api" && req.method === "GET") {
        // Converted this into a proper array of student objects
        const students = [
            { name: "robin", course: "node.js", sem: 5 },
            { name: "siva", course: "node.js",sem:6 } 
        ];
        
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(students));
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <html>
            <body>
                <h1>page not found</h1>
            </body>
            </html>
        `);
    }
}); // Corrected closing bracket and parenthesis for createServer

server.listen(3001, () => {
    console.log("server is running at http://localhost:3001");
});
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <html>
            <head>
                <title>home page</title>
            </head>
            <body>
                <h1>welcome to home page</h1>
            </body>
            </html>
        `);
    } else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <html>
            <body>
                <h1>welcome to about page</h1>
            </body>
            </html>
        `);
    } else if (req.url === "/api" && req.method === "GET") {
        // Converted this into a proper array of student objects
        const students = [
            { name: "robin", course: "node.js", sem: 5 },
            { name: "siva", course: "node.js",sem:6 } 
        ];
        
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(students));
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <html>
            <body>
                <h1>page not found</h1>
            </body>
            </html>
        `);
    }
}); // Corrected closing bracket and parenthesis for createServer

server.listen(3002, () => {
    console.log("server is running at http://localhost:3002");
});
