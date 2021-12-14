let fs = require('fs');

let args = process.argv.slice(2);

let fileName = args[0];

fileName_noExtension = fileName.slice(0, (fileName.length - 4));

fs.readFile(fileName, 'UTF8', (err, data) => {

    if (err) throw err ;

    fs.writeFile(fileName_noExtension + '_Uppercase' + '.txt', data.toUpperCase(), error => {

        if(error){ throw error } ;

        console.log('Arquivo gerado com sucesso!');

    });

});
