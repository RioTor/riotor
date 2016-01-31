Template.events.helpers({
  'events': function(){
    return Events.find({}).fetch();
  },
  'eventUpdateCount': function(){
    var count = EventUpdates.find({ "eventID": { $in: [ this._id ] }}).count();
    return count;
  }
});

Template.events.events({
  'click .list-group-item': function(){
    Session.set('currentEventID', this._id);
  }
});