const fs = require('fs');
const cp = require('child_process');
const testing = require('./testing/script');

testing.testMethod();

/*
testing.createSimpleWebProject('project', (data) => {
    for (var element in data) {

        var typeOfProject = data[element].id;

        switch (typeOfProject) {
            case "sample-web-project":
                console.log("hi from web project");
                fs.mkdirSync(`projects/${data[element].id}`, {
                    recursive: true
                });
                
                fs.writeFile(`projects/${data[element].files[i]}/index.html`, ' some html code ', function (err) {
                    if (err) throw err;
                    console.log('Saved the html file!');
                });    
                break;
            case "bootstap-project":
                console.log("hi from bootstrap project");
                fs.mkdirSync(`projects/${data[element].id}`, {
                    recursive: true
                });
                break;
        }
    }
});
*/

/*
testing.createSimpleWebProject('project', (data) => {
    //taka pravq 2te papki koito mi se kazvat s id-to
    for (var element in data) {
        fs.mkdirSync(`projects/${data[element].id}`, {
            recursive: true
        });

        // taka mi se suzdavat file-ovete v papkite
        for (var item in element) {
            fs.writeFile(`projects/${data[item].files[item]._}/script.js`, ' ', function (err) {
                if (err) throw err;
                console.log('Saved the js file!');
            });

            fs.writeFile(`projects/${data[item].id}/index.html`, ' some html code ', function (err) {
                if (err) throw err;
                console.log('Saved the html file!');
            });

            fs.writeFile(`projects/${data[item].id}/style.css`, ' some css code here ', function (err) {
                if (err) throw err;
                console.log('Saved the css file!');
            });
        }
    }
});
*/


testing.createSimpleWebProject('project', (data) => {
    //taka pravq 2te papki koito mi se kazvat s id-to
    for (var element in data) {
        fs.mkdirSync(`${data[element].id}`, {
            recursive: true
        });
    }

    // taka mi se suzdavat file-ovete v papkite
    for(var item in data) {
        //  fs.writeFile(`projects/${data[item].id}/script.js`, ' ', function (err) {
        fs.writeFile(`${data[item].id}/script.js`, ' ', function (err) {
            if (err) throw err;
            console.log('Saved the js file!');
        });

        fs.writeFile(`${data[item].id}/index.html`, ' some html code ', function (err) {
            if (err) throw err;
            console.log('Saved the html file!');
        });

        fs.writeFile(`${data[item].id}/style.css`, ' some css code here ', function (err) {
            if (err) throw err;
            console.log('Saved the css file!');
        });
    }
});
