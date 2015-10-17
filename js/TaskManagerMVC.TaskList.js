TaskManagerMVC.module('TaskList', function(TaskList, App, Backbone, Marionette, $, _) {

  TaskList.Router = Marionette.AppRouter.extend({
    appRoutes: {
      '*filter': 'filterItems'
    }
  });
  
  TaskList.Controller = function() {
    this.taskList = new App.Tasks.TaskList();
  };
  
  _.extend(TaskList.Controller.prototype, {
    start: function() {
      this.showHeader(this.taskList);
      this.showTaskList(this.taskList);
      this.taskList.fetch();
    },
    showTaskList: function(taskList) {
      App.main.show(new TaskList.Views.ListView({
        collection: taskList
      }));
    },
    showHeader: function(taskList) {
      var header = new App.Layout.Header({
        collection: taskList
      });
      App.header.show(header);
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
