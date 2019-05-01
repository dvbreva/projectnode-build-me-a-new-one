const fs = require('fs');
const testing = require('./testing/script');

var indexHtmlCode = fs.readFileSync('./templates/simple-node-project/nodeProjectIndex.txt').toString();
var indexStyleCode = fs.readFileSync('./templates/simple-node-project/nodeProjectStyle.txt').toString();
var indexScriptCode = fs.readFileSync('./templates/simple-node-project/nodeProjectScript.txt').toString();

testing.createSimpleNodeProject('project', (data) => {

    const inArgumentIndex = process.argv.indexOf('-in');
    var inArgumentContent = '_system_download_';
    if (process.argv.indexOf('-in') != '-1') {
        inArgumentContent = process.argv[inArgumentIndex + 1];
    }

    // creating a folder named with the "id" of the project
    fs.mkdirSync(`${inArgumentContent}/${data[2].id}`, {
        recursive: true
    });

    // adding files to it 
    fs.writeFile(`${inArgumentContent}/${data[2].id}/script.js`, ' ', function (err) {
        if (err) throw err;
        console.log('Added the js file successfully.');
    });

    fs.writeFile(`${inArgumentContent}/${data[2].id}/index.js`, indexScriptCode, function (err) {
        if (err) throw err;
        console.log('Added the the node code for server successfully. Please run index.js file :)');
    });

    fs.writeFile(`${inArgumentContent}/${data[2].id}/index.html`, indexHtmlCode, function (err) {
        if (err) throw err;
        console.log('Added the the index html file successfully.');
    });

    fs.writeFile(`${inArgumentContent}/${data[2].id}/style.css`, indexStyleCode, function (err) {
        if (err) throw err;
        console.log('Added the css file successfully.');
    });

});