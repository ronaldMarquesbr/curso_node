let fs = require('fs');  // fs : file system

// criar um arquivo para escrever

// parâmetros:
// 1 - nome do arquivo
// 2 - conteudo
// 3 - callback -> confirmação


// fs.writeFile('teste.txt', 'Hello World', err => {
//     if(err){
//         throw err;
//     };

//     console.log("arquivo criado com sucesso!");

// })


// concatenar, caso exista o arquivo
// fs.appendFile('teste.txt', '- Olá Mundo', err => {
//     if(err){
//         throw err;
//     };

//     console.log("arquivo editado com sucesso!");

// })


// REMOVER ARQUIVO
// fs.unlink('teste.txt', err => {

//     if (err) {

//         throw err;

//     }

//     console.log('Arquivo deletado com sucesso!');

// });


// RENOMEAR UM ARQUIVO
// fs.rename('teste.txt', 'novoNome.txt', err => {
//     if(err){
//         throw err;
//     };

//     console.log("arquivo renomeado com sucesso!");

// })

// fs.readFile('novoNome.txt','UTF8', (err, data) => {
//     if(err){
//         throw err;
//     };

//     console.log(data);

// })
