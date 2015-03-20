import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    symbol: {
      refreshModel: true
    }
  },
  model: function(params) {
    var symbol = params.symbol || 'AAPL';

    var url = `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=${symbol}&callback=?`;
    var getQuote = Ember.$.getJSON(url);
    var getNotes = this.store.find('note');
    return Ember.RSVP.hash({ quote: getQuote, notes: getNotes});
  },
  actions: {
    updateSymbol: function(symbol) {
      this.transitionTo({queryParams: {symbol: symbol}});
    }
  }
});
