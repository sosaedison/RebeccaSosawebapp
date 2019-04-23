let latest = 'https://api.openaq.org/v1/measurements?coordinates=';

var avg=0;

let measurements = 'https://api.openaq.org/v1/measurements';
let latest = 'https://api.openaq.org/v1/latest?coordinates=';
let app;

let app = new Vue ({
     el: '#app',

    data: {
        lat: '',
        lng: '',
        coordinates: [],
        cities: [],
        country: [],
        locations: [],
        measurements: [],
        tableStuff: [],
    }
});




class LatLng {
    constructor(lat, lng){
        this.lat = lat;
        this.lng = lng;
    }
    toString() { return  'Latitude: ' +this.lat + ',' + 'Longitude: ' + this.lng; }
}


function GetResultsLatLng() {

    var latlng1 = L.latLng(mymap.getCenter().lat, mymap.getCenter().lng);
    var latlng2 = L.latLng(mymap.getBounds().getNorth(), mymap.getCenter().lng);

    let radius = mymap.distance(latlng1, latlng2);
    let limit = '&limit=10000';
    let prior = '&date_from=2019-3-18';
    let stuff = latest+ mymap.getCenter().lat + ',' + mymap.getCenter().lng +'&'+'radius=' + radius+limit+prior;
    // console.log(stuff);

    let request = {
        url: stuff,
        dataType: "json",
        success: ParseResults
    };
    $.ajax(request);

}

function MakeMarker(lat, lng) {
    var stuff = '['+lat +','+lng+']';
    L.marker(stuff).addTo(mymap);
}
function ParseResults(data) {

    app.tableStuff =[];
}
// set max and min zoom to 16 and 9
var app = new Vue{
    el = '#app',
    data: {
        coordinates: [],
        locations: [],
        tableStuff: [],
        seenLocations: [],
        dataStuff: [],
        seenUnits: [],
        avgData: []
    },
}

function Clear() {
    var table = document.getElementById("map1_table");
    for (var d in app.locations)
        table.deleteRow(0);

    app.locations = [];
}

    Clear();
    for(var p in data.results)
        app.locations.push(data.results[p].location);

    for(var d in data.results)
        if(!app.seenUnits.includes(data.results[d].unit))
            app.seenUnits.push(data.results[d].unit);

    for(var f in data.results)
        var b = {location: data.results[f].location, value: data.results[f].value, unit: data.results[f].unit};
        app.dataStuff.push(b);


    for (var y in data.results)
        makeTable(
            data.results[y].city,
            data.results[y].country,
            new LatLng(data.results[y].coordinates.latitude, data.results[y].coordinates.longitude).toString(),
            data.results[y].location,
            data.results[y].value + ' ' + data.results[y].unit
        );

    for(var t in data.results)
        if(!seenLocation(app.locations[t]))
            makeMarkers(L.latLng(data.results[t].coordinates.latitude,
                data.results[t].coordinates.longitude));

    for (var r in app.seenLocations)
        avg = 0;
        var loc =app.seenLocations[r];
        for(var a in app.seenUnits)
            var uni = app.seenUnits[a]
                for(var g in app.dataStuff)
                    var count = 0;
                    // if(app.dataStuff[g].location === loc && app.dataStuff[g].unit === uni)
                    //     avg += app.dataStuff[g].value;
}
function seenLocation(location) {
    if (app.seenLocations.includes(location))
        return 1;
    app.seenLocations.push(location);
    return 0
}
function makeMarkers(coord) {
    var temp = L.marker(coord);
    temp.bindPopup("")
}
function makeTable(city, country, coordinates, locations, values) {

    for (var p in data.results)
        app.tableStuff.push(data.results[p]);


    for (var y in data.results)
        makeTable(
            app.tableStuff[y].city,
            app.tableStuff[y].country,
            new LatLng(app.tableStuff[y].coordinates.latitude,app.tableStuff[y].coordinates.longitude).toString(),
            app.tableStuff[y].location,
            app.tableStuff[y].value+' '+app.tableStuff[y].unit );

    // for(var t in app.tableStuff)
    //     MakeMarker(app.tableStuff[t].coordinates.latitude, app.tableStuff[t].coordinates.longitude);
}

function makeTable(city, country, coordinates, locations, values) {

    let table = document.getElementById("map1_table");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = city;
    cell2.innerHTML = coordinates;
    cell3.innerHTML = country;
    cell4.innerHTML = locations;
    cell5.innerHTML = values;
}

/******************************
 *      MAP STUFF IS HERE     *
 * ****************************/
var mymap = L.map('map1',{minZoom:9, maxZoom: 16}).setView([44.9544, -93.0913], 9);
var mymap = L.map('map1',{maxZoom: 16, minZoom: 9}).setView([44.9544, -93.0913], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);
// var mymap = L.map('map1').setView([44.9544, -93.0913], 3);
//
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//     maxZoom: 18,
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
//         '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     id: 'mapbox.streets'
// }).addTo(mymap);

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



