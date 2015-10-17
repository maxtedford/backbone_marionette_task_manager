TaskManagerMVC.module('TaskList.Views', function(Views, App, Backbone, Marionette, $, _) {
  
  Views.ItemView = Marionette.ItemView.extend({
    tagName: 'li',
    template: 'template-taskItemView',
    initialize: function() {
      this.bindTo(this.model, 'change', this.render, this);
    },
    onRender: function() {
      this.$el.removeClass('active completed');
      if (this.model.get('completed')) {
        this.$el.addClass('completed');
      } else {
        this.$el.addClass('active');
      }
    }
  });
  
  Views.ListView = Marionette.CompositeView.extend({
    template: 'template-taskListCompositeView',
    childView: Views.ItemView,
    childViewContainer: 'task-list',
    initialize: function() {
      this.bindTo(this.collection, 'all', this.update, this);
    },
    onRender: function() {
      this.update();
    }
  });
});
