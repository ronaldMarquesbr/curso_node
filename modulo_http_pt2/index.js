const http = require('http');
const url= require('url-parse')

http.createServer((request, response) => {

    console.log(url(request.url));

}).listen(3000, err => {
    if(err){
        console.log(err);
    } else {
        console.log('servidor rodando na porta 3000')
    }  
})