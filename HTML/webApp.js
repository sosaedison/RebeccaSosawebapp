let measurements = 'https://api.openaq.org/v1/measurements';
let latest = 'https://api.openaq.org/v1/latest?coordinates=';
let app;

app = new Vue ({
     el: '#app',

    data: {
        coordinates: [],
        cities: [],
        country: [],
        locations: [],
        measurements: [],
        tableStuff: [],
        map : null,
        tileLayer: null,
        layers: [
            {
                id: 0,
                name: 'Restaurants',
                active: false,
                features: [],
            }
        ]
    },
    mounted() {
        this.initmap();
        this.initLayers();
        this.setUp();
    },
    methods: {
         initmap() {
             this.map = L.map('map1',{minZoom: 9, maxZoom: 16}).setView([44.9544, -93.0913], 3);
             this.tileLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                 maxZoom: 18,
                 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                     '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                     'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                 id: 'mapbox.streets'
             })
            this.tileLayer.addTo(this.map);
         },
        setUp() {
            this.map.on('mouseup', this.timeOut());
            this.map.on('zoomend', this.timeOut());
        },
        timeOut(){
            setTimeout(this.onMove, 2000)
        },
        onMove(){
             this.GetResults();
        },
        initLayers() {
             this.layers.forEach((layer) => {
                 const markerFeatures = layer.features.filter(feature => feature.type === 'marker');
                 const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');
                 markerFeatures.forEach((feature) => {
                     feature.leafletObject = L.marker(feature.coords)
                         .bindPopup(feature.name);
                 });
                 polygonFeatures.forEach((feature) => {
                     feature.leafletObject = L.polygon(feature.coords)
                         .bindPopup(feature.name);
                 });
             });

        },
        layerChanged(layerid, active){
            const layer = this.layers.find(layer => layer.id === layerId);
            layer.features.forEach((feature) => {
                /* Show or hide the feature depending on the active argument */
                if (active) {
                    feature.leafletObject.addTo(this.map);
                } else {
                    feature.leafletObject.removeFrom(this.map);
                }
            });

        },
        GetResults() {
            var latlng1 = L.latLng(this.map.getCenter().lat, this.map.getCenter().lng);
            var latlng2 = L.latLng(this.map.getBounds().getNorth(), this.map.getCenter().lng);

            let radius = this.map.distance(latlng1, latlng2);
            let limit = '&limit=10000';
            let prior = '&date_from=2019-3-18';
            let stuff = latest+ this.map.getCenter().lat + ',' + this.map.getCenter().lng +'&'+'radius=' + radius+limit+prior;
            console.log(stuff);

            //$(document).ready()
            let request = {
                url: stuff,
                dataType: "json",
                success: this.ParseResults()
            };
            $.ajax(request);
        },
        ParseResults(data) {
            console.log(data);
        }
    }
});



class LatLng {
    constructor(lat, lng){
        this.lat = lat.toFixed(3);
        this.lng = lng.toFixed(3);
    }
    toString() { return  'Latitude: ' +this.lat + ',' + 'Longitude: ' + this.lng; }
}


/*function GetResultsLatLng() {
    var date = new Date();


    //var prior = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
    console.log(date);

//     Number.prototype.toRad = function() {
//         return this * Math.PI / 180;
//     };
//
//     var lat2 = mymap.getBounds().getSouthEast().lat;
//     var lon2 = mymap.getBounds().getSouthEast().lng;
//     var lat1 = mymap.getBounds().getNorthWest().lat;
//     var lon1 = mymap.getBounds().getNorthWest().lng;
//
//     var R = 6371; // km
// //has a problem with the .toRad() method below.
//     var x1 = lat2-lat1;
//     var dLat = x1.toRad();
//     var x2 = lon2-lon1;
//     var dLon = x2.toRad();
//     var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
//         Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
//         Math.sin(dLon/2) * Math.sin(dLon/2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     var d = R * c;
//
//     var radius = d;

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
} */
// set max and min zoom to 16 and 9


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

/*function ParseResults(data) {

    for (var x in data.results)
        app.tableStuff.push(data.results[x]);
        console.log(app.tableStuff.length);
    //Empty();

    // let len = data.results.length;
    // for ( var p in data.results)
    //
    //     app.cities.push(data.results[p].city);
    // console.log(app.cities.length);
    //
    // for(var j in data.results)
    //     app.coordinates.push(new LatLng(data.results[p].coordinates.latitude, data.results[p].coordinates.longitude).toString());
    //
    // console.log(app.coordinates.length);
    //
    // for (var k in data.results)
    //     for(var r in data.results[k].measurements)
    //         app.measurements.push(data.results[k].measurements[r].value + data.results[k].measurements[r].unit);
    //
    // console.log(app.measurements.length);
    //
    // for(var u in data.results)
    //     app.locations.push(data.results[u].location);
    //
    // console.log(app.locations.length);
    //
    // for(var t in data.results)
    //     app.country.push(data.results[t].country);
    // console.log(app.country.length);

    //CreateHeads();
    //for (var y in data.results)
        //myCreateFunction(app.cities[y], app.country[y], app.coordinates[y], app.locations[y], app.measurements[y]);
}*/

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







