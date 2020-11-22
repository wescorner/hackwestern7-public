google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var chartChoice = document.getElementById("timeframe");

    var alltimeData = google.visualization.arrayToDataTable([
    ['Mood', 'Site Percentage'],
    ['Stressed', 8],
    ['Excited', 2],
    ['Happy', 4],
    ['Sad', 2],
    ['Angry', 8]
  ]);
  var oneyearData = google.visualization.arrayToDataTable([
    ['Mood', 'Site Percentage'],
    ['Stressed', 1],
    ['Excited', 2],
    ['Happy', 3],
    ['Sad', 4],
    ['Angry', 5]
  ]);
  var sixmonthData = google.visualization.arrayToDataTable([
    ['Mood', 'Site Percentage'],
    ['Stressed', 6],
    ['Excited', 4],
    ['Happy', 7],
    ['Sad', 9],
    ['Angry', 2]
  ]);
  var thirtydayData = google.visualization.arrayToDataTable([
    ['Mood', 'Site Percentage'],
    ['Stressed', 5],
    ['Excited', 4],
    ['Happy', 3],
    ['Sad', 2],
    ['Angry', 1]
  ]);
  var oneweekData = google.visualization.arrayToDataTable([
    ['Mood', 'Site Percentage'],
    ['Stressed', 9],
    ['Excited', 2],
    ['Happy', 4],
    ['Sad', 9],
    ['Angry', 8]
  ]);
  var currentData = google.visualization.arrayToDataTable([
    ['Mood', 'Site Percentage'],
    ['Stressed', 9],
    ['Excited', 2],
    ['Happy', 3],
    ['Sad', 1],
    ['Angry', 9]
  ]);
    
  //sets title as well as width and height of the chart
    var alltimeOptions = {'title':'All time twitter breakdown', 'width':550, 'height':400};
    var oneyearOptions = {'title':'One Year twitter breakdown', 'width':550, 'height':400};
    var sixmonthOptions = {'title':'Six Month twitter breakdown', 'width':550, 'height':400};
    var thirtydayOptions = {'title':'Thirty Day twitter breakdown', 'width':550, 'height':400};
    var oneweekOptions = {'title':'One Week twitter breakdown', 'width':550, 'height':400};
    var currentOptions = {'title':'Current twitter breakdown', 'width':550, 'height':400};
    
    // displays the chart
    var twitchart = new google.visualization.PieChart(document.getElementById('twitchart'));

    //drawing the chart
    if (chartChoice.value === "alltime"){
        twitchart.draw(alltimeData,alltimeOptions);
    } else if (chartChoice.value === "oneyear"){
        twitchart.draw(oneyearData,oneyearOptions);
    } else if (chartChoice.value === "sixmonth"){
        twitchart.draw(sixmonthData,sixmonthOptions);
    } else if (chartChoice.value === "thirtyday"){
        twitchart.draw(thirtydayData,thirtydayOptions);
    } else if (chartChoice.value === "oneweek"){
        twitchart.draw(oneweekData,oneweekOptions);
    } else if (chartChoice.value === "current"){
        twitchart.draw(currentData,currentOptions);
    }
  }