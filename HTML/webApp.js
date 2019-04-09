let countries = "https://api.openaq.org/v1/countries";
let cities = 'https://api.openaq.org/v1/cities?limit=1000';
let fetches = 'https://api.openaq.org/v1/fetches';

var app = new Vue ({

    el: '#app',

    data: {
        map : 'Hello World',
        reqResults: [],
        cityNames: [],
        count: [],
        country: [],
        locations: []
    }
});

function Init() {
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

    var i = 0;
    var x;
    let f;
    for(var k in data)
        i++;
        if (i === 1)
            app.reqResults = data[k];

    for (x in app.reqResults)
        app.count.push(app.reqResults[x].count);

    for(x in app.reqResults)
        app.cityNames.push(app.reqResults[x].city);

    for(x in app.reqResults)
        app.locations.push(app.reqResults[x].locations);

    for(x in app.reqResults)
        app.country.push(app.reqResults[x].country);

    for (f = 0; f<app.cityNames.length;f++)
        myCreateFunction(app.cityNames[f], app.country[f], app.count[f], app.locations[f])
}

function myCreateFunction(city, country, count, locations) {
    let table = document.getElementById("map1_table");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = city;
    cell2.innerHTML = country;
    cell3.innerHTML = count;
    cell4.innerHTML = locations;
}

