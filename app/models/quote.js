import DS from 'ember-data';

export default DS.Model.extend({
  Name: DS.attr('string'),
  Symbol: DS.attr('string'),
  LastPrice: DS.attr('number'),
  Change: DS.attr('number'),
  ChangePercent: DS.attr('number'),
  Timestamp: DS.attr('string'),
  MSDate: DS.attr('number'),
  MarketCap: DS.attr('number'),
  Volume: DS.attr('number'),
  ChangeYTD: DS.attr('number'),
  ChangePercentYTD: DS.attr('number'),
  High: DS.attr('number'),
  Low: DS.attr('number'),
  Open: DS.attr('number')
});
