TaskManagerMVC.module('TaskList', function(TaskList, App, Backbone, Marionette, $, _) {

  TaskList.Router = Marionette.AppRouter.extend({
    appRoutes: {
      '*filter': 'filterItems'
    }
  });
  
  TaskList.Controller = function() {
    var startTask = {title: 'first task'};
    
    this.taskList = new App.Tasks.TaskList(startTask);
  };
  
  _.extend(TaskList.Controller.prototype, {
    start: function() {
      this.showTaskList(this.taskList);
      this.taskList.fetch();
    },
    showTaskList: function(taskList) {
      App.main.show(new TaskList.Views.ListView({
        collection: taskList
      }));
    },
    filterItems: function(filter) {
      App.vent.trigger('todoList:filter', filter.trim() || '');
    }
  });

  TaskList.addInitializer(function() {
    var controller = new TaskList.Controller();
    new TaskList.Router({
      controller: controller
    });
    controller.start();
  });
});
