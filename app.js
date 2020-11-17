const argv = require('./config/yargs').argv;
const colors = require('colors');

// const multiplicate = require('./multiplicate/multiplicate');
const { fileCreate, listTable } = require('./multiplicate/multiplicate');
//let argv2 = process.argv;

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit)
            .then((data) => console.log(data))
            .catch(err => console.log(err));
        break;

    case 'create':
        fileCreate(argv.base, argv.limit)
            .then((file) => console.log('Archivo creado: ' + `${file}`.green))
            .catch(err => console.log(err));
        break;

    default:
        console.log('undefined command');
}