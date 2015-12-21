import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    save() {
      var newPost = this.store.createRecord('post', this.currentModel);
      newPost.save().then((post) => {
        this.transitionTo('posts.show', post);
      });
    },
    cancel() {
      this.transitionTo('posts');
    }
  }
});
