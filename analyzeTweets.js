const api = "https://covid19.mathdro.id/api/countries";
//const Twitter = require('twitter');
const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const cases = document.querySelector(".cases");
const recovered = document.querySelector(".recovered");
const deaths = document.querySelector(".deaths");
const results = document.querySelector(".result-container");
results.style.display = "none";
loading.style.display = "none";
errors.textContent = "";
// grab the form
const form = document.querySelector(".form-data");
// grab the country name
const country = document.querySelector(".country-name");
var twitterName = "Can't get Twitter @";
//getTwitterName();
var allTweetsConcat = "";
var data = "";
var analyzedData = "";










// declare a method to search by country name
const searchForCountry = async username => {
//drawChart();
  twitterName = document.getElementById("username").value;
  loading.style.display = "block";
  errors.textContent = "";
  try {
    
   /*

  */

// GET TWITTER ID
 var twitterIDOptions = {
  method: 'GET',
  url: 'https://twitter32.p.rapidapi.com/getUserId',
  params: {username: twitterName},
  headers: {
    'x-rapidapi-key': 'REMOVED',
    'x-rapidapi-host': 'REMOVED'
  }
};
console.log(twitterIDOptions.params)
axios.request(twitterIDOptions).then(function (response) {
  console.log(response.data.data.id);
  twitterName = response.data.data.id;
  getTweets();
}).catch(function (error) {
  console.error(error);
});

// END OF GET TWITTER ID

// Get Tweets BEGIN

// Get Tweets END



      
   
  } catch (error) {
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent = "We have no data for the country you have requested.";
  }
 // 
};


const getTweets = async() => {
  console.log("Twitter id from new function: " + twitterName);
  try {

    var options = {
      method: 'GET',
      url: 'https://twitter32.p.rapidapi.com/getTweets',
      params: {user_id: twitterName},
      headers: {
        'x-rapidapi-key': 'REMOVED',
        'x-rapidapi-host': 'REMOVED'
      }
    };
    
    await axios.request(options).then(function (response) {
     // tweets = JSON.stringify(response.data.data.tweets);
      data = response.data.data.tweets;
      console.log(data);

      
    }).catch(function (error) {
      console.error(error);
    });
  
    loading.style.display = "none";

    var stringOfAll = "";
    console.log(data);
    var keys = Object.keys(data);
    console.log(keys);
    for(var x = 0; x < keys.length; x++) {
      stringOfAll = stringOfAll +". " + data[keys[x]]['full_text'];
      //data.keys[x].full_text;
    }

    allTweetsConcat = stringOfAll;
  
    cases.textContent = "Twinfoing...";
   // recovered.textContent = response.data.recovered.value;
   // deaths.textContent = response.data.deaths.value;
  
  
    results.style.display = "block";
  } catch (error) {
    console.log(error);
  }
  analyseTweets();
}

const analyseTweets = async() => {
  
  const textOptions = {
    method: 'GET',
    url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
    params: {
      text: allTweetsConcat
    },
    headers: {
      'x-rapidapi-key': 'REMOVED',
      'x-rapidapi-host': 'REMOVED'
    }
  };

  axios.request(textOptions).then(function (response) {
    //console.log(JSON.stringify(response.data.emotion_scores));
    var keys = Object.keys(response.data.emotion_scores);
    for(var x = 0; x < keys.length; x++) {
      if(response.data.emotion_scores[keys[x]] != 0){
      //analyzedData = analyzedData + keys[x] + ": " + response.data.emotion_scores[keys[x]] * 10 + " Score\n";
      analyzedData = analyzedData + '\n' + `\n
      ${keys[x]}: ${(response.data.emotion_scores[keys[x]]*100).toFixed(1)} Score`
      }
    }

    cases.textContent = analyzedData;

  }).catch(function (error) {
    console.error(error);
  });

}

function getTwitterName(){
  chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
  function(tabs){
    var url = tabs[0].url;
    twitterName = url.split("/")[3];
  }
);
}




//Graphs Begin
google.charts.load('current', {'packages':['corechart']});

function drawChart(){
    console.log(analyzedData);
    var searchOne = document.getElementById("srch-term");

    var theGraph = google.visualization.arrayToDataTable([
        ['Mood', 'Percentage'],
        ['Stressed', 2],
        ['Excited', 3],

    ]);

    var formattedData = [];
    var emotions = analyzedData.split("Score");
    formattedData.push(['Mood', 'Score']);
    for(var x = 0; x < emotions.length -1; x++) {
        var tempArray = [];
        tempArray.push((emotions[x].split(":")[0]).split(/\s/).join(''));
        tempArray.push(parseFloat((emotions[x].split(":")[1]).split(/\s/).join('')));
        formattedData.push(tempArray);
    }
    console.log(formattedData);

    var realGraph = google.visualization.arrayToDataTable(formattedData);


    var userOneOptions = {'title':'User breakdown', 'width':550, 'height':400};

    var userOne = new google.visualization.PieChart(document.getElementById('userChart'));
    userOne.draw(realGraph,userOneOptions);
}

//Graph ENDS