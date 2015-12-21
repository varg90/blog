import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', function() {
    this.route('new', { path: '/new' });
    this.route('show', { path: '/:post_id' });
  });
});

export default Router;
