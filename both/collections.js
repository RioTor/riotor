
Events = new Mongo.Collection('events');
EventUpdates = new Mongo.Collection('eventupdates');

Events.attachSchema(new SimpleSchema({
  eventName: {
    type: String,
    label: "Event Name",
    max: 200,
    optional: false
  },
  zip: {
    type: Number,
    label: "Zip Code"
  },
  dateCreated: {
    type: Date,
    label: "date this event was created",
    optional: true
  },
  desc: {
    type: String,
    label: "Brief summary of event",
    optional: true,
    max: 1000
  }
}));

/*
EventUpdateSchema = new SimpleSchema({

is_private: {
  type: Boolean,
  label: "is_private",
  optional: true // change to false later
},
description : {
  type: String,
  label: "description",
  optional: false //
},
lat : {
  type: Number,
  label: "lat",
  optional: false
},
lon : {
  type: Number,
  label: "lon",
  optional: false
}

});

EventUpdates.attachSchema( EventUpdateSchema );
*/

Meteor.startup( function () {
    console.log(EventUpdates.find({}).count());
  /*  if(EventUpdates.find({}).count() < 1){
    console.log("ADDING UPDATES");
    EventUpdates.insert({is_private: false, description: "That place",lat: 36.97,lon:-122.0158});
    EventUpdates.insert({is_private: false, description: "The place",lat: 36.971,lon:-122.018});
    EventUpdates.insert({is_private: false, description: "No cops here (we think)",lat: 36.969,lon:-122.0245});
  }*/

});
