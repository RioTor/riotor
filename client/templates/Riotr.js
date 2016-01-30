Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
/*
Template.update_list.helpers({
  get_updates: function () {
  return event_updates.find();
}
});
*/

Meteor.startup(function() {
   $(window).resize(function(){
      $('#map').css('height', window.innerHeight);
   });
   $(window).resize();
});

//temporary test markers
//var Markers = new Mongo.Collection('markers');
//Meteor.subscribe('markers');
Template.Riotr.rendered = function() {


   var map = L.map('map', {
      doubleClickZoom: false
   }).setView([36.9719, -122.0264], 13);
  // L.marker([36.9719, -122.0264]).addTo(map);
   L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
   L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);
   //Markers.insert({lat: 5, lng: 5});

   map.on('dblclick', function(event) {
      EventUpdates.insert({lat: event.latlng.lat, lng: event.latlng.lng});
      console.log (event.latlng.lat, event.latlng.lng);
   });

   //var query = EventUpdates.find();
   EventUpdates.find().observe({
      added: function (document) {

         var marker = L.marker([document.lat,document.lng]);
         //L.marker([36.9719, -122.0264]).addTo(map);
         marker.addTo(map);
         marker.on('click', function(event) {
            map.removeLayer(marker);
            EventUpdates.remove({_id: document._id});
         });
         console.log(marker);
      }
   });

}
