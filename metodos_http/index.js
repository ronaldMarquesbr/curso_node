//Metodos http
// protocolo http: conj. de regras -> definem como devemos fazer nossas paginas para internet 
// metodos:GET: ler um dado(ex: arq. html do servidor); POST; PUT; DELETE
// POST: usar quando quisermos mandar um dado para o servidor
//PUT: requisição usada para mandar dado para o servidor atualizando-o caso existente
// DELETE: apagar um dado de acordo com um identificador

const http = require('http');
const url= require('url-parse');
const fs = require('fs');


function handleFile(req, res, callback){

    let path = url(req.url).pathname;
    let fileName = '.' + path;
    
    fs.readFile(fileName, (err, data) => {

        if(err){

            if(callback){

                if (!callback(req, res)) {

                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end('<h1>Página não encontrada</h1>');

                }

            }

        } else {

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();

        }

    });


};


function handleRequest(req, res){

    let path = url(req.url).pathname;
    
    let method = req.method;
    console.log(method);
    if(method == 'PUT'){

        res.writeHead(404, {'Content-Type': 'text/html'});

    }

    if(path == '/teste'){

        res.end('Teste');
        return true;

    } 

        return false;

};


http.createServer((request, response) => {

    handleFile(request, response, handleRequest);

}).listen(3000, err => {
    if(err){
        console.log(err);
    } else {
        console.log('servidor rodando na porta 3000')
    }  
})