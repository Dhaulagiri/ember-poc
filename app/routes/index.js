import Ember from 'ember';

var TIMEOUT = 5000;
var timeoutFunc;

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
      // cancel the timeout
      clearTimeout(timeoutFunc);
      this.transitionTo({queryParams: {symbol: symbol}});
    }
  },
  afterModel: function(model) {
    this.refreshQuote(model);
  },

  refreshQuote: function(model) {

    var symbol = model.quote.Symbol;
    var url = `http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=${symbol}&callback=?`;

    Ember.$.getJSON(url).then(function(res) {
      Ember.set(model, 'quote', res);
    });

    timeoutFunc = setTimeout(this.refreshQuote.bind(this, model), TIMEOUT);
  }
});
