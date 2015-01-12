if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.body.helpers({
    isHomePage: function () {
      return Router.current().route.getName() === undefined;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
