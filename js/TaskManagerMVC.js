var TaskManagerMVC = new Backbone.Marionette.Application();

TaskManagerMVC.addRegions({
  header: '#header',
  main: '#main'
});

TaskManagerMVC.on('start', function() {
  Backbone.history.start();
});
