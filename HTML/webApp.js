let countries = "https://api.openaq.org/v1/countries";
let cities = 'https://api.openaq.org/v1/cities?limit=1000';
let fetches = 'https://api.openaq.org/v1/fetches';

var app = new Vue ({

    el: '#app',

    data: {
        map : 'Hello World',
        reqResults: [],
        cityNames: [],
        count: [],
        country: [],
        locations: []
    }
});

function Init() {
    let request = {
        url: cities,
        dataType: "json",
        success: ParseResults
    };
    $.ajax(request);

}

function toString(data) {
    console.log(data.results.length)
}

function ParseResults(data) {

    var i = 0;
    var x;
    let f;
    for(var k in data)
        console.log(data[k]);
        i++;
        if (i == 1)
            app.reqResults = data[k];

    for (x in app.reqResults)
        app.count.push(app.reqResults[x].count);

    for (f = 0; f < app.count.length; f++)
        console.log(app.count[f]);
}



