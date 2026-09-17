const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>Welcome to Node</h1> <h2>This page is Created using node.js </h2>",
    );
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Node.js server running at http://localhost:3000");
});