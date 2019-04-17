const fs = require('fs');
const testing = require('./testing/script');

var indexHtmlCode = fs.readFileSync('./templates/simple-web-project/htmlProjectIndex.txt').toString();
var indexStyleCode = fs.readFileSync('./templates/simple-web-project/htmlProjectStyle.txt').toString();

testing.createSimpleWebProject('project', (data) => {

    const inArgumentIndex = process.argv.indexOf('-in');
    var inArgumentContent = '_system_download_';
    if (process.argv.indexOf('-in') != '-1') {
        inArgumentContent = process.argv[inArgumentIndex + 1];
    }

    // creating a folder named with the "id" of the project
    fs.mkdirSync(`${inArgumentContent}/${data[0].id}`, {
        recursive: true
    });

    // adding files to it 
    fs.writeFile(`${inArgumentContent}/${data[0].id}/script.js`, ' ', function (err) {
        if (err) throw err;
        console.log('Added the js file successfully.');
    });

    fs.writeFile(`${inArgumentContent}/${data[0].id}/index.html`, indexHtmlCode, function (err) {
        if (err) throw err;
        console.log('Added the the index html file successfully.');
    });

    fs.writeFile(`${inArgumentContent}/${data[0].id}/style.css`, indexStyleCode, function (err) {
        if (err) throw err;
        console.log('Added the css file successfully.');
    });

});