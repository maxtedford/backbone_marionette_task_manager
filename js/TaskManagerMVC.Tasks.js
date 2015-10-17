TaskManagerMVC.module('Tasks', function(Tasks, App, Backbone, Marionette, $, _) {

  var localStorageKey = 'tasks-backbone-marionettejs';
  
  Tasks.Task = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage(localStorageKey),
    defaults: {
      title: 'default title',
      completed: false
    }
  });
  
  Tasks.TaskList = Backbone.Collection.extend({
    model: Tasks.Task,
    localStorage: new Backbone.LocalStorage(localStorageKey)
  });
});
