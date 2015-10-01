import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('cities', params.city_id);
  },

  actions: {
    saveFarm(params) {
      var newFarm = this.store.createRecord('farm', params);
      var city = params.city;
      city.get('farms').addObject(newFarm);
      newFarm.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', params.city);
    }
  }
});
