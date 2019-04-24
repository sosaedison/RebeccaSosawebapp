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
       var locations = [];
   var string="";
    for(i in data.results){ 
        if(locations.indexOf(data.results[i].location)===-1)
        {
            locations.push(data.results[i].location);
        }
        }

        for(k in locations)
        {
            var countpm25;
            countpm25=0;
            var counto3;
            counto3=0;
            var countpm10;
            countpm10=0;
            var countco;
            countco=0;
             var countno2;
            countno2=0;
            var countso2;
            countso2=0;
        for(j in data.results)
        {
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto3=counto3+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                    countco=countco+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                    countpm25=countpm25+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                    countpm10=countpm10+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                    countso2=countso2+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                    countno2=countno2+1;
                     
            }
                  
        }

        for(g in locations)
        {
              var countpm252;
            countpm252=0;
            var counto32;
            counto32=0;
            var countpm102;
            countpm102=0;
            var countco2;
            countco2=0;
             var countno22;
            countno22=0;
            var countso22;
            countso22=0;
            var o3avg;
            o3avg=0;
            var coavg;
            coavg=0;
            var pm25avg;
            pm25avg=0;
            var pm10avg;
            pm10avg=0;
            var so2avg;
            so2avg=0;
            var no2avg;
            no2avg=0;
        for(j in data.results)
        {
            
            
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto32++;
                    o3avg=o3avg+data.results[j].value;
                    
        
            }
                         if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                     countco2++;
                    coavg=coavg+data.results[j].value;
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                       countpm252++;
                    pm25avg=pm25avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                       countpm102++;
                    pm10avg=pm10avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                          countso22++;
                    so2avg=so2avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                         countno22++;
                    no2avg=no2avg+data.results[j].value;

                     
            }if(counto3===counto32&&countpm25===countpm252&&countco===countco2&&countpm10===countpm102&&countso2===countso22&&countno2===countno22)
                {
                    var marker = L.marker([data.results[j].coordinates.latitude, data.results[j].coordinates.longitude]).addTo(Mymap);
                    marker.bindPopup(locations[k]+"<br> Average Value of no2 is"+no2avg/countno2+"<br> Average Value of so2 is"+so2avg/countso2+"</br> Average Value of O3 is"+o3avg/counto3+"</br> Average Value of co is"+coavg/countco2+"</br> Average Value of PM2.5 is"+pm25avg/countpm25+"</br> Average Value of pm10 is"+pm10avg/countpm10).openPopup();
                }
                  
        }
        
        }
        }

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
    }
})
    GetJSON(url4, function(data) {
        var locations = [];
   var string="";
    for(i in data.results){ 
        if(locations.indexOf(data.results[i].location)===-1)
        {
            locations.push(data.results[i].location);
        }
        }

        for(k in locations)
        {
            var countpm25;
            countpm25=0;
            var counto3;
            counto3=0;
            var countpm10;
            countpm10=0;
            var countco;
            countco=0;
             var countno2;
            countno2=0;
            var countso2;
            countso2=0;
        for(j in data.results)
        {
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto3=counto3+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                    countco=countco+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                    countpm25=countpm25+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                    countpm10=countpm10+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                    countso2=countso2+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                    countno2=countno2+1;
                     
            }
                  
        }

        for(g in locations)
        {
              var countpm252;
            countpm252=0;
            var counto32;
            counto32=0;
            var countpm102;
            countpm102=0;
            var countco2;
            countco2=0;
             var countno22;
            countno22=0;
            var countso22;
            countso22=0;
            var o3avg;
            o3avg=0;
            var coavg;
            coavg=0;
            var pm25avg;
            pm25avg=0;
            var pm10avg;
            pm10avg=0;
            var so2avg;
            so2avg=0;
            var no2avg;
            no2avg=0;
        for(j in data.results)
        {
            
            
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto32++;
                    o3avg=o3avg+data.results[j].value;
                    
        
            }
                         if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                     countco2++;
                    coavg=coavg+data.results[j].value;
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                       countpm252++;
                    pm25avg=pm25avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                       countpm102++;
                    pm10avg=pm10avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                          countso22++;
                    so2avg=so2avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                         countno22++;
                    no2avg=no2avg+data.results[j].value;

                     
            }if(counto3===counto32&&countpm25===countpm252&&countco===countco2&&countpm10===countpm102&&countso2===countso22&&countno2===countno22)
                {
                    var marker = L.marker([data.results[j].coordinates.latitude, data.results[j].coordinates.longitude]).addTo(Mymap2);
                    marker.bindPopup(locations[k]+"<br> Average Value of no2 is"+no2avg/countno2+"<br> Average Value of so2 is"+so2avg/countso2+"</br> Average Value of O3 is"+o3avg/counto3+"</br> Average Value of co is"+coavg/countco2+"</br> Average Value of PM2.5 is"+pm25avg/countpm25+"</br> Average Value of pm10 is"+pm10avg/countpm10).openPopup();
                }
                  
        }
        
        }
        }

     $("#table2 tr").remove(); 
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
       var locations = [];
   var string="";
    for(i in data.results){ 
        if(locations.indexOf(data.results[i].location)===-1)
        {
            locations.push(data.results[i].location);
        }
        }

        for(k in locations)
        {
            var countpm25;
            countpm25=0;
            var counto3;
            counto3=0;
            var countpm10;
            countpm10=0;
            var countco;
            countco=0;
             var countno2;
            countno2=0;
            var countso2;
            countso2=0;
        for(j in data.results)
        {
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto3=counto3+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                    countco=countco+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                    countpm25=countpm25+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                    countpm10=countpm10+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                    countso2=countso2+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                    countno2=countno2+1;
                     
            }
                  
        }

        for(g in locations)
        {
              var countpm252;
            countpm252=0;
            var counto32;
            counto32=0;
            var countpm102;
            countpm102=0;
            var countco2;
            countco2=0;
             var countno22;
            countno22=0;
            var countso22;
            countso22=0;
            var o3avg;
            o3avg=0;
            var coavg;
            coavg=0;
            var pm25avg;
            pm25avg=0;
            var pm10avg;
            pm10avg=0;
            var so2avg;
            so2avg=0;
            var no2avg;
            no2avg=0;
        for(j in data.results)
        {
            
            
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto32++;
                    o3avg=o3avg+data.results[j].value;
                    
        
            }
                         if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                     countco2++;
                    coavg=coavg+data.results[j].value;
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                       countpm252++;
                    pm25avg=pm25avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                       countpm102++;
                    pm10avg=pm10avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                          countso22++;
                    so2avg=so2avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                         countno22++;
                    no2avg=no2avg+data.results[j].value;

                     
            }if(counto3===counto32&&countpm25===countpm252&&countco===countco2&&countpm10===countpm102&&countso2===countso22&&countno2===countno22)
                {
                    var marker = L.marker([data.results[j].coordinates.latitude, data.results[j].coordinates.longitude]).addTo(Mymap);
                    marker.bindPopup(locations[k]+"<br> Average Value of no2 is"+no2avg/countno2+"<br> Average Value of so2 is"+so2avg/countso2+"</br> Average Value of O3 is"+o3avg/counto3+"</br> Average Value of co is"+coavg/countco2+"</br> Average Value of PM2.5 is"+pm25avg/countpm25+"</br> Average Value of pm10 is"+pm10avg/countpm10).openPopup();
                }
                  
        }
        
        }
        }

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
    }
})
    GetJSON(url4, function(data) {
        var locations = [];
   var string="";
    for(i in data.results){ 
        if(locations.indexOf(data.results[i].location)===-1)
        {
            locations.push(data.results[i].location);
        }
        }

        for(k in locations)
        {
            var countpm25;
            countpm25=0;
            var counto3;
            counto3=0;
            var countpm10;
            countpm10=0;
            var countco;
            countco=0;
             var countno2;
            countno2=0;
            var countso2;
            countso2=0;
        for(j in data.results)
        {
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto3=counto3+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                    countco=countco+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                    countpm25=countpm25+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                    countpm10=countpm10+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                    countso2=countso2+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                    countno2=countno2+1;
                     
            }
                  
        }

        for(g in locations)
        {
              var countpm252;
            countpm252=0;
            var counto32;
            counto32=0;
            var countpm102;
            countpm102=0;
            var countco2;
            countco2=0;
             var countno22;
            countno22=0;
            var countso22;
            countso22=0;
            var o3avg;
            o3avg=0;
            var coavg;
            coavg=0;
            var pm25avg;
            pm25avg=0;
            var pm10avg;
            pm10avg=0;
            var so2avg;
            so2avg=0;
            var no2avg;
            no2avg=0;
        for(j in data.results)
        {
            
            
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto32++;
                    o3avg=o3avg+data.results[j].value;
                    
        
            }
                         if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                     countco2++;
                    coavg=coavg+data.results[j].value;
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                       countpm252++;
                    pm25avg=pm25avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                       countpm102++;
                    pm10avg=pm10avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                          countso22++;
                    so2avg=so2avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                         countno22++;
                    no2avg=no2avg+data.results[j].value;

                     
            }if(counto3===counto32&&countpm25===countpm252&&countco===countco2&&countpm10===countpm102&&countso2===countso22&&countno2===countno22)
                {
                    var marker = L.marker([data.results[j].coordinates.latitude, data.results[j].coordinates.longitude]).addTo(Mymap2);
                    marker.bindPopup(locations[k]+"<br> Average Value of no2 is"+no2avg/countno2+"<br> Average Value of so2 is"+so2avg/countso2+"</br> Average Value of O3 is"+o3avg/counto3+"</br> Average Value of co is"+coavg/countco2+"</br> Average Value of PM2.5 is"+pm25avg/countpm25+"</br> Average Value of pm10 is"+pm10avg/countpm10).openPopup();
                }
                  
        }
        
        }
        }
