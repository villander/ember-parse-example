import DS from 'ember-data';

export default DS.Model.extend({
  other   : DS.attr('string'),
  me : DS.attr('string')
});