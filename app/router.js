import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('todos', function() {
    this.route('new', { path: '/new' });
    this.route('show', { path: '/:todo_id' });
  });
});

export default Router;
