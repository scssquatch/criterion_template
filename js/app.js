App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('films');
  this.resource('photos');
  this.resource('links');
  this.resource('contact');
});
