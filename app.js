//STEPS

//#1 Grab the Google Map from google (we did this in the HTML)

//#2 Provide a callback function to construct the map, and place it on the DOM

//#3 Find the busses,

//#4 Take bus locations, and make markers out of them

var map;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });
    console.log('initMap')
    var url = "http://apis.is/bus/realtime";
}
