// PACOTES
// conjunto de um ou mais módulos

let operacoes = require('./operacoes');
let areas = require('./areas');

module.exports = {...operacoes, ...areas};