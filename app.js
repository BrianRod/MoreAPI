//STEPS

//#1 Grab the Google Map from google (we did this in the HTML)

//#2 Provide a callback function to construct the map, and place it on the DOM

//#3 Request realtime bus locations,

//#4 Take bus locations, and make markers out of them

function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 64.135491, lng: -21.896149},
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });

    $.get("http://apis.is/bus/realtime", function(data){
        console.log(data)
        var busnmbr1 = data.results[0];
        busnmbr1.busses.forEach(function(bus){
            var busLocale = {
                lat: bus.x,
                lng: bus.y
            };
            var marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: busLocale
            });
        });
    });
};
