let measurements = 'https://api.openaq.org/v1/measurements';
let latest = 'https://api.openaq.org/v1/latest?coordinates=';

 var limit = '&limit=10386';

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
var date = new Date();
var prior= new Date();
prior.setDate(prior.getDate()-30)
console.log(date);
console.log(prior);
    var latlng1 = L.latLng(Mymap.getCenter().lat, Mymap.getCenter().lng);
    var latlng2 = L.latLng(Mymap.getBounds().getNorth(), Mymap.getCenter().lng);
    let radius = Mymap.distance(latlng1, latlng2);
        var latlng3 = L.latLng(Mymap2.getCenter().lat, Mymap2.getCenter().lng);
    var latlng4 = L.latLng(Mymap2.getBounds().getNorth(), Mymap2.getCenter().lng);
    let radius2 = Mymap.distance(latlng3, latlng4);
    console.log(radius);
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+Mymap.getCenter().lat+","+ Mymap.getCenter().lng+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+Mymap2.getCenter().lat+","+ Mymap2.getCenter().lng+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date;
    GetJSON(url3, function(data) {
        data2 = data;
     for (var i = 0; i < data2.length; i++) {
    console.log(data2[i].lat);
    console.log(data2[i].location);
    console.log(data2[i].lon);
    console.log(data2[i].value);

}
  //  https://api.openaq.org/v1/measurements?coordinates=41.89193,-92&radius=28000
})
    GetJSON(url4, function(data) {
        data2 = data;
     for (var i = 0; i < data2.length; i++) {
    console.log(data2[i].lat);
    console.log(data2[i].lon);
    console.log(data2[i].value);

}
  //  https://api.openaq.org/v1/measurements?coordinates=41.89193,-92&radius=28000
})

        function pann2(data2) {
            Mymap2.panTo(new L.LatLng(data2.lat,data2.lon));
        }
                function pann1(data1) {
            Mymap.panTo(new L.LatLng(data1.lat,data1.lon));
        }
var lat = document.getElementById("lat").value;
    var lon = document.getElementById("lon").value;
   
     var lat2 = document.getElementById("lat2").value;
    var lon2 = document.getElementById("lon2").value;
    var loc2 = document.getElementById("loc2").value;
    var loc1 = document.getElementById("loc").value;
       var url1= "https://nominatim.openstreetmap.org/search?q=" + loc1+ "&format=json&accept-language=en";
   var url2= "https://nominatim.openstreetmap.org/search?q=" + loc2+ "&format=json&accept-language=en";
function buttonStuff(lat,lng)
    {
    

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
    var latlng1 = L.latLng(Mymap.getCenter().lat, Mymap.getCenter().lng);
    var latlng2 = L.latLng(Mymap.getBounds().getNorth(), Mymap.getCenter().lng);
    let radius = Mymap.distance(latlng1, latlng2);
        var latlng3 = L.latLng(Mymap2.getCenter().lat, Mymap2.getCenter().lng);
    var latlng4 = L.latLng(Mymap2.getBounds().getNorth(), Mymap2.getCenter().lng);
    let radius2 = Mymap.distance(latlng3, latlng4);
    console.log(radius);
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+Mymap.getCenter().lat+","+ Mymap.getCenter().lng+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+Mymap2.getCenter().lat+","+ Mymap2.getCenter().lng+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date;
    GetJSON(url3, function(data) {
        data2 = data;
     for (var i = 0; i < data2.length; i++) {
    console.log(data2[i].lat);
    console.log(data2[i].location);
    console.log(data2[i].lon);
    console.log(data2[i].value);

}
  //  https://api.openaq.org/v1/measurements?coordinates=41.89193,-92&radius=28000
})
    GetJSON(url4, function(data) {
        data2 = data;
     for (var i = 0; i < data2.length; i++) {
    console.log(data2[i].lat);
    console.log(data2[i].lon);
    console.log(data2[i].value);

}
  //  https://api.openaq.org/v1/measurements?coordinates=41.89193,-92&radius=28000
})

  
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

   // for (f = 0; f<app.cityNames.length;f++)
  //      myCreateFunction(app.cityNames[f], app.country[f], app.coordinates[f], app.locations[f], app.AQ[f])
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
setTimeout(function B(){
var latcent=Mymap.getCenter().lat;
var loncent=Mymap.getCenter().lng;
var latcent2=Mymap2.getCenter().lat;
var loncent2=Mymap2.getCenter().lng;
        var latlng1 = L.latLng(Mymap.getCenter().lat, Mymap.getCenter().lng);
    var latlng2 = L.latLng(Mymap.getBounds().getNorth(), Mymap.getCenter().lng);
    let radius = Mymap.distance(latlng1, latlng2);
        var latlng3 = L.latLng(Mymap2.getCenter().lat, Mymap2.getCenter().lng);
    var latlng4 = L.latLng(Mymap2.getBounds().getNorth(), Mymap2.getCenter().lng);
    let radius2 = Mymap.distance(latlng3, latlng4);
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+latcent+","+ loncent+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date;
console.log(Mymap.getCenter().lat);
console.log(url3);
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+latcent2+","+ loncent2+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date;


GetJSON(url3, function(data) {
    for(i in data.results){
        table = document.getElementById('table1');
        row = table.insertRow();
        //row.innerHTML = "<td>";
        row.insertCell().innerHTML = data.results[i].country;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].city;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].date.utc;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].location;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].coordinates.latitude;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].coordinates.longitude;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].parameter;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].unit;
        //row.innerHTML += "</td><td>";        
        row.insertCell().innerHTML = data.results[i].value;
        //row.innerHTML += "</td>";
    }