$("#table2 tr").remove(); 
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
var url3=  "https://api.openaq.org/v1/measurements?coordinates="+latcent+","+ loncent+"&radius="+radius+"&date_from="+ prior+"&date_to="+ date+limit;
var url4=  "https://api.openaq.org/v1/measurements?coordinates="+latcent2+","+ loncent2+"&radius="+radius2+"&date_from="+ prior+"&date_to="+ date+limit;
GetJSON(url3, function(data) {
   var locations = [];
   var string="";
    for(i in data.results){ 
        if(locations.indexOf(data.results[i].location)===-1)
        {
            locations.push(data.results[i].location);
        }
        }

        for(k in locations)
        {
            var countpm25;
            countpm25=0;
            var counto3;
            counto3=0;
            var countpm10;
            countpm10=0;
            var countco;
            countco=0;
             var countno2;
            countno2=0;
            var countso2;
            countso2=0;
        for(j in data.results)
        {
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto3=counto3+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                    countco=countco+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                    countpm25=countpm25+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                    countpm10=countpm10+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                    countso2=countso2+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                    countno2=countno2+1;
                     
            }
                  
        }

        for(g in locations)
        {
              var countpm252;
            countpm252=0;
            var counto32;
            counto32=0;
            var countpm102;
            countpm102=0;
            var countco2;
            countco2=0;
             var countno22;
            countno22=0;
            var countso22;
            countso22=0;
            var o3avg;
            o3avg=0;
            var coavg;
            coavg=0;
            var pm25avg;
            pm25avg=0;
            var pm10avg;
            pm10avg=0;
            var so2avg;
            so2avg=0;
            var no2avg;
            no2avg=0;
        for(j in data.results)
        {
            
            
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto32++;
                    o3avg=o3avg+data.results[j].value;
                    
        
            }
                         if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                     countco2++;
                    coavg=coavg+data.results[j].value;
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                       countpm252++;
                    pm25avg=pm25avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                       countpm102++;
                    pm10avg=pm10avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                          countso22++;
                    so2avg=so2avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                         countno22++;
                    no2avg=no2avg+data.results[j].value;

                     
            }if(counto3===counto32&&countpm25===countpm252&&countco===countco2&&countpm10===countpm102&&countso2===countso22&&countno2===countno22)
                {
                    var marker = L.marker([data.results[j].coordinates.latitude, data.results[j].coordinates.longitude]).addTo(Mymap);
                    marker.bindPopup(locations[k]+"<br> Average Value of no2 is"+no2avg/countno2+"<br> Average Value of so2 is"+so2avg/countso2+"</br> Average Value of O3 is"+o3avg/counto3+"</br> Average Value of co is"+coavg/countco2+"</br> Average Value of PM2.5 is"+pm25avg/countpm25+"</br> Average Value of pm10 is"+pm10avg/countpm10).openPopup();
                }
                  
        }
        
        }
        }

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
   var locations = [];
   var string="";
    for(i in data.results){ 
        if(locations.indexOf(data.results[i].location)===-1)
        {
            locations.push(data.results[i].location);
        }
        }

        for(k in locations)
        {
            var countpm25;
            countpm25=0;
            var counto3;
            counto3=0;
            var countpm10;
            countpm10=0;
            var countco;
            countco=0;
             var countno2;
            countno2=0;
            var countso2;
            countso2=0;
        for(j in data.results)
        {
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto3=counto3+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                    countco=countco+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                    countpm25=countpm25+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                    countpm10=countpm10+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                    countso2=countso2+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                    countno2=countno2+1;
                     
            }
                  
        }

        for(g in locations)
        {
              var countpm252;
            countpm252=0;
            var counto32;
            counto32=0;
            var countpm102;
            countpm102=0;
            var countco2;
            countco2=0;
             var countno22;
            countno22=0;
            var countso22;
            countso22=0;
            var o3avg;
            o3avg=0;
            var coavg;
            coavg=0;
            var pm25avg;
            pm25avg=0;
            var pm10avg;
            pm10avg=0;
            var so2avg;
            so2avg=0;
            var no2avg;
            no2avg=0;
        for(j in data.results)
        {
            
            
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto32++;
                    o3avg=o3avg+data.results[j].value;
                    
        
            }
                         if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                     countco2++;
                    coavg=coavg+data.results[j].value;
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                       countpm252++;
                    pm25avg=pm25avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                       countpm102++;
                    pm10avg=pm10avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                          countso22++;
                    so2avg=so2avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                         countno22++;
                    no2avg=no2avg+data.results[j].value;

                     
            }if(counto3===counto32&&countpm25===countpm252&&countco===countco2&&countpm10===countpm102&&countso2===countso22&&countno2===countno22)
                {
                    var marker = L.marker([data.results[j].coordinates.latitude, data.results[j].coordinates.longitude]).addTo(Mymap);
                    marker.bindPopup(locations[k]+"<br> Average Value of no2 is"+no2avg/countno2+"<br> Average Value of so2 is"+so2avg/countso2+"</br> Average Value of O3 is"+o3avg/counto3+"</br> Average Value of co is"+coavg/countco2+"</br> Average Value of PM2.5 is"+pm25avg/countpm25+"</br> Average Value of pm10 is"+pm10avg/countpm10).openPopup();
                }
                  
        }
        
        }
        }

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
   
    GetJSON(url4, function(data) {
        var locations = [];
   var string="";
    for(i in data.results){ 
        if(locations.indexOf(data.results[i].location)===-1)
        {
            locations.push(data.results[i].location);
        }
        }

        for(k in locations)
        {
            var countpm25;
            countpm25=0;
            var counto3;
            counto3=0;
            var countpm10;
            countpm10=0;
            var countco;
            countco=0;
             var countno2;
            countno2=0;
            var countso2;
            countso2=0;
        for(j in data.results)
        {
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto3=counto3+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                    countco=countco+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                    countpm25=countpm25+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                    countpm10=countpm10+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                    countso2=countso2+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                    countno2=countno2+1;
                     
            }
                  
        }

        for(g in locations)
        {
              var countpm252;
            countpm252=0;
            var counto32;
            counto32=0;
            var countpm102;
            countpm102=0;
            var countco2;
            countco2=0;
             var countno22;
            countno22=0;
            var countso22;
            countso22=0;
            var o3avg;
            o3avg=0;
            var coavg;
            coavg=0;
            var pm25avg;
            pm25avg=0;
            var pm10avg;
            pm10avg=0;
            var so2avg;
            so2avg=0;
            var no2avg;
            no2avg=0;
        for(j in data.results)
        {
            
            
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto32++;
                    o3avg=o3avg+data.results[j].value;
                    
        
            }
                         if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                     countco2++;
                    coavg=coavg+data.results[j].value;
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                       countpm252++;
                    pm25avg=pm25avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                       countpm102++;
                    pm10avg=pm10avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                          countso22++;
                    so2avg=so2avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                         countno22++;
                    no2avg=no2avg+data.results[j].value;

                     
            }if(counto3===counto32&&countpm25===countpm252&&countco===countco2&&countpm10===countpm102&&countso2===countso22&&countno2===countno22)
                {
                    var marker = L.marker([data.results[j].coordinates.latitude, data.results[j].coordinates.longitude]).addTo(Mymap2);
                    marker.bindPopup(locations[k]+"<br> Average Value of no2 is"+no2avg/countno2+"<br> Average Value of so2 is"+so2avg/countso2+"</br> Average Value of O3 is"+o3avg/counto3+"</br> Average Value of co is"+coavg/countco2+"</br> Average Value of PM2.5 is"+pm25avg/countpm25+"</br> Average Value of pm10 is"+pm10avg/countpm10).openPopup();
                }
                  
        }
        
        }
        }
