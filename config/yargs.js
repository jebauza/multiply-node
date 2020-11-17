const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'Print in console the multiplication table', options)
    .command('create', 'Make a file with multiplication table', options)
    .help()
    .argv;

module.exports = {
    argv
};