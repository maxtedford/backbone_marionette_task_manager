TaskManagerMVC.module('TaskList', function(TaskList, App, Backbone, Marionette, $, _) {

  TaskList.Controller = function() {
    this.taskList = new App.Tasks.TaskList();
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
