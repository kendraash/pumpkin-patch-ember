import Ember from 'ember';

export default Ember.Component.extend({
  addNewFarm: false,
  actions: {
    farmFormShow() {
      this.set('addNewFarm', true);
    },
    saveFarm() {
    
      var params = {
        name: this.get('name'),
        image: this.get('image'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        city: this.get('city'),
      };
      this.set('addNewFarm', false);
      this.sendAction('saveFarm', params);
    }
  }
});
