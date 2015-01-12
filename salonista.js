
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.body.helpers({
    isHomePage: function () {
      return Router.current().route.getName() === undefined;
    }
  });

  Template.appointments.helpers({
    serviceCategories: function () {
      return ['style', 'color', 'texture', 'treatments', 'skin', 'eyes', 'makeup', 'waxing']
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // nope
  });
}
