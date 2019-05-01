const fs = require('fs');

var moduleReference = {};

moduleReference.testMethod = () => {
    console.log('\nWelcome to my scaffolding mechanism! You may create two type of projects:\n');
    console.log('node build-me-a-new-html-one -in any-desired-folder-name" to build a simple web project \n"node build-me-a-bootstrap-one -in any-desired-folder-name" to build a little bit more complex project with bootstrap and jquery libraries imported.\n');
};

moduleReference.createSimpleWebProject = (handler, callback) => {
    var fileBuffer = fs.readFileSync('./projectsApi.json');
    var fileString = fileBuffer.toString();
    var responseObject = JSON.parse(fileString);
    callback(responseObject);
};

moduleReference.createBootstrapProject = (handler, callback) => {
    var fileBuffer = fs.readFileSync('./projectsApi.json');
    var fileString = fileBuffer.toString();
    var responseObject = JSON.parse(fileString);
    callback(responseObject);
};

moduleReference.createSimpleNodeProject = (handler, callback) => {
    var fileBuffer = fs.readFileSync('./projectsApi.json');
    var fileString = fileBuffer.toString();
    var responseObject = JSON.parse(fileString);
    callback(responseObject);
};

moduleReference.getInfoFromLibraries = (handler, callback) => {
    var fileBuffer = fs.readFileSync('./librariesApi.json');
    var fileString = fileBuffer.toString();
    var responseObject = JSON.parse(fileString);
    callback(responseObject);
};

module.exports = moduleReference;