import DS from 'ember-data';

export default DS.Model.extend({
  farms: DS.hasMany('farm', { async: true }),
  name: DS.attr(),
  image: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')

});
