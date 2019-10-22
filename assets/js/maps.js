function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 45.902588,
            lng: 6.956840
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [{
        lat: 45.5082,
        lng: 6.6766
    }, {
        lat: 45.298,
        lng: 6.5815
    }, {
        lat: 45.0176,
        lng: 6.1249
    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
