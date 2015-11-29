import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){

    /*var other = this.store.filter('profile', {}, function(record){
      return record.get('me') === "flama@cae";
    });*/

    var conversations = this.store.filter('conversation', {}, function(record) {
      return record.get('me') === "flama@julio";
    });

    var profiles = this.store.findAll('profile');

    var me = this.store.filter('profile', {}, function(record) {
      return record.get('identifier') === "julio@flama";
    });

    var other = this.store.filter('profile', {}, function(record){
      return record.get('identifier') === "cae@flama";
    });

    var teste = this.store.findAll('profile').then(function(record) {
      return record.filterBy('identifier', 'fred@remoto')[0];
    });

    var user = this.store.find('profile', 'mH2XUbKIDu');


    //var me = this.store.find('profile', '3eVsRIhpA3');

    return {
      me: me,
      other: other,
      conversations: conversations,
      profiles: profiles,
      teste: teste,
      user: user
    };

    /*return this.store.filter('conversation', {}, function(record) {
      return record.get('me') === "flama@julio";
    });*/

        /*return this.store.filter('profile', {}, function(record) {

          return record.get('alias') == 'cae';

        });*/
    //});

    //console.log(post, 'olha');

  }

});
