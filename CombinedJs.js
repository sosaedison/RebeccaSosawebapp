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
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+Mymap.getCenter().lat+","+ Mymap.getCenter().lng+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+limit;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+Mymap2.getCenter().lat+","+ Mymap2.getCenter().lng+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+limit;
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
   setTimeout(function A(){  
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
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+latcent+","+ loncent+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+limit;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+latcent2+","+ loncent2+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+limit;
document.getElementsByName('lat')[0].placeholder=latcent;
document.getElementsByName('lon')[0].placeholder=loncent;
document.getElementsByName('lat2')[0].placeholder=latcent2;
document.getElementsByName('lon2')[0].placeholder=loncent2;
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent+","+loncent+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc')[0].placeholder=data[0].display_name;})
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent2+","+loncent2+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc2')[0].placeholder=data[0].display_name;})
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
                if(data.results[i].parameter==='pm25')
        {
            if(data.results[i].value<12.1)
            {
                row.className = "green";
            }
            if(data.results[i].value>=12.1 &&data.results[i].value<35.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=250.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=35.5 &&data.results[i].value<55.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=55.5 &&data.results[i].value<150.5)
            {
                row.className = "red";
            } if(data.results[i].value>=150.5 &&data.results[i].value<250.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="pm10")
        {
            if(data.results[i].value<55)
            {
                row.className = "green";
            }
            if(data.results[i].value>=55 &&data.results[i].value<154)
            {
               row.className = "yellow";
            }
             if(data.results[i].value>=425)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=155 &&data.results[i].value<255)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=255 &&data.results[i].value<355)
            {
                row.className = "red";
            } if(data.results[i].value>=355 &&data.results[i].value<425)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="co")
        {
            if(data.results[i].value<4.5)
            {
                row.className = "green";
            }
            if(data.results[i].value>=4.5 &&data.results[i].value<9.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=30.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=9.5 &&data.results[i].value<12.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=12.5 &&data.results[i].value<15.5)
            {
                row.className = "red";
            } if(data.results[i].value>=15.5 &&data.results[i].value<30.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="so2")
        {
            if(data.results[i].value<36)
            {
                row.className = "green";
            }
            if(data.results[i].value>=36 &&data.results[i].value<76)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=605)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=76 &&data.results[i].value<186)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=186 &&data.results[i].value<305)
            {
                row.className = "red";
            } if(data.results[i].value>=305 &&data.results[i].value<605)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="no2")
        {
            if(data.results[i].value<54)
            {
                row.className = "green";
            }
            if(data.results[i].value>=54 &&data.results[i].value<101)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=1250)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=101 &&data.results[i].value<361)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=361 &&data.results[i].value<650)
            {
                row.className = "red";
            } if(data.results[i].value>=650 &&data.results[i].value<1250)
            {
                row.className = "purple";
            } 
        }
         if(data.results[i].parameter==="o3")
        {
            if(data.results[i].value<.055)
            {
                row.className = "green";
            }
            if(data.results[i].value>=.055 &&data.results[i].value<.071)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=.2)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=.071 &&data.results[i].value<.086)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=.086 &&data.results[i].value<.106)
            {
                row.className = "red";
            } if(data.results[i].value>=.106 &&data.results[i].value<.2)
            {
                row.className = "purple";
            } 
        }
        var marker = L.marker([data.results[i].coordinates.latitude, data.results[i].coordinates.longitude]).addTo(Mymap);
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
               row.insertCell().innerHTML = data.results[i].country;
        row.insertCell().innerHTML = data.results[i].city;
        row.insertCell().innerHTML = data.results[i].date.utc;
        row.insertCell().innerHTML = data.results[i].location;
        row.insertCell().innerHTML = data.results[i].coordinates.latitude;
        row.insertCell().innerHTML = data.results[i].coordinates.longitude;
        row.insertCell().innerHTML = data.results[i].parameter;
        row.insertCell().innerHTML = data.results[i].unit;       
        row.insertCell().innerHTML = data.results[i].value;
                if(data.results[i].parameter==='pm25')
        {
            if(data.results[i].value<12.1)
            {
                row.className = "green";
            }
            if(data.results[i].value>=12.1 &&data.results[i].value<35.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=250.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=35.5 &&data.results[i].value<55.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=55.5 &&data.results[i].value<150.5)
            {
                row.className = "red";
            } if(data.results[i].value>=150.5 &&data.results[i].value<250.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="pm10")
        {
            if(data.results[i].value<55)
            {
                row.className = "green";
            }
            if(data.results[i].value>=55 &&data.results[i].value<154)
            {
               row.className = "yellow";
            }
             if(data.results[i].value>=425)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=155 &&data.results[i].value<255)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=255 &&data.results[i].value<355)
            {
                row.className = "red";
            } if(data.results[i].value>=355 &&data.results[i].value<425)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="co")
        {
            if(data.results[i].value<4.5)
            {
                row.className = "green";
            }
            if(data.results[i].value>=4.5 &&data.results[i].value<9.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=30.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=9.5 &&data.results[i].value<12.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=12.5 &&data.results[i].value<15.5)
            {
                row.className = "red";
            } if(data.results[i].value>=15.5 &&data.results[i].value<30.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="so2")
        {
            if(data.results[i].value<36)
            {
                row.className = "green";
            }
            if(data.results[i].value>=36 &&data.results[i].value<76)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=605)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=76 &&data.results[i].value<186)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=186 &&data.results[i].value<305)
            {
                row.className = "red";
            } if(data.results[i].value>=305 &&data.results[i].value<605)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="no2")
        {
            if(data.results[i].value<54)
            {
                row.className = "green";
            }
            if(data.results[i].value>=54 &&data.results[i].value<101)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=1250)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=101 &&data.results[i].value<361)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=361 &&data.results[i].value<650)
            {
                row.className = "red";
            } if(data.results[i].value>=650 &&data.results[i].value<1250)
            {
                row.className = "purple";
            } 
        }
         if(data.results[i].parameter==="o3")
        {
            if(data.results[i].value<.055)
            {
                row.className = "green";
            }
            if(data.results[i].value>=.055 &&data.results[i].value<.071)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=.2)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=.071 &&data.results[i].value<.086)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=.086 &&data.results[i].value<.106)
            {
                row.className = "red";
            } if(data.results[i].value>=.106 &&data.results[i].value<.2)
            {
                row.className = "purple";
            } 
        }
          var marker = L.marker([data.results[i].coordinates.latitude, data.results[i].coordinates.longitude]).addTo(Mymap2);  
    } 
})},2000);

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
//Mymap.on('_zoomEnd', refreshData);
//Mymap.on("_onZoomTransitionEnd", refreshData);
//Mymap.on("_moveEnd", refreshData);
//Mymap2.on('_zoomEnd', refreshData);
//Mymap2.on("_onZoomTransitionEnd", refreshData);
//Mymap2.on("_moveEnd", refreshData);
   setTimeout(function A(){  
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
    document.getElementsByName('lat')[0].placeholder=latcent;
document.getElementsByName('lon')[0].placeholder=loncent;
document.getElementsByName('lat2')[0].placeholder=latcent2;
document.getElementsByName('lon2')[0].placeholder=loncent2;
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent+","+loncent+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc')[0].placeholder=data[0].display_name;})
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent2+","+loncent2+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc2')[0].placeholder=data[0].display_name;})
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+latcent+","+ loncent+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+limit;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+latcent2+","+ loncent2+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+limit;
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
                if(data.results[i].parameter==='pm25')
        {
            if(data.results[i].value<12.1)
            {
                row.className = "green";
            }
            if(data.results[i].value>=12.1 &&data.results[i].value<35.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=250.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=35.5 &&data.results[i].value<55.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=55.5 &&data.results[i].value<150.5)
            {
                row.className = "red";
            } if(data.results[i].value>=150.5 &&data.results[i].value<250.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="pm10")
        {
            if(data.results[i].value<55)
            {
                row.className = "green";
            }
            if(data.results[i].value>=55 &&data.results[i].value<154)
            {
               row.className = "yellow";
            }
             if(data.results[i].value>=425)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=155 &&data.results[i].value<255)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=255 &&data.results[i].value<355)
            {
                row.className = "red";
            } if(data.results[i].value>=355 &&data.results[i].value<425)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="co")
        {
            if(data.results[i].value<4.5)
            {
                row.className = "green";
            }
            if(data.results[i].value>=4.5 &&data.results[i].value<9.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=30.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=9.5 &&data.results[i].value<12.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=12.5 &&data.results[i].value<15.5)
            {
                row.className = "red";
            } if(data.results[i].value>=15.5 &&data.results[i].value<30.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="so2")
        {
            if(data.results[i].value<36)
            {
                row.className = "green";
            }
            if(data.results[i].value>=36 &&data.results[i].value<76)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=605)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=76 &&data.results[i].value<186)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=186 &&data.results[i].value<305)
            {
                row.className = "red";
            } if(data.results[i].value>=305 &&data.results[i].value<605)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="no2")
        {
            if(data.results[i].value<54)
            {
                row.className = "green";
            }
            if(data.results[i].value>=54 &&data.results[i].value<101)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=1250)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=101 &&data.results[i].value<361)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=361 &&data.results[i].value<650)
            {
                row.className = "red";
            } if(data.results[i].value>=650 &&data.results[i].value<1250)
            {
                row.className = "purple";
            } 
        }
         if(data.results[i].parameter==="o3")
        {
            if(data.results[i].value<.055)
            {
                row.className = "green";
            }
            if(data.results[i].value>=.055 &&data.results[i].value<.071)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=.2)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=.071 &&data.results[i].value<.086)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=.086 &&data.results[i].value<.106)
            {
                row.className = "red";
            } if(data.results[i].value>=.106 &&data.results[i].value<.2)
            {
                row.className = "purple";
            } 
        }
        var marker = L.marker([data.results[i].coordinates.latitude, data.results[i].coordinates.longitude]).addTo(Mymap);
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
               row.insertCell().innerHTML = data.results[i].country;
        row.insertCell().innerHTML = data.results[i].city;
        row.insertCell().innerHTML = data.results[i].date.utc;
        row.insertCell().innerHTML = data.results[i].location;
        row.insertCell().innerHTML = data.results[i].coordinates.latitude;
        row.insertCell().innerHTML = data.results[i].coordinates.longitude;
        row.insertCell().innerHTML = data.results[i].parameter;
        row.insertCell().innerHTML = data.results[i].unit;       
        row.insertCell().innerHTML = data.results[i].value;
                if(data.results[i].parameter==='pm25')
        {
            if(data.results[i].value<12.1)
            {
                row.className = "green";
            }
            if(data.results[i].value>=12.1 &&data.results[i].value<35.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=250.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=35.5 &&data.results[i].value<55.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=55.5 &&data.results[i].value<150.5)
            {
                row.className = "red";
            } if(data.results[i].value>=150.5 &&data.results[i].value<250.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="pm10")
        {
            if(data.results[i].value<55)
            {
                row.className = "green";
            }
            if(data.results[i].value>=55 &&data.results[i].value<154)
            {
               row.className = "yellow";
            }
             if(data.results[i].value>=425)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=155 &&data.results[i].value<255)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=255 &&data.results[i].value<355)
            {
                row.className = "red";
            } if(data.results[i].value>=355 &&data.results[i].value<425)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="co")
        {
            if(data.results[i].value<4.5)
            {
                row.className = "green";
            }
            if(data.results[i].value>=4.5 &&data.results[i].value<9.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=30.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=9.5 &&data.results[i].value<12.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=12.5 &&data.results[i].value<15.5)
            {
                row.className = "red";
            } if(data.results[i].value>=15.5 &&data.results[i].value<30.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="so2")
        {
            if(data.results[i].value<36)
            {
                row.className = "green";
            }
            if(data.results[i].value>=36 &&data.results[i].value<76)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=605)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=76 &&data.results[i].value<186)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=186 &&data.results[i].value<305)
            {
                row.className = "red";
            } if(data.results[i].value>=305 &&data.results[i].value<605)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="no2")
        {
            if(data.results[i].value<54)
            {
                row.className = "green";
            }
            if(data.results[i].value>=54 &&data.results[i].value<101)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=1250)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=101 &&data.results[i].value<361)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=361 &&data.results[i].value<650)
            {
                row.className = "red";
            } if(data.results[i].value>=650 &&data.results[i].value<1250)
            {
                row.className = "purple";
            } 
        }
         if(data.results[i].parameter==="o3")
        {
            if(data.results[i].value<.055)
            {
                row.className = "green";
            }
            if(data.results[i].value>=.055 &&data.results[i].value<.071)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=.2)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=.071 &&data.results[i].value<.086)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=.086 &&data.results[i].value<.106)
            {
                row.className = "red";
            } if(data.results[i].value>=.106 &&data.results[i].value<.2)
            {
                row.className = "purple";
            } 
        }
          var marker = L.marker([data.results[i].coordinates.latitude, data.results[i].coordinates.longitude]).addTo(Mymap2);  
    } 
})},2000);
//Mymap.on("", refreshData);
//Mymap2.on("", refreshData);
//Mymap.on("_onZoomTransitionEnd", refreshData);
//Mymap2.on("_onZoomTransitionEnd", refreshData);
}




