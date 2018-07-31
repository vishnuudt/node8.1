const express = require("express");
const _ = require("underscore");
const fs = require('fs');
const readline = require('readline');
const support = require('./support');
const http = require('http');
const websocket = require('./websockets');

const rl = readline.createInterface({
    input: fs.createReadStream('chuck.txt')
});

rl.on('line', (line) => {
    console.log(line);
    support.someone();
});



function readFilePromise(filename){
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}



/*

const readAllFiles = async () => {
    let myText = "";
    try{
        myText = await readFilePromise('1.txt');
        myText += await readFilePromise('2.txt');
        myText += await readFilePromise('3.txt');
        console.log(myText);
    }catch(err){
        console.error(`error is ${err.message}`);
    }
}
readAllFiles();

readFilePromise('1.txt').then((data) => {
    console.log(data);
    return readFilePromise('2.txt');
}).then((data) => {
    console.log(data);
    return readFilePromise('3.txt'); 
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


fs.readFile('1.txt', (err, data) => {
    if (err) throw(err);
    console.log(data);
    fs.readFile('2.txt', (err, data) => {
        if (err) throw(err);
        console.log(data);
        fs.readFile('3.txt', (err, data) => {
            if (err) throw(err);
            console.log(data);
            
        
        });
    
    });

});



http.get("http://www.google.com", (res) => {
    let body = "";

    res.on('data', (data) => {
        body += data;
        console.log("data" + data.length);
    });

    res.on('end', () => {
        console.log("end");
    });
});

var app = express();

let item = [];

app.get('/', function(req, res) {
    res.send("yeah got res");
    item.push(req);
    console.log(item);
});

app.listen(8080, function(){
    console.log("started");
});

var func = function(greeting){ this.name = this.name + "some1"; return greeting + ': ' + this.name };
let self = {name: 'moe'};
func = _.bind(func, self , 'hi');
console.log(self);
console.log(func());
console.log(self);

*/