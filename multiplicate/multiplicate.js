const fs = require('fs');

let fileCreate = (base, limit) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limit)) {
            !Number(base) ? reject(`Base: "${base}" isn't a number`) : reject(`limit: "${limit}" isn't a number`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

let listTable = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limit)) {
            !Number(base) ? reject(`Base: "${base}" isn't a number`) : reject(`limit: "${limit}" isn't a number`);
            return;
        }

        let data = '';

        console.log('===================='.green);
        console.log(`Tabla de ${ base }`.green);
        console.log('===================='.green);

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
}

module.exports = {
    fileCreate,
    listTable
};