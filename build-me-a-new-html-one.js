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

    fs.mkdirSync(`${inArgumentContent}/${data[0].id}`, {
        recursive: true
    });

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




/*
    //taka pravq 2te papki koito mi se kazvat s id-to
    for (var element in data) {
        fs.mkdirSync(`html/${data[element].id}`, {
            recursive: true
        });
    }

    // taka mi se suzdavat file-ovete v papkite
    for(var item in data) {
        fs.writeFile(`html/${data[item].id}/script.js`, ' ', function (err) {
            if (err) throw err;
            console.log('Saved the js file!');
        });

        fs.writeFile(`html/${data[item].id}/index.html`, ' some html code ', function (err) {
            if (err) throw err;
            console.log('Saved the html file!');
        });

        fs.writeFile(`html/${data[item].id}/style.css`, ' some css code here ', function (err) {
            if (err) throw err;
            console.log('Saved the css file!');
        });
    }
    */
});