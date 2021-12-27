const request = require("request")
const cheerio = require("cheerio");

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard"

request(url,callBack)

function callBack(error,response,html) {
  if(error) {
      console.error(error);
  } else {
      handleHTML(html);
  }
}

function handleHTML(html) {
   
    let $ = cheerio.load(html);
    let teams = $(".match-header .event .match-info.match-info-MATCH.match-info-MATCH-half-width .teams .team .name-detail p");

    let winningTeam = $(teams[1]).text();

    console.log(winningTeam);

    //Other way for finding winning team
    // for(let i=0;i<teams.length;i++) {
    //     let hasClass = $(teams[i]).hasClass("team-gray");
    //     if(hasClass == false) {
    //         //winning team
    //         let teamNameElem = $(teams[i]).find(".name");
    //         console.log(teamNameElem.text())
    //     }
    // }

    let inningsArr = $(".card.content-block.match-scorecard-table >.Collapsible"); 

    // let htmlStr = "";

    for(let i=0;i<inningsArr.length;i++) {
        // let cHTML = $(inningsArr[i]).html();
        // htmlStr += cHTML;

        //inningsArr size will be 2 and it will contain 2 tables onr for each inning
        //Kings XI innings -> Kings XI batting, Chennai Super Kings bowling
        
        let teamNameElem = $(inningsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();

        if(teamName == winningTeam) {
            let bowlingTableElem = $(inningsArr[i]).find(".table.bowler");
                
        }
        // console.log(teamName)
    }

    // console.log(htmlStr);
    

}

