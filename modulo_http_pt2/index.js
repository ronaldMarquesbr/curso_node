const http = require('http');
const url= require('url-parse');
const fs = require('fs');

http.createServer((request, response) => {

    let path = url(request.url).pathname;
    

    if(path == '' || path == '/'){
        path = '/index.html';
    };

    let fileName = '.' + path;
    
    fs.readFile(fileName, (err, data) => {

        if(err){
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('Página não encontrada');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        }

    })

}).listen(3000, err => {
    if(err){
        console.log(err);
    } else {
        console.log('servidor rodando na porta 3000')
    }  
})