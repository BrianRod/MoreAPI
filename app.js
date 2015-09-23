var app = angular.module('app', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http){

	 $http.get('http://apis.is/bus/realtime').then(function(busData){
		
		$scope.busData = busData.data.results;

		$scope.markers = [];

	var mapOptions = {
		zoom: 10,
		center: new google.maps.LatLng(64.123, -21.788),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	}

	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	 var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.x, info.y),
            start: info.from,
           	end: info.to
        });
        marker.content = '<div class="infoWindowContent">' + info.end + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
        	infoWindow.setContent('<h2>' + marker.start + '</h2>' + marker.content);
        	infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
        }

        for(i = 0;i < busData.data.results.busses.length;i++)
        {
        	createMarker(busData.data.results.busses[i]);
        }

	});
	
}]);