$("#table2 tr").remove(); 
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
   
    GetJSON(url4, function(data) {
        var locations = [];
   var string="";
    for(i in data.results){ 
        if(locations.indexOf(data.results[i].location)===-1)
        {
            locations.push(data.results[i].location);
        }
        }

        for(k in locations)
        {
            var countpm25;
            countpm25=0;
            var counto3;
            counto3=0;
            var countpm10;
            countpm10=0;
            var countco;
            countco=0;
             var countno2;
            countno2=0;
            var countso2;
            countso2=0;
        for(j in data.results)
        {
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto3=counto3+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                    countco=countco+1;
                     
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                    countpm25=countpm25+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                    countpm10=countpm10+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                    countso2=countso2+1;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                    countno2=countno2+1;
                     
            }
                  
        }

        for(g in locations)
        {
              var countpm252;
            countpm252=0;
            var counto32;
            counto32=0;
            var countpm102;
            countpm102=0;
            var countco2;
            countco2=0;
             var countno22;
            countno22=0;
            var countso22;
            countso22=0;
            var o3avg;
            o3avg=0;
            var coavg;
            coavg=0;
            var pm25avg;
            pm25avg=0;
            var pm10avg;
            pm10avg=0;
            var so2avg;
            so2avg=0;
            var no2avg;
            no2avg=0;
        for(j in data.results)
        {
            
            
            if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="o3"))
            {
                    counto32++;
                    o3avg=o3avg+data.results[j].value;
                    
        
            }
                         if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="co"))
            {
                     countco2++;
                    coavg=coavg+data.results[j].value;
            }
             if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm25"))
            {
                       countpm252++;
                    pm25avg=pm25avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="pm10"))
            {
                       countpm102++;
                    pm10avg=pm10avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="so2"))
            {
                          countso22++;
                    so2avg=so2avg+data.results[j].value;
                     
            }
               if(((data.results[j].location)===locations[k]) &&(data.results[j].parameter==="no2"))
            {
                         countno22++;
                    no2avg=no2avg+data.results[j].value;

                     
            }if(counto3===counto32&&countpm25===countpm252&&countco===countco2&&countpm10===countpm102&&countso2===countso22&&countno2===countno22)
                {
                    var marker = L.marker([data.results[j].coordinates.latitude, data.results[j].coordinates.longitude]).addTo(Mymap2);
                    marker.bindPopup(locations[k]+"<br> Average Value of no2 is"+no2avg/countno2+"<br> Average Value of so2 is"+so2avg/countso2+"</br> Average Value of O3 is"+o3avg/counto3+"</br> Average Value of co is"+coavg/countco2+"</br> Average Value of PM2.5 is"+pm25avg/countpm25+"</br> Average Value of pm10 is"+pm10avg/countpm10).openPopup();
                }
                  
        }
        
        }
        }
