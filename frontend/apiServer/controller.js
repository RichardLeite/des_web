const fs = require('fs');
const path = require('path');

const { PATH_ROOT = process.env.PWD } = process.env

console.log(path.join(PATH_ROOT, 'config.json'))

module.exports = (req, res) => {

}
