let measurements = 'https://api.openaq.org/v1/measurements';
let latest = 'https://api.openaq.org/v1/latest?coordinates=';

 var limit = '&limit=10000';

               Mymap= L.map('map').setView([44.0234, -92.4629], 13);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 16,
                minZoom:9,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox.streets'
        }).addTo(Mymap);  
                               Mymap2= L.map('map2').setView([44.0234, -92.4629], 13);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 16,
                minZoom:9,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox.streets'
        }).addTo(Mymap2);  

function GetJSON(url, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            var data = JSON.parse(req.response);
            callback(data);
        }
    };
    req.open("GET", url, true);
    req.send();
}

        function pann2(data2) {
            Mymap2.panTo(new L.LatLng(data2.lat,data2.lon));
        }
                function pann1(data1) {
            Mymap.panTo(new L.LatLng(data1.lat,data1.lon));
        }

function buttonStuff(lat,lng)
    {
    var lat = document.getElementById("lat").value;
    var lon = document.getElementById("lon").value;
   
     var lat2 = document.getElementById("lat2").value;
    var lon2 = document.getElementById("lon2").value;
    var loc2 = document.getElementById("loc2").value;
    var loc1 = document.getElementById("loc").value;
   var url1= "https://nominatim.openstreetmap.org/search?q=" + loc1+ "&format=json&accept-language=en";
   var url2= "https://nominatim.openstreetmap.org/search?q=" + loc2+ "&format=json&accept-language=en";
    var data1;
    var data2;
    Mymap2.panTo(new L.LatLng(lat2, lon2));
    Mymap.panTo(new L.LatLng(lat, lon));
    var complete_count=0;
   // data1=[{"lat":lat,"lon":lon}];
    //data2=[{"lat":lat2,"lon":lon2}];

if((document.getElementById('loc2').value !== ""))
        {
    GetJSON(url2, function(data) {
        complete_count++;
        console.log(complete_count);
        data2 = data;
        if ((document.getElementById('loc').value !== "") && complete_count === 2) {
            pann2(data2[0]);
            pann1(data1[0]);
        }
                if((document.getElementById('loc').value === "" && complete_count === 1))
        {
            pann2(data2[0]);
        }
    });

}
if(document.getElementById('loc').value !== "" )
        {

     GetJSON(url1, function(data) {
        complete_count++;
         console.log(document.getElementById('loc').value);
        data1 = data;
        if ((document.getElementById('loc2').value !== "") && complete_count === 2) {
            pann1(data1[0]);
            pann2(data2[0]);
        }
        if((document.getElementById('loc2').value === "" && complete_count === 1))
        {
            pann1(data1[0]);
        }

    });
}

  
    }
function ParseResults(data) {

    var i = 0;
    var x;
    let f;
    for(var k in data)
        // console.log(data);
        i++;
        if (i === 1)
            app.reqResults = data[k];


    for (x in app.reqResults){
        var temp = new LatLng(app.reqResults[x].coordinates.latitude,
            app.reqResults[x].coordinates.longitude).toString();
        app.coordinates.push(temp);
    }
    for (x in app.reqResults)
        app.AQ.push(app.reqResults[x].measurements[x].value);

    for(x in app.reqResults)
        app.cityNames.push(app.reqResults[x].city);

    for(x in app.reqResults)
        app.locations.push(app.reqResults[x].location);

    for(x in app.reqResults)
        app.country.push(app.reqResults[x].country);

    for (f = 0; f<app.cityNames.length;f++)
        myCreateFunction(app.cityNames[f], app.country[f], app.coordinates[f], app.locations[f], app.AQ[f])
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

class LatLng {
    constructor(lat, lng){
        this.lat = lat.toFixed(3);
        this.lng = lng.toFixed(3);
    }
    toString() { return  'Latitude: ' +this.lat + ',' + 'Longitude: ' + this.lng; }
}


function GetResultsLatLng() {
    var date = new Date();

    console.log(date);

    var latlng1 = L.latLng(mymap.getCenter().lat, mymap.getCenter().lng);
    var latlng2 = L.latLng(mymap.getBounds().getNorth(), mymap.getCenter().lng);

    let radius = mymap.distance(latlng1, latlng2);
    let limit = '&limit=10000';
    let prior = '&date_from=2019-3-18';
    let stuff = latest+ mymap.getCenter().lat + ',' + mymap.getCenter().lng +'&'+'radius=' + radius+limit+prior;
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
        coordinates: [],
        cities: [],
        country: [],
        locations: [],
        measurements: []
    }
});

function CreateHeads() {
    let table = document.getElementById("map1_table");
    let city = table.createTHead();
    let location = table.createTHead();
    let coord = table.createTHead();
    let country = table.createTHead();
    let measurements = table.createTHead();
    let row1  = city.insertRow(0);
    let cell1 = city.insertRow(0);
    cell1.innerHTML= 'City';
    let row2 = location.insertRow(3);
    let cell2 = location.insertRow(3);
    cell2.innerHTML='Location';
    let row3  = country.insertRow(1);
    let cell3 = country.insertRow(1);
    cell3.innerHTML='Country';
    let row4  = coord.insertRow(2);
    let cell4 = coord.insertRow(2);
    cell4.innerHTML = 'Coordinates';
    let row5  = measurements.insertRow(4);
    let cell5 = measurements.insertRow(4);
    cell5.innerHTML='Values';
}

function Empty() {
    for(var g =0; g < app.cities.length; g++)
        document.getElementById('map1_table').deleteRow(0);
    app.cities =[];
    app.country = [];
    app.coordinates = [];
    app.locations = [];
    app.measurements = [];
}
function ParseResults(data) {

    Empty();

    let len = data.results.length;
    for ( var p in data.results)

        app.cities.push(data.results[p].city);
    console.log(app.cities.length);

    for(var j in data.results)
        app.coordinates.push(new LatLng(data.results[p].coordinates.latitude, data.results[p].coordinates.longitude).toString());

    console.log(app.coordinates.length);

    for (var k in data.results)
        for(var r in data.results[k].measurements)
            app.measurements.push(data.results[k].measurements[r].value + data.results[k].measurements[r].unit);

    console.log(app.measurements.length);

    for(var u in data.results)
        app.locations.push(data.results[u].location);

    console.log(app.locations.length);

    for(var t in data.results)
        app.country.push(data.results[t].country);
    console.log(app.country.length);

    //CreateHeads();
    for (var y in data.results)
        myCreateFunction(app.cities[y], app.country[y], app.coordinates[y], app.locations[y], app.measurements[y]);
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

