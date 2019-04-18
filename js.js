
		 var limit = '&limit=10000';
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
var app = new Vue (
	{

    el: '#maps',

    data:
    	{
        reqResults: [],
        coordinates: [],
        cityNames: [],
        AQ: [],
        country: [],
        locations: []
	   }
	});

function GetResultsLatLng(lat, lng)
	{
		if(document.getElementById('loc')!== null)
		{
			var loc1 = document.getElementById('loc');

			var url="https://nominatim.openstreetmap.org/search?q=" + loc1.value + "&format=json&accept-language=en"
			GetJSON(url, function(data) {
		        data1 = data;
		    });

			Mymap= L.map('map').setView([loc1.lon, loc1.lat], 13);
		}
		else
		{
			Mymap= L.map('map').setView([document.getElementById("lon").value, document.getElementById("lat").value], 13);
		}

   var center1= (Mymap.getCenter());
   var centerlatlon1= L.latLng(Mymap.getCenter().lat, Mymap.getCenter().lng);
var cornerlatlon1=L.latLng(Mymap.getBounds().getSouthWest().lat, Mymap.getBounds().getSouthWest().lng);
var radius1=Mymap.distance(centerlatlon1,cornerlatlon1);
    		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
				maxZoom: 16,
				minZoom:9,
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
					'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
					'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				id: 'mapbox.streets'
		}).addTo(Mymap);
   Mymap2= L.map('map2').setView([document.getElementById("lon2").value, document.getElementById("lat2").value], 13);
   var center2= (Mymap2.getCenter());
   var centerlatlon2= L.latLng(Mymap2.getCenter().lat, Mymap2.getCenter().lng);
var cornerlatlon2=L.latLng(Mymap2.getBounds().getSouthWest().lat, Mymap2.getBounds().getSouthWest().lng);
var radius2=Mymap2.distance(centerlatlon2,cornerlatlon2);

    		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
				maxZoom: 16,
				minZoom:9,
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
					'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
					'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				id: 'mapbox.streets'
		}).addTo(Mymap2);
		let measurements = 'https://api.openaq.org/v1/measurements';
let latest = 'https://api.openaq.org/v1/latest?coordinates=';
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

//var popup = L.popup();

function onMouseUp(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);

        let latlong = e.latlng;
        GetResultsLatLng(latlong.lat, latlong.lng);

}

//mymap.on('mouseup', onMouseUp);
