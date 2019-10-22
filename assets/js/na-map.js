function initMap() {
    var map = new google.maps.Map(document.getElementById("na-map"), {
        zoom: 3,
        center: {
            lat: 49.782406,
            lng: -99.909041
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [{
        lat: 50.115033,
        lng: -122.948175
    }, {
        lat: 51.4254,
        lng: -116.1773
    }, {
        lat: 38.9353,
        lng: -119.9400
    }, {
        lat: 41.2160,
        lng: -111.8569
    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
