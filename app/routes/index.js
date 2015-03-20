import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var self = this;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=AAPL&callback=?';
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON(url).then(function(res) {
        // manually give this an ID
        res.id = 1;
        resolve(self.store.push('quote', res));
      });
    });
  }
});