// npm install request
// mkdir data

var request = require('request');
var fs = require('fs');
var pages = [
    "https://parsons.nyc/aa/m01.html",
    "https://parsons.nyc/aa/m02.html",
    "https://parsons.nyc/aa/m03.html",
    "https://parsons.nyc/aa/m04.html",
    "https://parsons.nyc/aa/m05.html",
    "https://parsons.nyc/aa/m06.html", 
    "https://parsons.nyc/aa/m07.html",
    "https://parsons.nyc/aa/m08.html",
    "https://parsons.nyc/aa/m09.html",
    "https://parsons.nyc/aa/m10.html",
];


pages.forEach(getFile);

function getFile(item) {
    let file = item.replace("https://parsons.nyc/aa/", "").replace(".html", "");
    request(item, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            fs.writeFileSync(file + ".txt", body);
            console.log("Just wrote file from " + item);
        }
        else {
            console.log("Request failed!");
        }
    });
}