$("#table2 tr").remove(); 
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
    }
    
})
},4000);});
function map1FullScreen(){
    var Mymap= document.getElementById("map");
    if(Mymap.requestFullscreen)
        Mymap.requestFullscreen();
    else if(Mymap.mozRequestFullscreen)
        Mymap.mozRequestFullscreen();
    else if(Mymap.webkitRequestFullscreen)
        Mymap.webkitRequestFullscreen();
    else if(Mymap.msRequestFullscreen)
        Mymap.msRequestFullscreen();
    else
        console.log("foobar");
}
function closeFullScreen1(){
    var Mymap= document.getElementById("map");
    if(Mymap.exitFullscreen)
        Mymap.exitFullscreen();
    else if(Mymap.mozCancelFullscreen)
        Mymap.mozCancelFullscreen();
    else if(Mymap.webkitExitFullscreen)
        Mymap.webkitExitFullscreen();
    else if(Mymap.msExitFullscreen)
        Mymap.msExitFullscreen();
    else
        console.log("foobar");
}
function map2FullScreen(){
    var Mymap= document.getElementById("map2");
    if(Mymap.requestFullscreen)
        Mymap.requestFullscreen();
    else if(Mymap.mozRequestFullscreen)
        Mymap.mozRequestFullscreen();
    else if(Mymap.webkitRequestFullscreen)
        Mymap.webkitRequestFullscreen();
    else if(Mymap.msRequestFullscreen)
        Mymap.msRequestFullscreen();
    else
        console.log("foobar");
}
function closeFullScreen2(){
    var Mymap= document.getElementById("map2");
    if(Mymap.exitFullscreen)
        Mymap.exitFullscreen();
    else if(Mymap.mozCancelFullscreen)
        Mymap.mozCancelFullscreen();
    else if(Mymap.webkitExitFullscreen)
        Mymap.webkitExitFullscreen();
    else if(Mymap.msExitFullscreen)
        Mymap.msExitFullscreen();
    else
        console.log("foobar");
}

