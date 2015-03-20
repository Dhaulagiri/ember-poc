import Ember from 'ember';
import layout from '../templates/components/symbol-typeahead';

export default Ember.TextField.extend({
  classNames: ['typeahead'],
  layout: layout,
  data: null,
  name:null,
  selection: null,
  minLength: 1,
  remoteUrl: 'http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input=%QUERY&callback=?',
  initTypeahead: function() {
    var self = this;
    var t = null;
    var engine = new Bloodhound({
      name: this.get('name'),
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: this.get('remoteUrl')
    });
    var options = {
      highlight: this.get('highlight'),
      hint: this.get('hint') || false,
      minLength: this.get('minLength')
    };
    var dataset = this.get('dataset');

    engine.initialize();

    t = this.$().typeahead(options, dataset);

    this.set('_typeahead', t);

    t.on('typeahead:selected', function(event, item) {
      self.set('selection', "");
      self.sendAction('action', item.Symbol);
    });

    t.on('typeahead:autocompleted', function(event, item) {
      self.set('selection', item);
    });
  },

  dataset: function() {
    var name = this.get('name') || 'default';
    var key = this.get('displayKey') || 'value';
    var engine = new Bloodhound({
        name: this.get('name'),
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: this.get('remoteUrl'),
        filter: function(response) {
          var resultsArray = [];
          response.forEach(function(r) {
            resultsArray.push(Ember.Object.create(r));
          });
          return resultsArray;
        }
      }
    });

    engine.initialize();

    return {
        name: name,
        displayKey: key,
        source: engine.ttAdapter()
    };

  }.property(),

  didInsertElement: function() {
    this._super();
    this.initTypeahead();
  }
});
