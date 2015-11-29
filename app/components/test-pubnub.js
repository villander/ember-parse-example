import Ember from 'ember';

export default Ember.Component.extend({
  pubnubEmber: Ember.inject.service('pubnub'),

  messages:[],

  setupPubNub: function () {
    this.set('messages', []);
    var channel =  'vila';
    this.subscribe(channel);

  }.on('init'),

  subscribe: function(theChannel){

    //var pn   = this.get('pubnub');
    var pn = this.get('pubnubEmber');
    var self = this;

    pn.emSubscribe({ channel: theChannel });

    var count = 0;

    pn.on(pn.emMsgEv(theChannel), function (payload) {
      self.get('messages').pushObject(payload.message);
      console.log(count++);
    });

    pn.emHistory({

      channel: theChannel,
      callback: function(payload){

        $.each(payload[0], function( index, message ) {
          self.get('messages').pushObject(message);
        });
      }

    });

  }
});
