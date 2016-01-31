Template.events.helpers({
  'events': function(){
    return Events.find({}).fetch();
  },
  'eventUpdateCount': function(){
    var count = 0;
    //EventUpdates.find({ "eventID": { $in: [ false ] }).fetch();

    return count;
  }
});

Template.events.events({
  'click .list-group-item': function(){
    console.log(this._id);
    Session.set('currentEventID', this._id);
  }
});