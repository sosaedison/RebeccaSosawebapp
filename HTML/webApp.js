let latest = 'https://api.openaq.org/v1/measurements?coordinates=';

var avg=0;

let measurements = 'https://api.openaq.org/v1/measurements';

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
        seenUnits: [],
        seenLocations: [],
        dataStuff:[],
        averages: [],

    }
});

function Clear() {
    var table = document.getElementById("map1_table");
    if(app.locations.length > 0)
        for (var d in app.locations)
            table.deleteRow(0);
    console.log("Clearing")


    app.locations = [];
    app.seenUnits = [];
    app.seenLocations = [];
    app.dataStuff = [];
}
function ParseResults(data) {
    
    Clear();
    //console.log(app.dataStuff.length);

    for(var p in data.results)
        app.locations.push(data.results[p].location);

    for(var d in data.results)
        if(!app.seenUnits.includes(data.results[d].unit))
            app.seenUnits.push(data.results[d].unit);


    // var end = data.results.length;

    for(var f in data.results)
        //var b = {location: data.results[f].location, value: data.results[f].value, unit: data.results[f].unit, seen: false};
        app.dataStuff.push({location: data.results[f].location, value: data.results[f].value, unit: data.results[f].unit, seen: false});
        //console.log(b)



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

    CalcAvg();
}
function seenLocation(location) {
    if (app.seenLocations.includes(location))
        return 1;
    app.seenLocations.push(location);
    return 0
}

function CalcAvg() {
    var count = 0;
    var curAvg =0;
    var curUnit, curLoc;
    for (var x in app.seenLocations) {
        curLoc = app.seenLocations[x];
        for (var i in app.seenUnits) {
            curUnit = app.seenUnits[i];
            for (var y in app.dataStuff) {
                var temp = app.dataStuff[y];
                // match = (app.dataStuff[y].location === temp.location) && (app.dataStuff[y].unit === temp.unit)
                if (app.dataStuff[y].location === temp.location){
                    if(app.dataStuff[y].unit === temp.unit) {
                        if (!app.dataStuff[y].seen) {
                            if(!temp.seen)
                                console.log(app.dataStuff[y].value + app.dataStuff[y].unit + ' ' + temp.value + temp.unit)
                                curAvg = curAvg + app.dataStuff[y].value;
                                temp.seen = true;
                                app.dataStuff[y].seen = true;
                                count = count + 1;
                        }
                    }
                }
            }
            MakePopUp(curAvg/count, curUnit,curLoc);
            curAvg =0;
            count = 0;
        }
    }
}

function makeMarkers(coord) {
    L.marker(coord).addTo(mymap)
}

function MakePopUp(value, unit, loc) {
    console.log(value + unit + loc)
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



