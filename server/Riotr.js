
  Meteor.startup(function () {
    if(Events.find({}).count() < 1){
      Events.insert({
        eventName: "Event Name",
        zip: 95076,
        desc: "this is a test description",
        creatorID: "fds89v38he2ff2e",
        dateCreated: new Date()
      });

      Events.insert({
        eventName: "Event Name 2",
        zip: 94116,
        desc: "this is a test description again",
        creatorID: "fds89v38he2ff2e",
        dateCreated: new Date()
      });
    }
  });
