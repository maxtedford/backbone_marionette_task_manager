TaskManagerMVC.module('Tasks', function(Tasks, App, Backbone, Marionette, $, _) {

  var localStorageKey = 'tasks-backbone-marionettejs';
  
  Tasks.Task = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage(localStorageKey),
    defaults: {
      title: 'default title',
      completed: false
    },
    toggle: function() {
      return this.set('completed', !this.isCompleted());
    },
    isCompleted: function() {
      return this.get('completed');
    }
  });
  
  Tasks.TaskList = Backbone.Collection.extend({
    model: Tasks.Task,
    localStorage: new Backbone.LocalStorage(localStorageKey),
    getCompleted: function() {
      return this.filter(this._isCompleted);
    },
    getActive: function() {
      return this.reject(this._isCompleted);
    },
    _isCompleted: function(todo) {
      return todo.isCompleted();
    }
  });
});
