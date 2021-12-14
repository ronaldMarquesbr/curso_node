function area_triangulo(b, h){

    return (b * h) / 2 ;

}


function area_circunf(raio){

    return 3.14 * 2 * raio;

}

module.exports.area_triangulo = area_triangulo;
module.exports.area_circunf = area_circunf;