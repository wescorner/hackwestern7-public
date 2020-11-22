google.charts.load('current', {'packages':['corechart']});

function drawChart(){
    var searchOne = document.getElementById("srch-term");

    var data_realDonaldTrump = google.visualization.arrayToDataTable([
        ['Mood', 'Percentage'],
        ['Stressed', 2],
        ['Excited', 5],
        ['Happy', 6],
        ['Sad', 1],
        ['Angry', 8]
    ]);
    var data_NintendoAmerica = google.visualization.arrayToDataTable([
        ['Mood', 'Percentage'],
        ['Stressed', 1],
        ['Excited', 9],
        ['Happy', 8],
        ['Sad', 1],
        ['Angry', 1]
    ]);
    var data_loltyler1 = google.visualization.arrayToDataTable([
        ['Mood', 'Percentage'],
        ['Stressed', 2],
        ['Excited', 5],
        ['Happy', 9],
        ['Sad', 3],
        ['Angry', 9]
    ]);

    var data_JustinTrudeau = google.visualization.arrayToDataTable([
        ['Mood', 'Percentage'],
        ['Stressed', 3],
        ['Excited', 6],
        ['Happy', 9],
        ['Sad', 3],
        ['Angry', 4]
    ]);

    var data_elonmusk = google.visualization.arrayToDataTable([
        ['Mood', 'Percentage'],
        ['Stressed', 2],
        ['Excited', 8],
        ['Happy', 9],
        ['Sad', 4],
        ['Angry', 3]
    ]);

    var data_Alpharad = google.visualization.arrayToDataTable([
        ['Mood', 'Percentage'],
        ['Stressed', 5],
        ['Excited', 9],
        ['Happy', 9],
        ['Sad', 3],
        ['Angry', 5]
    ]);

    var data_Aatroxcarry = google.visualization.arrayToDataTable([
        ['Mood', 'Percentage'],
        ['Stressed', 6],
        ['Excited', 7],
        ['Happy', 8],
        ['Sad', 4],
        ['Angry', 8]
    ]);

    var userOneOptions = {'title':'User breakdown', 'width':550, 'height':400};

    var userOne = new google.visualization.PieChart(document.getElementById('userChart'));

    if (searchOne.value === ""){
        alert("Invalid search");
        return;
    }

    switch(searchOne.value){
        case "realDonaldTrump":
            userOne.draw(data_realDonaldTrump,userOneOptions);
            break;
        case "NintendoAmerica":
            userOne.draw(data_NintendoAmerica,userOneOptions);
            break;
        case "loltyler1":
            userOne.draw(data_loltyler1,userOneOptions);
            break;
        case "JustinTrudeau":
            userOne.draw(data_JustinTrudeau,userOneOptions);
            break;
        case "elonmusk":
            userOne.draw(data_elonmusk,userOneOptions);
            break;
        case "Alpharad":
            userOne.draw(data_Alpharad,userOneOptions);
            break;
        case "Aatroxcarry":
            userOne.draw(data_Aatroxcarry,userOneOptions);
            break;
    }

}