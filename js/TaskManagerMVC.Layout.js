TaskManagerMVC.module('Layout', function(Layout, App, Backbone, Marionette, $, _){
  
  Layout.Header = Backbone.Marionette.ItemView.extend({
    template: '#template-header',
    ui: {
      input: '#new-task'
    },
    events: {
      'keypress #new-task': 'onInputKeypress',
      'blur #new-task': 'onTaskBlur'
    },
    onInputKeypress: function(event) {
      var ENTER_KEY = 13;
      var taskText = this.ui.input.val().trim();

      if (event.which === ENTER_KEY && taskText) {
        this.createTask(taskText);
      }
    },
    onTaskBlur: function(){
      var taskText = this.ui.input.val().trim();
      this.createTask(taskText);
    },
    createTask: function(taskText) {
      if (taskText.trim() === ""){ return; }
      var task = new Task();
      this.create(task, {
        title: taskText
      });
      this.completeAdd();
    },
    completeAdd: function() {
      this.ui.input.val('');
    }
  })
});
