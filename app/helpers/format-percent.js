import Ember from 'ember';

export function formatPercent(input) {
  var val;
  if (input !== null && input !== undefined && input.length > 0) {
    val = input[0];
  } else {
    val = input;
  }
  if (val === null) {
    return "N/A";
  } else {
    return numeral(val/100).format('0.00%');
  }
}

export default Ember.HTMLBars.makeBoundHelper(formatPercent);
