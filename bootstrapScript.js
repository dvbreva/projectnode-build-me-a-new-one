const fs = require('fs');
const cp = require('child_process');
const testing = require('./testing/script');


testing.createBootstrapProject('project', (data) => {

    //first folder
    fs.mkdirSync(`secondProject/${data[1].id}`, {
        recursive: true
    });


    //adding files to first folder
    fs.writeFile(`secondProject/${data[1].id}/index.html`, ' some html code ', function (err) {
        if (err) throw err;
        console.log('Saved the html file!');
    });

    //second folder + bootstrap folder
    fs.mkdirSync(`secondProject/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[1]}`, {
        recursive: true
    });

  /*  fs.mkdirSync(`secondProject/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[1]}/${data[1]['files']['style'][0]}`, {
        recursive: true
    }); */

    //adding files to second folder
    fs.writeFile(`secondProject/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[1]}/style.css`, ' some style code ', function (err) {
        if (err) throw err;
        console.log('Saved the style file!');
    });



    //third folder + jquery folder
    fs.mkdirSync(`secondProject/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[2]}`, {
        recursive: true
    });

    /*
    fs.mkdirSync(`secondProject/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[2]}/${data[1]['files']['scripts'][0]}`, {
        recursive: true
    });
    */

    //adding files to third folder
    fs.writeFile(`secondProject/${data[1].id}/${(Object.getOwnPropertyNames(data[1]['files']))[2]}/script.js`, ' some js code ', function (err) {
        if (err) throw err;
        console.log('Saved the js file!');
    });

});

testing.getInfoForLibraries('project', (data2) => {

    //adding folder for bootstrap library and files 
  
        //  fs.mkdirSync(`projects/${data[element].name}`, {recursive:true});
        cp.exec(`git clone ${data2[0].html_url} secondProject/bootstrap-project/style/${data2[0].name}`);
        cp.exec(`git clone ${data2[1].html_url} secondProject/bootstrap-project/scripts/${data2[1].name}`);
    

});