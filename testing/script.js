const fs = require('fs');

var moduleReference = {};

moduleReference.testMethod = () => {
    console.log('hello from my test method okay');
    console.log('i finally made this work');
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

moduleReference.getInfoForLibraries = (handler, callback) => {
    var fileBuffer = fs.readFileSync('./librariesApi.json');
    var fileString = fileBuffer.toString();
    var responseObject = JSON.parse(fileString);
    callback(responseObject);
};

module.exports = moduleReference;