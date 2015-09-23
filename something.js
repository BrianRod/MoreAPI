        var map;

        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.HYBRID
          });

          var issURL = "http://api.open-notify.org/iss-now.json?callback=?"
          $.getJSON(issURL, function(data) {
              var issLocal = {lat: data.iss_position.latitude, lng: data.iss_position.longitude};

              map = new google.maps.Map(document.getElementById('map'), {
                center: issLocal,
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.HYBRID
              });


                marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: issLocal,
                title: "International Space Station"
              });
            })
        };