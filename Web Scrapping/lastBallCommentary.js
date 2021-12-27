const request = require('request');
const cheerio = require('cheerio');

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

request(url,callBack);

function callBack(error,response,html) {
    if(error) {
        console.error(error);
    } else {
        handleHTML(html);
    }
}

function handleHTML(html) {

    let selectorTool = cheerio.load(html);
    //This was an array of 17 elements because 17 was the size of initial loading
    //One drawback is that we can scrap only initially loaded data
    //Like we scapped last ball commentary but we cannot scrap first ball commentary
    //For that we will need automation
    let commentary = selectorTool(".d-flex.match-comment-padder.align-items-center .col-14.col-md-15.col-lg-14 div[style = 'padding-right:16px'] .match-comment-wrapper .match-comment-long-text")

    let lastBallCommentary = selectorTool(commentary[0]).text();
    console.log(lastBallCommentary);
}