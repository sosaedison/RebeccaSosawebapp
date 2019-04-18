let measurements = 'https://api.openaq.org/v1/measurements';
let latest = 'https://api.openaq.org/v1/latest?coordinates=';

class LatLng {
    constructor(lat, lng){
        this.lat = lat.toFixed(3);
        this.lng = lng.toFixed(3);
    }
    toString() { return  'Latitude: ' +this.lat + ',' + 'Longitude: ' + this.lng; }
}


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
// set max and min zoom to 16 and 9
var app = new Vue ({

    el: '#app',

    data: {
        reqResults: [],
        coordinates: [],
        cities: [],
        values: [],
        country: [],
        locations: []
    }
});

function ParseResults(data) {

    // console.log(data.results,length)
    let len = data.results.length;
    // console.log(len)
    for ( var p in data.results)
        console.log(data.results[p].city +data.results[p].country)
        app.cities.push(data.results[p].city);

        //console.log('country ' +data.results[p].country);

        // app.cities.push(data.results[p].city);
        // //console.log(p)
        // //console.log( data.results[p]+data.results[p].coordinates.latitude )
        // //var temp = new LatLng(data.results[p].coordinates.latitude, data.resultsp[p].coordinates.longitude).toString();
        // //app.coordinates.push(temp);
        //
        //
        //
        // app.locations.push(data.results[p].location);
        //
        // for (let x in data.results.measurements)
        //     var values = data.results[s].measurements[x].value + ' ' +data.results[p].measurements[x].unit;
        //     app.values.push(values);
        //
        // myCreateFunction(
        //     app.cities[p],
        //     app.country[p],
        //     app.coordinates[p],
        //     app.locations[p],
        //     app.values[p]
        // );
        // // s++;
        // // console.log(s);
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
}

/******************************
 *      MAP STUFF IS HERE     *
 * ****************************/
var mymap = L.map('map1').setView([44.9544, -93.0913], 6);

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



