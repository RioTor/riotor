
Events = new Mongo.Collection('events');

EventUpdates = new Mongo.Collection('event_updates');

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