//build('#table1',data, ['country', 'city', 'data','utc','location','latitude','longitude','parameter','unit','value']);
  //  https://api.openaq.org/v1/measurements?coordinates=41.89193,-92&radius=28000
})
    GetJSON(url4, function(data) {
    for(i in data.results){
        table = document.getElementById('table2');
        row = table.insertRow();
        //row.innerHTML = "<td>";
        row.insertCell().innerHTML = data.results[i].country;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].city;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].date.utc;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].location;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].coordinates.latitude;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].coordinates.longitude;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].parameter;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].unit;
        //row.innerHTML += "</td><td>";        
        row.insertCell().innerHTML = data.results[i].value;
        //row.innerHTML += "</td>";
    }
  //  https://api.openaq.org/v1/measurements?coordinates=41.89193,-92&radius=28000
})},1000);
}


Mymap.on('mouseup mousedown zoomend', setTimeout(function A(){   
        var latcent=Mymap.getCenter().lat;
var loncent=Mymap.getCenter().lng;
var latcent2=Mymap2.getCenter().lat;
var loncent2=Mymap2.getCenter().lng;
        var latlng1 = L.latLng(Mymap.getCenter().lat, Mymap.getCenter().lng);
    var latlng2 = L.latLng(Mymap.getBounds().getNorth(), Mymap.getCenter().lng);
    let radius = Mymap.distance(latlng1, latlng2);
        var latlng3 = L.latLng(Mymap2.getCenter().lat, Mymap2.getCenter().lng);
    var latlng4 = L.latLng(Mymap2.getBounds().getNorth(), Mymap2.getCenter().lng);
    let radius2 = Mymap.distance(latlng3, latlng4);
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+latcent+","+ loncent+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+"&limit="+limit;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+latcent2+","+ loncent2+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+"&limit="+limit;
GetJSON(url3, function(data) {

   $("#table1 tr").remove(); 
       table = document.getElementById('table1');    
        row = table.insertRow();
        row.insertCell().innerHTML = "Country";
        row.insertCell().innerHTML = "City";
        row.insertCell().innerHTML = "date:Utc";
        row.insertCell().innerHTML = "Location";
        row.insertCell().innerHTML = "latitude";
        row.insertCell().innerHTML = "longitude";
        row.insertCell().innerHTML = "parameter";
        row.insertCell().innerHTML = "unit";       
        row.insertCell().innerHTML = "value";
    for(i in data.results){ 
    table = document.getElementById('table1');    
        row = table.insertRow();
        row.insertCell().innerHTML = data.results[i].country;
        row.insertCell().innerHTML = data.results[i].city;
        row.insertCell().innerHTML = data.results[i].date.utc;
        row.insertCell().innerHTML = data.results[i].location;
        row.insertCell().innerHTML = data.results[i].coordinates.latitude;
        row.insertCell().innerHTML = data.results[i].coordinates.longitude;
        row.insertCell().innerHTML = data.results[i].parameter;
        row.insertCell().innerHTML = data.results[i].unit;       
        row.insertCell().innerHTML = data.results[i].value;
    }
})
   
    GetJSON(url4, function(data) {$("#table2 tr").remove(); 
       table = document.getElementById('table2');    
        row = table.insertRow();
        row.insertCell().innerHTML = "Country";
        row.insertCell().innerHTML = "City";
        row.insertCell().innerHTML = "date:Utc";
        row.insertCell().innerHTML = "Location";
        row.insertCell().innerHTML = "latitude";
        row.insertCell().innerHTML = "longitude";
        row.insertCell().innerHTML = "parameter";
        row.insertCell().innerHTML = "unit";       
        row.insertCell().innerHTML = "value";
    for(i in data.results){
        table = document.getElementById('table2');
        row = table.insertRow();
        //row.innerHTML = "<td>";
        row.insertCell().innerHTML = data.results[i].country;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].city;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].date.utc;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].location;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].coordinates.latitude;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].coordinates.longitude;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].parameter;
        //row.innerHTML += "</td><td>";
        row.insertCell().innerHTML = data.results[i].unit;
        //row.innerHTML += "</td><td>";        
        row.insertCell().innerHTML = data.results[i].value;
        //row.innerHTML += "</td>";
    }
    
})},4000));


