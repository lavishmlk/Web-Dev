const request = require("request")
const cheerio = require("cheerio");
// const chalk = require("chalk");
const colors = require('colors/safe')

console.log("Before");
request('https://www.worldometers.info/coronavirus',callBack);
console.log("After");

function callBack(error, response, html) {
    
    if(error) {
        console.error('error:', error); // Print the error if one occurred
    }
    else {
        handleHTML(html);
    }
    
}

function handleHTML(html) {

    let selectorTool = cheerio.load(html);
    let dataArr = selectorTool(".maincounter-number span");
    
    let totalCases =  selectorTool(dataArr[0]).text()
    let recovered =  selectorTool(dataArr[1]).text()
    let deaths =  selectorTool(dataArr[2]).text()
    console.log(colors.cyan("Total cases " + totalCases));
    console.log(colors.green("Recovered " + recovered));
    console.log(colors.red("Deaths" + deaths));
}