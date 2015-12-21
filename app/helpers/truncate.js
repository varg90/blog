import Ember from 'ember';

export function truncate(params) {
  var text = params[0];
  var limit = params[1] || 300;
  if (text.length > limit){
    text = text.substr(0, limit - 3) + "...";
  }
  return text;
}

export default Ember.Helper.helper(truncate);
