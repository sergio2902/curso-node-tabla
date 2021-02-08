const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.log(argv.base);

crearArchivo(argv.base, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));