const fs = require('fs')

const inputTxt = fs.readFileSync('./info.txt', 'utf8') 
console.log(inputTxt)
