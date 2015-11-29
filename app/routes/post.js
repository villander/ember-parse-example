import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('post', 'vjNPVhyvU5');
    //console.log(post, 'olha');

  }

});
