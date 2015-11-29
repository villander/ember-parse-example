import DS from 'ember-data';

export default DS.Model.extend({
  identifier    : DS.attr('string'),
  company       : DS.attr('string'),
  alias         : DS.attr('string'),
  name          : DS.attr('string'),
  status        : DS.attr('string'),
  channelPrivate: DS.attr('boolean'),
  conversations : DS.hasMany('conversation', {async: true, inverse:null}),
  destination   : DS.attr('string'),
  email         : DS.attr('string'),
  extension     : DS.attr('string'),
  handle        : DS.attr('string'),
  password      : DS.attr('string')
});
