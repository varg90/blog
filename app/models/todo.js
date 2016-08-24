import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  completed: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
