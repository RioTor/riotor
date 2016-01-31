Meteor.startup(function() {
    $(window).resize(function() {
        $('#map').css('height', window.innerHeight);
        //$('#confirm_update_dialog').css('margin-left',window.innerWidth / 2 - 200);
    });
    $('#map').css('height', window.innerHeight);

    //$(window).resize();
});

//temporary test markers
//var Markers = new Mongo.Collection('markers');
//Meteor.subscribe('markers');
Template.Riotr.rendered = function() {
    $('#map').css('height', window.innerHeight);

    var map = L.map('map', {
        doubleClickZoom: false
    }).setView([36.9719, -122.0264], 13);

    // L.marker([36.9719, -122.0264]).addTo(map);
    L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
    L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);
    //Markers.insert({lat: 5, lng: 5});

    map.on('dblclick', function(event) {
        EventUpdates.insert({
            lat: event.latlng.lat,
            lng: event.latlng.lng,
            created_on: new Date()
        });
        console.log(event.latlng.lat, event.latlng.lng);
    });

    //var query = EventUpdates.find();
    EventUpdates.find({"eventID": {$in: [Session.get("currentEventID")] }}).observe({
        added: function(document) {
            // if the doc has lat lngs then add to map
            if(document.lat && document.lng){
                var marker = L.marker([document.lat, document.lng]);
                //L.marker([36.9719, -122.0264]).addTo(map);
                marker.addTo(map);
                marker.on('click', function(event) {
                    map.removeLayer(marker);
                    EventUpdates.remove({
                        _id: document._id
                    });
                });
            }

        }
    });

    // on modal hide create new point to set latlng from
    $('#confirmText').on('click', function () {
        // create point centered on map

        var divIcon = L.divIcon({className: 'div-icon'});
        var marker = L.marker(map.getCenter(), {icon: divIcon}).addTo(map);

        map.on('move', function () {
            marker.setLatLng(map.getCenter());
            //console.log(map.getCenter());
        });
        //Dragend event of map for update marker position
        map.on('dragend', function(e) {
            var cnt = map.getCenter();
            var position = marker.getLatLng();

            lat = Number(position['lat']);
            lng = Number(position['lng']);
            Session.set('latest_position',position);

            EventUpdates.update(Session.get("newestUpdateID"), {
                $set: {lat: lat, lng: lng, created_on: new Date(), eventID: Session.get("currentEventID")}
            });

        });
        $('#confirm_submit').on('click', function(){
          map.removeLayer(marker);
        });

    });

}
