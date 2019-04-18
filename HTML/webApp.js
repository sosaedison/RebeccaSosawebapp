let measurements = 'https://api.openaq.org/v1/measurements';
let latest = 'https://api.openaq.org/v1/latest?coordinates=';

class LatLng {
    constructor(lat, lng){
        this.lat = lat.toFixed(3);
        this.lng = lng.toFixed(3);
    }
    toString() {
        let string = this.lat + ',' + this.lng;
        //console.log(string);
        return string;
    }
}

// set max and min zoom to 16 and 9
var app = new Vue ({

    el: '#app',

    data: {
        reqResults: [],
        coordinates: [],
        cityNames: [],
        AQ: [],
        country: [],
        locations: []
    }
});

function GetResultsLatLng() {

    var latlng1 = L.latLng(mymap.getCenter().lat, mymap.getCenter().lng);
    var latlng2 = L.latLng(mymap.getBounds().getNorthEast().lat, mymap.getBounds().getNorthEast().lng);

    let radius = mymap.distance(latlng1, latlng2);

    let stuff = latest+ mymap.getCenter().lat + ',' + mymap.getCenter().lng +'&'+'radius=' + radius;
    console.log(stuff);

    let request = {
        url: stuff,
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
        i++;
        if (i === 1)
            app.reqResults = data[k];

    for (x in app.reqResults)
        var temp = new LatLng(app.reqResults[x].coordinates.latitude,
            app.reqResults[x].coordinates.longitude).toString();
        app.coordinates.push(temp);

    for (x in app.reqResults)
        app.AQ.push(app.reqResults[x].measurements.value);

    for(x in app.reqResults)
        app.cityNames.push(app.reqResults[x].city);

    for(x in app.reqResults)
        app.locations.push(app.reqResults[x].location);

    for(x in app.reqResults)
        app.country.push(app.reqResults[x].country);


    for (f = 0; f<app.cityNames.length;f++)
        myCreateFunction(app.cityNames[f], app.country[f], app.coordinates[f], app.locations[f], app.AQ[f])
    console.log('hi')
}

function myCreateFunction(city, country, coordinates, locations, values) {
    let table = document.getElementById("map1_table");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = city;
    cell2.innerHTML = country;
    cell3.innerHTML = coordinates;
    cell4.innerHTML = locations;
    cell5.innerHTML = values;
    console.log('hi')
}

/******************************
 *      MAP STUFF IS HERE     *
 * ****************************/
var mymap = L.map('map1').setView([44.9544, -93.0913], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

// var marker = L.marker([51.5, -0.09]).addTo(mymap);
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#ea40ff',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);
//
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
// var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);

// var popup = L.popup();

function onMove(){
    GetResultsLatLng();
}
function timeOut(){
    setTimeout(onMove, 2000)
}
mymap.on('mouseup', timeOut);
mymap.on('zoomend', timeOut);



