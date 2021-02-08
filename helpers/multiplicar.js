const fs = require('fs');

const crearArchivo = async(base = 1, l) => {

    try {
        let salida = '';

        for (let i = 0; i <= 10; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }
        if (l) {
            console.log(salida);
        }


        fs.writeFileSync(`tabla del ${base}.txt`, salida);

        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }


}
module.exports = {
    crearArchivo
}