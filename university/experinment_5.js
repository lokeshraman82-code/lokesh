const fs = require('fs');
const http = require('http');


fs.writeFile('Demo5.txt', 'Doctor Strange, Master of Mystic Arts', (err) => {
    if (err) {
        console.log('Error while creating file:', err);
        return;
    }

    console.log('File created successfully');

    fs.readFile('Demo5.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error while reading file:', err);
            return;
        }

        console.log('File content:', data);
    });

   
    fs.appendFile(
        'Demo5.txt',
        '\nMultiverse of Madness.',
        (err) => {
            if (err) {
                console.log('Error while appending:', err);
                return;
            }

            console.log('Data appended successfully');
        }
    );
});


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Welcome to Node JS Web Applcation</title>
            </head>
            <body>
                <h1>Experment 5</h1>
                <p>Creatng file</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