Mymap.on('mousedown mouseup', function() {
 setTimeout(function A(){   
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
    document.getElementsByName('lat')[0].placeholder=latcent;
document.getElementsByName('lon')[0].placeholder=loncent;
document.getElementsByName('lat2')[0].placeholder=latcent2;
document.getElementsByName('lon2')[0].placeholder=loncent2;
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent+","+loncent+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc')[0].placeholder=data[0].display_name;})
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent2+","+loncent2+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc2')[0].placeholder=data[0].display_name;})
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
                if(data.results[i].parameter==='pm25')
        {
            if(data.results[i].value<12.1)
            {
                row.className = "green";
            }
            if(data.results[i].value>=12.1 &&data.results[i].value<35.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=250.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=35.5 &&data.results[i].value<55.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=55.5 &&data.results[i].value<150.5)
            {
                row.className = "red";
            } if(data.results[i].value>=150.5 &&data.results[i].value<250.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="pm10")
        {
            if(data.results[i].value<55)
            {
                row.className = "green";
            }
            if(data.results[i].value>=55 &&data.results[i].value<154)
            {
               row.className = "yellow";
            }
             if(data.results[i].value>=425)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=155 &&data.results[i].value<255)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=255 &&data.results[i].value<355)
            {
                row.className = "red";
            } if(data.results[i].value>=355 &&data.results[i].value<425)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="co")
        {
            if(data.results[i].value<4.5)
            {
                row.className = "green";
            }
            if(data.results[i].value>=4.5 &&data.results[i].value<9.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=30.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=9.5 &&data.results[i].value<12.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=12.5 &&data.results[i].value<15.5)
            {
                row.className = "red";
            } if(data.results[i].value>=15.5 &&data.results[i].value<30.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="so2")
        {
            if(data.results[i].value<36)
            {
                row.className = "green";
            }
            if(data.results[i].value>=36 &&data.results[i].value<76)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=605)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=76 &&data.results[i].value<186)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=186 &&data.results[i].value<305)
            {
                row.className = "red";
            } if(data.results[i].value>=305 &&data.results[i].value<605)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="no2")
        {
            if(data.results[i].value<54)
            {
                row.className = "green";
            }
            if(data.results[i].value>=54 &&data.results[i].value<101)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=1250)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=101 &&data.results[i].value<361)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=361 &&data.results[i].value<650)
            {
                row.className = "red";
            } if(data.results[i].value>=650 &&data.results[i].value<1250)
            {
                row.className = "purple";
            } 
        }
         if(data.results[i].parameter==="o3")
        {
            if(data.results[i].value<.055)
            {
                row.className = "green";
            }
            if(data.results[i].value>=.055 &&data.results[i].value<.071)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=.2)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=.071 &&data.results[i].value<.086)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=.086 &&data.results[i].value<.106)
            {
                row.className = "red";
            } if(data.results[i].value>=.106 &&data.results[i].value<.2)
            {
                row.className = "purple";
            } 
        }
        var marker = L.marker([data.results[i].coordinates.latitude, data.results[i].coordinates.longitude]).addTo(Mymap);  
    }
})
   
},4000);});
Mymap.on('zoomend', function() {
 setTimeout(function A(){   
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
    document.getElementsByName('lat')[0].placeholder=latcent;
document.getElementsByName('lon')[0].placeholder=loncent;
document.getElementsByName('lat2')[0].placeholder=latcent2;
document.getElementsByName('lon2')[0].placeholder=loncent2;
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent+","+loncent+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc')[0].placeholder=data[0].display_name;})
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent2+","+loncent2+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc2')[0].placeholder=data[0].display_name;})
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
        if(data.results[i].parameter==='pm25')
        {
            if(data.results[i].value<12.1)
            {
                row.className = "green";
            }
            if(data.results[i].value>=12.1 &&data.results[i].value<35.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=250.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=35.5 &&data.results[i].value<55.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=55.5 &&data.results[i].value<150.5)
            {
                row.className = "red";
            } if(data.results[i].value>=150.5 &&data.results[i].value<250.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="pm10")
        {
            if(data.results[i].value<55)
            {
                row.className = "green";
            }
            if(data.results[i].value>=55 &&data.results[i].value<154)
            {
               row.className = "yellow";
            }
             if(data.results[i].value>=425)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=155 &&data.results[i].value<255)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=255 &&data.results[i].value<355)
            {
                row.className = "red";
            } if(data.results[i].value>=355 &&data.results[i].value<425)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="co")
        {
            if(data.results[i].value<4.5)
            {
                row.className = "green";
            }
            if(data.results[i].value>=4.5 &&data.results[i].value<9.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=30.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=9.5 &&data.results[i].value<12.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=12.5 &&data.results[i].value<15.5)
            {
                row.className = "red";
            } if(data.results[i].value>=15.5 &&data.results[i].value<30.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="so2")
        {
            if(data.results[i].value<36)
            {
                row.className = "green";
            }
            if(data.results[i].value>=36 &&data.results[i].value<76)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=605)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=76 &&data.results[i].value<186)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=186 &&data.results[i].value<305)
            {
                row.className = "red";
            } if(data.results[i].value>=305 &&data.results[i].value<605)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="no2")
        {
            if(data.results[i].value<54)
            {
                row.className = "green";
            }
            if(data.results[i].value>=54 &&data.results[i].value<101)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=1250)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=101 &&data.results[i].value<361)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=361 &&data.results[i].value<650)
            {
                row.className = "red";
            } if(data.results[i].value>=650 &&data.results[i].value<1250)
            {
                row.className = "purple";
            } 
        }
         if(data.results[i].parameter==="o3")
        {
            if(data.results[i].value<.055)
            {
                row.className = "green";
            }
            if(data.results[i].value>=.055 &&data.results[i].value<.071)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=.2)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=.071 &&data.results[i].value<.086)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=.086 &&data.results[i].value<.106)
            {
                row.className = "red";
            } if(data.results[i].value>=.106 &&data.results[i].value<.2)
            {
                row.className = "purple";
            } 
        }
        var marker = L.marker([data.results[i].coordinates.latitude, data.results[i].coordinates.longitude]).addTo(Mymap);  
    }
})
   
},4000);});
Mymap2.on('mousedown mouseup', function() {
 setTimeout(function A(){   
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
    document.getElementsByName('lat')[0].placeholder=latcent;
document.getElementsByName('lon')[0].placeholder=loncent;
document.getElementsByName('lat2')[0].placeholder=latcent2;
document.getElementsByName('lon2')[0].placeholder=loncent2;
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent+","+loncent+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc')[0].placeholder=data[0].display_name;})
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent2+","+loncent2+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc2')[0].placeholder=data[0].display_name;})
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+latcent+","+ loncent+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+"&limit="+limit;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+latcent2+","+ loncent2+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+"&limit="+limit;
   
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
                if(data.results[i].parameter==='pm25')
        {
            if(data.results[i].value<12.1)
            {
                row.className = "green";
            }
            if(data.results[i].value>=12.1 &&data.results[i].value<35.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=250.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=35.5 &&data.results[i].value<55.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=55.5 &&data.results[i].value<150.5)
            {
                row.className = "red";
            } if(data.results[i].value>=150.5 &&data.results[i].value<250.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="pm10")
        {
            if(data.results[i].value<55)
            {
                row.className = "green";
            }
            if(data.results[i].value>=55 &&data.results[i].value<154)
            {
               row.className = "yellow";
            }
             if(data.results[i].value>=425)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=155 &&data.results[i].value<255)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=255 &&data.results[i].value<355)
            {
                row.className = "red";
            } if(data.results[i].value>=355 &&data.results[i].value<425)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="co")
        {
            if(data.results[i].value<4.5)
            {
                row.className = "green";
            }
            if(data.results[i].value>=4.5 &&data.results[i].value<9.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=30.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=9.5 &&data.results[i].value<12.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=12.5 &&data.results[i].value<15.5)
            {
                row.className = "red";
            } if(data.results[i].value>=15.5 &&data.results[i].value<30.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="so2")
        {
            if(data.results[i].value<36)
            {
                row.className = "green";
            }
            if(data.results[i].value>=36 &&data.results[i].value<76)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=605)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=76 &&data.results[i].value<186)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=186 &&data.results[i].value<305)
            {
                row.className = "red";
            } if(data.results[i].value>=305 &&data.results[i].value<605)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="no2")
        {
            if(data.results[i].value<54)
            {
                row.className = "green";
            }
            if(data.results[i].value>=54 &&data.results[i].value<101)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=1250)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=101 &&data.results[i].value<361)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=361 &&data.results[i].value<650)
            {
                row.className = "red";
            } if(data.results[i].value>=650 &&data.results[i].value<1250)
            {
                row.className = "purple";
            } 
        }
         if(data.results[i].parameter==="o3")
        {
            if(data.results[i].value<.055)
            {
                row.className = "green";
            }
            if(data.results[i].value>=.055 &&data.results[i].value<.071)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=.2)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=.071 &&data.results[i].value<.086)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=.086 &&data.results[i].value<.106)
            {
                row.className = "red";
            } if(data.results[i].value>=.106 &&data.results[i].value<.2)
            {
                row.className = "purple";
            } 
        }
        //row.innerHTML += "</td>";
        var marker = L.marker([data.results[i].coordinates.latitude, data.results[i].coordinates.longitude]).addTo(Mymap2);  
    }
    
})
},4000);});
Mymap2.on('zoomend', function() {
 setTimeout(function A(){   
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
    document.getElementsByName('lat')[0].placeholder=latcent;
document.getElementsByName('lon')[0].placeholder=loncent;
document.getElementsByName('lat2')[0].placeholder=latcent2;
document.getElementsByName('lon2')[0].placeholder=loncent2;
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent+","+loncent+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc')[0].placeholder=data[0].display_name;})
GetJSON("https://nominatim.openstreetmap.org/search?q=" + latcent2+","+loncent2+ "&format=json&accept-language=en", function(data) {
document.getElementsByName('loc2')[0].placeholder=data[0].display_name;})
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+latcent+","+ loncent+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+"&limit="+limit;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+latcent2+","+ loncent2+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+"&limit="+limit;
   
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
                if(data.results[i].parameter==='pm25')
        {
            if(data.results[i].value<12.1)
            {
                row.className = "green";
            }
            if(data.results[i].value>=12.1 &&data.results[i].value<35.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=250.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=35.5 &&data.results[i].value<55.5)
            {
                row.className = "orange";

            }
             if(data.results[i].value>=55.5 &&data.results[i].value<150.5)
            {
                row.className = "red";
            } if(data.results[i].value>=150.5 &&data.results[i].value<250.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="pm10")
        {
            if(data.results[i].value<55)
            {
                row.className = "green";
            }
            if(data.results[i].value>=55 &&data.results[i].value<154)
            {
               row.className = "yellow";
            }
             if(data.results[i].value>=425)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=155 &&data.results[i].value<255)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=255 &&data.results[i].value<355)
            {
                row.className = "red";
            } if(data.results[i].value>=355 &&data.results[i].value<425)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="co")
        {
            if(data.results[i].value<4.5)
            {
                row.className = "green";
            }
            if(data.results[i].value>=4.5 &&data.results[i].value<9.5)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=30.5)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=9.5 &&data.results[i].value<12.5)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=12.5 &&data.results[i].value<15.5)
            {
                row.className = "red";
            } if(data.results[i].value>=15.5 &&data.results[i].value<30.5)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="so2")
        {
            if(data.results[i].value<36)
            {
                row.className = "green";
            }
            if(data.results[i].value>=36 &&data.results[i].value<76)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=605)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=76 &&data.results[i].value<186)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=186 &&data.results[i].value<305)
            {
                row.className = "red";
            } if(data.results[i].value>=305 &&data.results[i].value<605)
            {
                row.className = "purple";
            } 
        }
               if(data.results[i].parameter==="no2")
        {
            if(data.results[i].value<54)
            {
                row.className = "green";
            }
            if(data.results[i].value>=54 &&data.results[i].value<101)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=1250)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=101 &&data.results[i].value<361)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=361 &&data.results[i].value<650)
            {
                row.className = "red";
            } if(data.results[i].value>=650 &&data.results[i].value<1250)
            {
                row.className = "purple";
            } 
        }
         if(data.results[i].parameter==="o3")
        {
            if(data.results[i].value<.055)
            {
                row.className = "green";
            }
            if(data.results[i].value>=.055 &&data.results[i].value<.071)
            {
                row.className = "yellow";
            }
             if(data.results[i].value>=.2)
            {
                row.className = "maroon";
            }
             if(data.results[i].value>=.071 &&data.results[i].value<.086)
            {
                row.className = "orange";
            }
             if(data.results[i].value>=.086 &&data.results[i].value<.106)
            {
                row.className = "red";
            } if(data.results[i].value>=.106 &&data.results[i].value<.2)
            {
                row.className = "purple";
            } 
        }
        //row.innerHTML += "</td>";
        var marker = L.marker([data.results[i].coordinates.latitude, data.results[i].coordinates.longitude]).addTo(Mymap2);  
    }
    
})
},4000);});
