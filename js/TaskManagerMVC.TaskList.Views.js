TaskManagerMVC.module('TaskList.Views', function(Views, App, Backbone, Marionette, $, _) {
  
  Views.TaskView = Marionette.ItemView.extend({
    tagName: 'li',
    template: '#template-taskTaskView',
    initialize: function() {
      this.bindTo(this.model, 'change', this.render, this);
    },
    events: {
      'click .toggle' : 'toggle'
    },
    onRender: function() {
      if (this.model.get('completed')) {
        this.$el.hide();
      } else {
        this.$el.show();;
      }
    },
    toggle: function() {
      this.model.toggle().save();
    }
  });
  
  Views.ListView = Marionette.CompositeView.extend({
    template: '#template-taskListCompositeView',
    childView: Views.TaskView,
    childViewContainer: 'task-list',
    initialize: function() {
      this.bindTo(this.collection, 'all', this.update, this);
    },
    events: {
      'click .toggle': 'onToggle'
    },
    onRender: function() {
      this.update();
    },
    update: function() {
      this.collection.each(function(task) {
        if (task.get('completed') === false) {
          task.hide();
        } else {
          task.show();
        }
      });
    },
    onToggle: function(event) {
      var task = event.currentTarget;
      if (task.get('completed') === true) {
        task.hide();
        task.save({'completed': false});
      }
    }
  });
});
