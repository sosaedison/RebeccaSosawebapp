let countries = "https://api.openaq.org/v1/countries";
let cities = 'https://api.openaq.org/v1/cities?limit=1000';
let fetches = 'https://api.openaq.org/v1/fetches';

var app = new Vue ({

    el: '#app',

    data: {
        map : 'Hello World',
        cityNames: [],
        count: [],
        country: [],
        locations: []
    }
});

function Init() {
    /*var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if(req.readyState === 4 && req.status === 200) {
            let retStuff = req.responseText;
            console.log(JSON.stringify(retStuff));
            console.log(retStuff[10]);
        }

    };
    req.open("GET",cities, true);
    req.send(); */

    let request = {
        url: cities,
        dataType: "json",
        success: ParseResults
    };
    $.ajax(request);

}

function toString(data) {
    console.log(data.results.length)
}

function ParseResults(data) {
    var i=0;
    for (i = 0; i < data.results.length; i++)
        var result = data.results[i];
        PopulateTable(result.city, result.count, result.country, result.locations);
}

function PopulateTable(city, count, country, locations) {
    let table = document.getElementById("map1_table");
    var table_row = document.createElement("tr");
    var table_data = document.createElement("td");
    var stuff = document.createTextNode(city);

    table_data.append(stuff);
    table_row.append(table_data);
    table.append(table_row);
}



