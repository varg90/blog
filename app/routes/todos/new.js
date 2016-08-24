import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    save() {
      var newTodo = this.store.createRecord('todo', this.currentModel);
      newTodo.save().then((todo) => {
        this.transitionTo('todos.show', todo);
      });
    },
    cancel() {
      this.transitionTo('todos');
    }
  }
});
