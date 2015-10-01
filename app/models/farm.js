import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  city: DS.belongsTo('cities', { async: true }),
  image: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
