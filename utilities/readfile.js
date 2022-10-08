const fs = require("fs");

async function readFiles (filename) {
    try {
        const data = await fs.promises.readFile(filename, "utf-8");
        console.log(data);
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = readFiles;