TaskManagerMVC.module('Tasks', function(Tasks, App, Backbone, Marionette, $, _) {

  var localStorageKey = 'tasks-backbone-marionettejs';
  
  Tasks.Task = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage(localStorageKey),
    defaults: {
      title: 'default title',
      completed: false
    },
    initialize: function() {
      if (this.isNew()) {
        this.set('created', Date.now());
      }
    }
  });

  Tasks.TaskList = Backbone.Collection.extend({
    model: Tasks.Task,
    localStorage: new Backbone.LocalStorage(localStorageKey),
  });
});
