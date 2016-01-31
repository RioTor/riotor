Template.update_item.events({
   'click .list-group-item': function(){
  // leafletData.getMap('map').setView([this.lat,this.lng], 13);
      map.setView([this.lat,this.lng], 13);
      for (marker in markers){
         var lat = markers[marker].lat;
         var lng = markers[marker].lng;
         if (lat == this.lat && lng == this.lng){
            markers[marker].openPopup();
         }
      }
      //EventUpdates.find(this.uid).openPopup();
   }
});