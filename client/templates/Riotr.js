/*Meteor.startup(function() {
   $(window).resize(function(){
      $('#map').css('height', window.innerHeight - 100);  
   });
   $(window).resize();
});
*/
//temporary test markers
var Markers = new Mongo.Collection('markers');
Meteor.subscribe('markers');
Template.Riotr.rendered = function() {

   
   var map = L.map('map', {
      doubleClickZoom: false
   }).setView([36.9719, -122.0264], 13);
   
   L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);
   Markers.insert({lat: 5, lng: 5});

   map.on('dblclick', function(event) {
      Markers.insert({lat: event.latlng.lat, lng: event.latlng.lng});
      console.log (event.latlng.lat, event.latlng.lng);
   });
   
   var query = Markers.find();
   query.observe({
      added: function (document) {
         var marker = L.marker(document.latlng).addTo(map)
         .on('click', function(event) {
            map.removeLayer(marker);
            Markers.remove({_id: document._id});
         });
      }
   });
   
}
