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

function GetResults() {
    let request = {
        url: cities,
        dataType: "json",
        success: ParseResults
    };
    $.ajax(request);

}

function ParseResults(data) {

    var i = 0;
    var x;
    let f;
    for(var k in data)
        console.log(data);
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
var mymap = L.map('map1').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#ea40ff',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

// function onMouseUp(e) {
//     mymap.panTo([51.498827, -0.22645]);
// }

mymap.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    //alert("You clicked the map at " + e.latlng);

    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
    // let LATLNG = e.latlng;
    // console.log(LATLNG.lat);
    // console.log(LATLNG.lng);
}

mymap.on('click', onMapClick);
