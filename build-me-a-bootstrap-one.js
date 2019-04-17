const fs = require('fs');
const cp = require('child_process');
const testing = require('./testing/script');

var indexHtmlCode = fs.readFileSync('./templates/bootstrap-project/bootstrapProjectIndex.txt').toString();
var styleCssCode = fs.readFileSync('./templates/bootstrap-project/bootstrapProjectStyle.txt').toString();

testing.createBootstrapProject('project', (data) => {

    const inArgumentIndex = process.argv.indexOf('-in');
    var inArgumentContent = '_system_download_';
    if (process.argv.indexOf('-in') != '-1') {
        inArgumentContent = process.argv[inArgumentIndex + 1];
    }

    //first folder
    fs.mkdirSync(`${inArgumentContent}/${data[1].id}`, {
        recursive: true
    });


    //adding files to first folder
    fs.writeFile(`${inArgumentContent}/${data[1].id}/index.html`, indexHtmlCode, function (err) {
        if (err) throw err;
        console.log('Added the html file successfully.');
    });

    //second folder + bootstrap folder
    fs.mkdirSync(`${inArgumentContent}/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[1]}`, {
        recursive: true
    });

    //adding files to second folder
    fs.writeFile(`${inArgumentContent}/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[1]}/style.css`, styleCssCode, function (err) {
        if (err) throw err;
        console.log('Added the style file successfully.');
    });

    //third folder + jquery folder
    fs.mkdirSync(`${inArgumentContent}/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[2]}`, {
        recursive: true
    });

    //adding files to third folder
    fs.writeFile(`${inArgumentContent}/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[2]}/script.js`, ' some js code ', function (err) {
        if (err) throw err;
        console.log('Added the js file successfully.');
    });

});

testing.getInfoFromLibraries('project', (data2) => {

    const inArgumentIndex = process.argv.indexOf('-in');
    var inArgumentContent = '_system_download_';
    if (process.argv.indexOf('-in') != '-1') {
        inArgumentContent = process.argv[inArgumentIndex + 1];
    }

    //cloning the bootstrap and the jquery libraries' info
    cp.exec(`git clone ${data2[0].html_url} ${inArgumentContent}/bootstrap-project/style/${data2[0].name}`);
    cp.exec(`git clone ${data2[1].html_url} ${inArgumentContent}/bootstrap-project/scripts/${data2[1].name}`);


});