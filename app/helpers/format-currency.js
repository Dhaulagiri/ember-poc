import Ember from 'ember';

export function formatCurrency(input) {
  var val;
  if (input !== null && input !== undefined && input.length > 0) {
    val = input[0];
  } else {
    val = input;
  }

  if (val === null) {
    return "N/A";
  } else {
    return numeral(val).format('$0,0.00');
  }
}

export default Ember.HTMLBars.makeBoundHelper(formatCurrency);
