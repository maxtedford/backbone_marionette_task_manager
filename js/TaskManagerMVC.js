var TaskManagerMVC = new Backbone.Marionette.Application();

TaskManagerMVC.addRegions({
  main: '#main'
});

TaskManagerMVC.on('start', function() {
  Backbone.history.start();
});
